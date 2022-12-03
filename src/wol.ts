import { createSocket } from 'node:dgram';
import { isIPv6 } from 'node:net';

const MAC_BYTES = 6;

export const chunk = <T extends string | unknown[]>(
  arr: T,
  size: number,
): T[] =>
  Array.from(
    { length: Math.ceil(arr.length / size) },
    (_, i) => arr.slice(i * size, i * size + size) as T,
  );

/**
 * Creates a WOL magic packet intended to wake the given MAC address.
 * @param {string} macAddress The MAC address of the device to wake
 * @param {string} [password] The SecureOn password of the device to wake
 * @return {Buffer} The WOL magic packet
 */
export const createMagicPacket = (
  macAddress: string,
  password?: string,
): Buffer => {
  const numMacs = 16;
  const normalizedMacAddress =
    macAddress.length === 2 * MAC_BYTES + (MAC_BYTES - 1)
      ? // The MAC address uses separators - remove them
        macAddress.replace(new RegExp(macAddress[2], 'g'), '')
      : // The MAC address does not use separators - use it as it is
        macAddress;

  if (
    normalizedMacAddress.length !== 2 * MAC_BYTES ||
    normalizedMacAddress.match(/[^a-fA-F0-9]/)
  ) {
    throw new Error(`Malformed MAC address '${macAddress}'`);
  }

  if (password && password.length !== 4 && password.length !== 6) {
    throw new Error(
      `Malformed password '${password}' (must be either exaclty 4 or exactly 6 characters)`,
    );
  }

  const resultArr = [
    // Broadcast frame/synchronization stream (6 0xFF bytes)
    ...Array.from({ length: MAC_BYTES }, () => 0xff),
    // Target MAC address repeated 16 times
    ...chunk(normalizedMacAddress.repeat(numMacs), 2).map((hex) =>
      parseInt(hex, 16),
    ),
    // Password (if provided)
    ...Array.from(password || '').map((char) => char.charCodeAt(0)),
  ];

  return Buffer.from(resultArr);
};

/**
 * Sends a WOL magic packet on the network
 * @param {Buffer} magicPacket The WOL magic packet ot send
 * @param {Object} options An object containing some sending options
 * @param {string} [options.address='255.255.255.255'] The address to send the magic packet to
 * @param {number} [options.port=9] The port to send the magic packet to
 * @return {Promise<Buffer>} A promise that returns the sent magic packet when resolved, or an error when rejected
 */
export const send = (
  magicPacket: Buffer,
  options: {
    address?: string;
    port?: number;
  } = {
    address: '255.255.255.255',
    port: 9,
  },
): Promise<Buffer> =>
  new Promise((resolve, reject) => {
    const protocol = isIPv6(options.address) ? 'udp6' : 'udp4';
    const socket = createSocket(protocol);
    socket.once('error', (err) => {
      socket.close();
      reject(err);
    });
    socket.once('listening', () => socket.setBroadcast(true));
    socket.send(
      magicPacket,
      0,
      magicPacket.length,
      options.port,
      options.address,
      (err) => {
        socket.close();
        if (err) {
          reject(err);
        } else {
          resolve(magicPacket);
        }
      },
    );
  });

/**
 * Creates and sends a magic packet intended to wake the given MAC address.
 * @param {string} macAddress The MAC address of the device to wake
 * @param {object} options An object containing some sending options
 * @param {string} [options.password] The SecureOn password of the device to wake
 * @param {string} [options.address='255.255.255.255'] The address to send the magic packet to
 * @param {number} [options.port=9] The port to send the magic packet to
 * @return {Promise<Buffer>} A promise that returns the sent magic packet when resolved, or an error when rejected
 */
export const wake = async (
  macAddress: string,
  options?: {
    password?: string;
    address?: string;
    port?: number;
  },
): Promise<Buffer> => {
  const magicPacket = createMagicPacket(macAddress, options?.password);
  return send(magicPacket, options);
};
