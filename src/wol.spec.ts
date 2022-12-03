jest.mock('node:dgram');

import * as dgram from 'node:dgram';
import { describe, it, expect } from '@jest/globals';
import { chunk, createMagicPacket, send, wake } from './wol';

describe('chunk', () => {
  it('works with strings', () => {
    expect(chunk('abcdef', 2)).toEqual(['ab', 'cd', 'ef']);
  });

  it('works with arrays', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });
});

describe('createMagicPacket', () => {
  it('correcly creates a magic packet without a password', () => {
    const macAddress = '01:23:45:67:89:ab';

    // With : as separator
    expect(createMagicPacket(macAddress).toString('hex')).toBe(
      `${'f'.repeat(12)}${macAddress.replace(/:/g, '').repeat(16)}`,
    );
    // With - as separator
    expect(createMagicPacket(macAddress).toString('hex')).toBe(
      `${'f'.repeat(12)}${macAddress.replace(/:/g, '').repeat(16)}`,
    );
    // Without separators
    expect(
      createMagicPacket(macAddress.replace(/:/g, '')).toString('hex'),
    ).toBe(`${'f'.repeat(12)}${macAddress.replace(/:/g, '').repeat(16)}`);
  });

  it('correcly creates a magic packet with a 4 bytes password', () => {
    const macAddress = '01:23:45:67:89:ab';
    const password = 'test';

    expect(createMagicPacket(macAddress, password).toString('hex')).toBe(
      `${'f'.repeat(12)}${macAddress.replace(/:/g, '').repeat(16)}${Array.from(
        password,
      )
        .map((char) => char.charCodeAt(0).toString(16))
        .join('')}`,
    );
  });

  it('correcly creates a magic packet with a 6 bytes password', () => {
    const macAddress = '01:23:45:67:89:ab';
    const password = 'test12';

    expect(createMagicPacket(macAddress, password).toString('hex')).toBe(
      `${'f'.repeat(12)}${macAddress.replace(/:/g, '').repeat(16)}${Array.from(
        password,
      )
        .map((char) => char.charCodeAt(0).toString(16))
        .join('')}`,
    );
  });

  it('throws an error if the MAC address has the wrong length', () => {
    const macAddress = '01:23:45:67:89:ab:cd';

    expect(() => createMagicPacket(macAddress)).toThrowError(
      `Malformed MAC address '${macAddress}'`,
    );
  });

  it('throws an error if the MAC address contains invalid characters', () => {
    const macAddress = '01:23:45:67:89:gh';

    expect(() => createMagicPacket(macAddress)).toThrowError(
      `Malformed MAC address '${macAddress}'`,
    );
  });

  it('throws an error if the password is malformed', () => {
    const macAddress = '01:23:45:67:89:ab';
    const password = 'test1';

    expect(() => createMagicPacket(macAddress, password)).toThrowError(
      `Malformed password '${password}' (must be either exaclty 4 or exactly 6 characters)`,
    );
  });
});

describe('send', () => {
  it('broadcasts the provided magic packet', async () => {
    const magicPacket = Buffer.from('test');
    const mockSetBroadcast = jest.fn();
    const mockSend = jest.fn((msg, offset, length, port, address, callback) => {
      callback();
    });
    const mockClose = jest.fn();
    (dgram.createSocket as jest.Mock).mockReturnValue({
      once(event: string, callback: (err?: Error) => void) {
        if (event === 'listening') {
          callback();
        }
      },
      send: mockSend,
      setBroadcast: mockSetBroadcast,
      close: mockClose,
    });
    await expect(send(magicPacket)).resolves.toEqual(magicPacket);
    expect(dgram.createSocket).toHaveBeenCalledWith('udp4');
    expect(mockSetBroadcast).toHaveBeenCalledWith(true);
    expect(mockSend).toHaveBeenCalledWith(
      magicPacket,
      0,
      magicPacket.length,
      9,
      '255.255.255.255',
      expect.any(Function),
    );
    expect(mockClose).toHaveBeenCalled();
  });

  it('also works with IPv6 addresses', async () => {
    const magicPacket = Buffer.from('test');
    const mockSetBroadcast = jest.fn();
    const mockSend = jest.fn((msg, offset, length, port, address, callback) => {
      callback();
    });
    const mockClose = jest.fn();
    (dgram.createSocket as jest.Mock).mockReturnValue({
      once(event: string, callback: (err?: Error) => void) {
        if (event === 'listening') {
          callback();
        }
      },
      send: mockSend,
      setBroadcast: mockSetBroadcast,
      close: mockClose,
    });
    await expect(
      send(magicPacket, {
        address: 'fe80::1',
      }),
    ).resolves.toEqual(magicPacket);
    expect(dgram.createSocket).toHaveBeenCalledWith('udp6');
    expect(mockSetBroadcast).toHaveBeenCalledWith(true);
    expect(mockSend).toHaveBeenCalledWith(
      magicPacket,
      0,
      magicPacket.length,
      9,
      'fe80::1',
      expect.any(Function),
    );
    expect(mockClose).toHaveBeenCalled();
  });

  it('throws if something goes wrong broadcasting the magic packet', async () => {
    const error = new Error('broadcast error');
    const mockClose = jest.fn();
    (dgram.createSocket as jest.Mock).mockReturnValue({
      once(event: string, callback: (err?: Error) => void) {
        if (event === 'listening') {
          callback();
        }
      },
      send: jest.fn((msg, offset, length, port, address, callback) => {
        callback(error);
      }),
      setBroadcast: jest.fn(),
      close: mockClose,
    });
    await expect(send(Buffer.from('test'))).rejects.toThrowError(error);
    expect(mockClose).toHaveBeenCalled();
  });

  it('throws if something goes wrong in the socket connection', async () => {
    const error = new Error('socket error');
    const mockClose = jest.fn();
    (dgram.createSocket as jest.Mock).mockReturnValue({
      once(event: string, callback: (err?: Error) => void) {
        if (event === 'error') {
          callback(error);
        }
      },
      close: mockClose,
    });
    await expect(send(Buffer.from('test'))).rejects.toThrowError(error);
    expect(mockClose).toHaveBeenCalled();
  });
});

describe('wake', () => {
  it('creates the magic packet and sends it properly', async () => {
    const macAddress = '01:23:45:67:89:ab';
    const password = 'test';
    const expectedMagicPacket = createMagicPacket(macAddress, password);

    const mockSetBroadcast = jest.fn();
    const mockSend = jest.fn((msg, offset, length, port, address, callback) => {
      callback();
    });
    const mockClose = jest.fn();
    (dgram.createSocket as jest.Mock).mockReturnValue({
      once(event: string, callback: (err?: Error) => void) {
        if (event === 'listening') {
          callback();
        }
      },
      send: mockSend,
      setBroadcast: mockSetBroadcast,
      close: mockClose,
    });
    await expect(
      wake(macAddress, {
        address: '127.0.0.1',
        port: 9999,
        password,
      }),
    ).resolves.toEqual(expectedMagicPacket);
    expect(mockSend).toHaveBeenCalledWith(
      expectedMagicPacket,
      0,
      expectedMagicPacket.length,
      9999,
      '127.0.0.1',
      expect.any(Function),
    );
  });
});
