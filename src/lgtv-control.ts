import WebSocket from 'isomorphic-ws';
import { URL } from 'url';
import defaultConfig from './default-config';

export enum Button {
  HOME = 'HOME',
  BACK = 'BACK',
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  THREED_MODE = '3D_MODE',
}

export interface ILGTVConnectOptions {
  appName?: string;
  vendorName?: string;
}

/**
 * LGTV Control - A promise-based package to control LGTVs with Node.js.
 * @author Giorgio Garasto <giorgio@garasto.it>
 * @link https://github.com/Dabolus/lgtv-control
 * @license MIT
 * @class
 */
export class LGTV {

  private get nextId(): string {
    return (++this.currId).toString();
  }

  /**
   * Returns a properly formatted TV URL for the given hostname.
   * @param {string} hostname The hostname to get the TV URL from
   * @return {URL} The URL object corresponding to the TV hostname
   */
  public static getTVURL(hostname: string): URL {
    const [, host, port] = hostname.match(
      /^(?:(?:http[s]?|ftp|ws|ssap):\/)?\/?([^:/?#\s]+):?([0-9]*)?/i,
    );
    if (!host) {
      throw new Error('Invalid hostname.');
    }
    return new URL(`ws://${host}:${port || 3000}`);
  }

  private readonly connection: WebSocket;
  private config: any;
  private readonly connectionOpened: Promise<void>;

  private currId = 0;
  private callbacks: {
    [key: string]: {
      resolve: (val: any) => void;
      reject: (err: Error) => void;
    };
  } = {};

  /**
   * Connects to an LG TV to the given hostname.
   * @param {string} hostname The hostname of the LG TV to connect to
   * @param {*} config Other configuration options
   * @param {string} [config.appName='LGTV Control'] The app name to send to the LGTV. Defaults to 'LGTV Control'
   * @param {string} [config.vendorName='Node.js®'] The vendor name to send to the LGTV. Defaults to 'Node.js®'
   * @constructor
   */
  public constructor(hostname: string, config: ILGTVConnectOptions = {
    appName: 'LGTV Control',
    vendorName: 'Node.js®',
  }) {
    this.config = defaultConfig;
    this.config.manifest.signed.localizedAppNames[''] = config.appName;
    this.config.manifest.signed.localizedVendorNames[''] = config.vendorName;
    const { origin } = LGTV.getTVURL(hostname);
    this.connection = new WebSocket(origin);
    this.connection.on('message', this.handleMessage.bind(this));
    this.connectionOpened = new Promise((resolve, reject) => {
      this.connection.on('open', resolve);
      this.connection.on('error', reject);
    });
  }

  /**
   * @param {string} type
   * @param {string} uri
   * @param {*} payload
   * @return {Promise<*>} The response
   */
  public async send(type: string, uri: string, payload: any): Promise<any> {
    await this.connectionOpened;
    return new Promise((resolve, reject) => {
      const id = this.nextId;
      this.callbacks[id] = { resolve, reject };
      this.connection.send(JSON.stringify({
        id,
        type,
        uri,
        payload,
      }), (err) => err && reject(err));
    });
  }

  /**
   * @param {string} [clientKey] The client key to send to the LGTV to authenticate your app. Leave empty if it is your first connection
   * @return {Promise<string>} A promise that resolves to an auth key. Remember to store the auth key somewhere to use it again next time
   */
  public async authenticate(clientKey?: string) {
    await this.connectionOpened;
    const payload = await this.send('register', undefined, {
      ...defaultConfig,
      'client-key': clientKey,
    });
    return payload['client-key'];
  }

  private handleMessage(message: string) {
    const { id, payload = {} } = JSON.parse(message);
    if (payload.pairingType === 'PROMPT' && payload.returnValue) {
      // TODO: maybe emit some kind of event
      return;
    }
    if (!id || !this.callbacks[id]) {
      this.callbacks[id].reject(new Error());
      return;
    }
    if (payload.subscribed) {
      // TODO: do something
    }
    this.callbacks[id].resolve(payload);
  }
}
