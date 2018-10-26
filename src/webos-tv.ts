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

/**
 * A promise-based package to control WebOS based TVs with JavaScript.
 * @author Giorgio Garasto <giorgio@garasto.it>
 * @link https://github.com/Dabolus/webos-tv
 * @license MIT
 * @class
 */
export class TV {

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
   * Connects to a webOS TV to the given hostname.
   * @param {string} hostname The hostname of the webOS TV to connect to
   * @param {*} config Other configuration options
   * @param {string} [config.appName='WebOS TV Control'] The app name to send to the webOS TV. Defaults to 'WebOS TV Control'
   * @param {string} [config.vendorName='Node.js®'] The vendor name to send to the webOS TV. Defaults to 'JavaScript'
   * @constructor
   */
  public constructor(hostname: string, config: {
    appName?: string;
    vendorName?: string;
  } = {
    appName: 'WebOS TV Control',
    vendorName: 'JavaScript',
  }) {
    this.config = defaultConfig;
    this.config.manifest.signed.localizedAppNames[''] = config.appName;
    this.config.manifest.signed.localizedVendorNames[''] = config.vendorName;
    const { origin } = TV.getTVURL(hostname);
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
   * @param {string} [clientKey] The client key to send to the webOS TV to authenticate your app. Leave empty if it is your first connection
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

  /**
   * @param {string} uri
   * @param {*} [payload]
   * @return {Promise<*>}
   */
  public request(uri: string, payload?: any): Promise<any> {
    return this.send('request', uri, payload);
  }

  /**
   * @param {string} uri
   * @param {*} [payload]
   * @return {Promise<*>}
   */
  public subscribe(uri: string, payload?: any) {
    return this.send('subscribe', uri, payload);
  }

  /**
   * Gets the current volume of the webOS TV.
   * @return {Promise<number>} A promise that resolves to the current volume of the webOS TV
   */
  public async getVolume(): Promise<number> {
    const { volume } = await this.request('ssap://audio/getVolume');
    return parseFloat(volume);
  }

  /**
   * Sets the volume on the webOS TV.
   * @param {number | string} volumeToSet The new volume. It can either be a number, or 'max' or 'min'
   * @return {Promise<number>} A promise that resolves to the new volume of the webOS TV
   */
  public async setVolume(volumeToSet: number | string): Promise<number> {
    let volume = 0;
    if (volumeToSet === 'max') {
      volume = 100;
    } else if (volumeToSet === 'min') {
      volume = 0;
    } else {
      volume = Math.min(
        100,
        Math.max(
          0,
          (typeof volumeToSet === 'string' ? parseFloat(volumeToSet) : volumeToSet) || 0,
        ),
      );
    }
    await this.request('ssap://audio/setVolume', { volume });
    return this.getVolume();
  }

  /**
   * Increases the webOS TV volume by the specified delta.
   * @param {number | string} deltaVolume The volume to add to the webOS TV
   * @return {Promise<number>} A promise that resolves to the new volume of the webOS TV
   */
  public async increaseVolume(deltaVolume: number | string): Promise<number> {
    const oldVolume = await this.getVolume();
    return this.setVolume(oldVolume + (typeof deltaVolume === 'string' ? parseFloat(deltaVolume) : deltaVolume));
  }

  /**
   * Decreases the webOS TV volume by the specified delta.
   * @param {number | string} deltaVolume The volume to remove from the webOS TV
   * @return {Promise<number>} A promise that resolves to the new volume of the webOS TV
   */
  public async decreaseVolume(deltaVolume: number | string): Promise<number> {
    const oldVolume = await this.getVolume();
    return this.setVolume(oldVolume - (typeof deltaVolume === 'string' ? parseFloat(deltaVolume) : deltaVolume));
  }

  /**
   * Sends a volume up signal to the webOS TV.
   * @return {Promise<number>} A promise that resolves to the new volume of the webOS TV
   */
  public async volumeUp(): Promise<number> {
    await this.request('ssap://audio/volumeUp');
    return this.getVolume();
  }

  /**
   * Sends a volume down signal to the webOS TV.
   * @return {Promise<number>} A promise that resolves to the new volume of the webOS TV
   */
  public async volumeDown(): Promise<number> {
    await this.request('ssap://audio/volumeDown');
    return this.getVolume();
  }

  /**
   * Checks whether the webOS TV is currently muted or not.
   * @return {Promise<boolean>} A promise that resolves to the current mute state of the webOS TV
   */
  public async isMuted(): Promise<boolean> {
    const { mute } = await this.request('ssap://audio/getStatus');
    return mute;
  }

  /**
   * Mutes the webOS TV.
   * @return {Promise<boolean>} A promise that resolves to the new mute state of the webOS TV (always true)
   */
  public async mute(): Promise<true> {
    await this.request('ssap://audio/setMute', { mute: true });
    return true;
  }

  /**
   * Unmutes the webOS TV.
   * @return {Promise<boolean>} A promise that resolves to the new mute state of the webOS TV (always false)
   */
  public async unmute(): Promise<false> {
    await this.request('ssap://audio/setMute', { mute: false });
    return false;
  }

  /**
   * Toggles the mute state of the webOS TV.
   * @return {Promise<boolean>} A promise that resolves to the new mute state of the webOS TV (always the opposite of the old state)
   */
  public async toggleMute(): Promise<boolean> {
    const muted = await this.isMuted();
    return muted ? this.unmute() : this.mute();
  }

  /**
   * Gets info about the foreground app.
   * @return {Promise<{ appId: string, windowId: string, processId: string }>} A promise that resolves to the info of the foreground app.
   */
  public async foregroundAppInfo(): Promise<{
    appId: string;
    windowId: string;
    processId: string;
  }> {
    const { appId, windowId, processId } =
      await this.request('ssap://com.webos.applicationManager/getForegroundAppInfo');
    return { appId, windowId, processId };
  }

  /**
   * Gets the app status.
   * @return {Promise<any>} The app status
   */
  public async appStatus() {
    return this.request('ssap://com.webos.service.appstatus/getAppStatus');
  }

  /**
   * Gets the app state.
   * @return {Promise<any>} The app state
   */
  public async appState() {
    return this.request('ssap://system.launcher/getAppState');
  }

  /**
   * Gets the list of the available apps.
   * @return {Promise<any>} A promise that resolves to the list of the available apps.
   */
  public async appList() {
    return this.request('ssap://com.webos.applicationManager/listApps');
  }

  /**
   * Lists the launch points of the webOS TV.
   * @return {Promise<any>} The list of the available launch points
   */
  public async launchPoints() {
    return this.request('ssap://com.webos.applicationManager/listLaunchPoints');
  }

  /**
   * Launches the app with the specified ID.
   * @param {string} id The ID of the app to launch
   * @return {Promise<any>}
   */
  public async launch(id: string) {
    return this.request('ssap://system.launcher/launch', { id });
  }

  /**
   * Gets the list of the channels on the webOS TV.
   * @return {Promise<Array<{ channelId: string, programId: string, signalChannelId: string, chanCode: string, channelMode: string, channelModeId: number, channelType: string, channelTypeId: number, channelNumber: string, majorNumber: number, minorNumber: number, channelName: string, skipped: boolean, locked: boolean, descrambled: boolean, scrambled: boolean, serviceType: number, favoriteGroup: any[], imgUrl: string, display: number, satelliteName: string, fineTuned: boolean, Frequency: number, shortCut: number, Bandwidth: number, HDTV: boolean, Invisible: boolean, TV: boolean, DTV: boolean, ATV: boolean, Data: boolean, Radio: boolean, Numeric: boolean, PrimaryCh: boolean, specialService: boolean, CASystemIDList: any, CASystemIDListCount: number, groupIdList: any[][], channelGenreCode: string, favoriteIdxA: number, favoriteIdxB: number, favoriteIdxC: number, favoriteIdxD: number, imgUrl2: string, channelLogoSize: string, ipChanServerUrl: string, payChan: boolean, IPChannelCode: string, ipCallNumber: string, otuFlag: boolean }>>} The list of the channels on the webOS TV
   */
  public async channelList(): Promise<Array<{
    channelId: string;
    programId: string;
    signalChannelId: string;
    chanCode: string;
    channelMode: string;
    channelModeId: number;
    channelType: string;
    channelTypeId: number;
    channelNumber: string;
    majorNumber: number;
    minorNumber: number;
    channelName: string;
    skipped: boolean;
    locked: boolean;
    descrambled: boolean;
    scrambled: boolean;
    serviceType: number;
    favoriteGroup: any[];
    imgUrl: string;
    display: number;
    satelliteName: string;
    fineTuned: boolean;
    Frequency: number;
    shortCut: number;
    Bandwidth: number;
    HDTV: boolean;
    Invisible: boolean;
    TV: boolean;
    DTV: boolean;
    ATV: boolean;
    Data: boolean;
    Radio: boolean;
    Numeric: boolean;
    PrimaryCh: boolean;
    specialService: boolean;
    CASystemIDList: any;
    CASystemIDListCount: number;
    groupIdList: any[][];
    channelGenreCode: string;
    favoriteIdxA: number;
    favoriteIdxB: number;
    favoriteIdxC: number;
    favoriteIdxD: number;
    imgUrl2: string;
    channelLogoSize: string;
    ipChanServerUrl: string;
    payChan: boolean;
    IPChannelCode: string;
    ipCallNumber: string;
    otuFlag: boolean;
  }>> {
    return this.request('ssap://tv/getChannelList');
  }

  /**
   * Enables 3D on the webOS TV.
   * @return {Promise<boolean>} A promise that resolves to the new state of the 3D of the webOS TV (always true)
   */
  public async enable3D() {
    return this.request('ssap://com.webos.service.tv.display/set3DOn');
  }

  /**
   * Disables 3D on the webOS TV.
   * @return {Promise<boolean>} A promise that resolves to the new state of the 3D of the webOS TV (always false)
   */
  public disable3D() {
    return this.request('ssap://com.webos.service.tv.display/set3DOff');
  }

  /**
   * Checks whether the 3D is currently enabled or not on the webOS TV.
   * @return {Promise<{ status: boolean, pattern: '2d' | '2dto3d' | 'side_side_half' | 'top_bottom' }>}
   */
  public async check3DStatus(): Promise<{
    status: boolean;
    pattern: '2d' | '2dto3d' | 'side_side_half' | 'top_bottom';
  }> {
    const { status3D } = await this.request('ssap://com.webos.service.tv.display/get3DStatus');
    return status3D;
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
