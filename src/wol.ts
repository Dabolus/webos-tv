import { createSocket } from 'dgram';
import { isIPv6 } from 'net';

const MAC_BYTES = 6;

/**
 * Creates a WOL magic packet intended to wake the given MAC address.
 * @param {string} macAddress The MAC address of the device to wake
 * @return {Buffer} The WOL magic packet
 */
export const createMagicPacket = (macAddress: string): Buffer => {
  const macBuffer = Buffer.alloc(MAC_BYTES);
  const numMacs = 16;
  const buffer = Buffer.alloc((1 + numMacs) * MAC_BYTES);
  if (macAddress.length === 2 * MAC_BYTES + (MAC_BYTES - 1)) {
    macAddress = macAddress.replace(new RegExp(macAddress[2], 'g'), '');
  }
  if (
    macAddress.length !== (2 * MAC_BYTES || macAddress.match(/[^a-fA-F0-9]/))
  ) {
    throw new Error(`Malformed MAC address '${macAddress}'`);
  }
  let i;
  for (i = 0; i < MAC_BYTES; ++i) {
    macBuffer[i] = parseInt(macAddress.substr(2 * i, 2), 16);
  }

  for (i = 0; i < MAC_BYTES; ++i) {
    buffer[i] = 0xff;
  }

  for (i = 0; i < numMacs; ++i) {
    macBuffer.copy(buffer, (i + 1) * MAC_BYTES, 0, macBuffer.length);
  }

  return buffer;
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
    socket.on('error', (err) => {
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
 * @param {string} [options.address='255.255.255.255'] The address to send the magic packet to
 * @param {number} [options.port=9] The port to send the magic packet to
 * @return {Promise<Buffer>} A promise that returns the sent magic packet when resolved, or an error when rejected
 */
export const wake = async (
  macAddress: string,
  options?: {
    address?: string;
    port?: number;
  },
): Promise<Buffer> => {
  const magicPacket = createMagicPacket(macAddress);
  return send(magicPacket, options);
};
