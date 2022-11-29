import { describe, it, expect, afterEach } from '@jest/globals';
import WS from 'jest-websocket-mock';
import defaultConfig from './default-config';
import { TV } from './webos-tv';

describe('TV Connection', () => {
  afterEach(() => {
    WS.clean();
  });

  it('correctly gets the TV URL from the provided string', () => {
    const protocols = [
      '',
      'http://',
      'https://',
      'ftp://',
      'sftp://',
      'ftps://',
      'ws://',
      'wss://',
      'ssap://',
    ];
    const ports = ['', ':3000'];
    const hashes = ['', '#', '#test'];
    const queryStrings = ['', '?', '?test', '?test=1', '?test1=1&test2=2'];
    protocols.forEach((protocol) => {
      ports.forEach((port) => {
        hashes.forEach((hash) => {
          queryStrings.forEach((queryString) => {
            const url = `${protocol}test${port}/${hash}${queryString}`;
            expect(TV.getTVURL(url).toString()).toBe('ws://test:3000/');
          });
        });
      });
    });
  });

  it('authenticates with the correct payload', async () => {
    const server = new WS('ws://127.0.0.1:3000', { jsonProtocol: true });
    const tv = new TV('ws://127.0.0.1:3000');
    await server.connected;
    tv.authenticate();
    await expect(server.nextMessage).resolves.toEqual({
      id: '1',
      type: 'register',
      payload: defaultConfig,
    });
  });

  it('correctly disconnects from the TV', async () => {
    const server = new WS('ws://127.0.0.1:3000', { jsonProtocol: true });
    const tv = new TV('ws://127.0.0.1:3000');
    await server.connected;
    const authenticationPromise = tv.authenticate();
    await server.nextMessage;
    server.send({
      id: '1',
      type: 'register',
      payload: {
        ...defaultConfig,
        'client-key': 'abc123',
      },
    });
    await authenticationPromise;
    await expect(tv.disconnect()).resolves.toEqual(
      expect.objectContaining({
        type: 'close',
        code: 1000,
      }),
    );
    await server.closed;
  });
});
