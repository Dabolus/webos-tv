import WebSocket from 'isomorphic-ws';
import { URL } from 'url';
import defaultConfig from './default-config';
import { PointerInputSocket, RemoteKeyboardSocket, SpecializedWebSocket } from './sockets';

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
   * @param hostname - The hostname to get the TV URL from
   * @returns The URL object corresponding to the TV hostname
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
  private specializedSockets: {
    [key: string]: SpecializedWebSocket;
  } = {};

  /**
   * Connects to a webOS TV to the given hostname.
   * @param hostname - The hostname of the webOS TV to connect to
   * @param config - Other configuration options
   * @param config.appName - The app name to send to the webOS TV. Defaults to 'WebOS TV Control'
   * @param config.vendorName - The vendor name to send to the webOS TV. Defaults to 'JavaScript'
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
    this.connection.addEventListener('message', ({ data }) => this.handleMessage(data));
    this.connectionOpened = new Promise((resolve, reject) => {
      this.connection.addEventListener('open', resolve);
      this.connection.addEventListener('error', reject);
    });
  }

  /**
   * Sends the action of the specified type and URI and with the specified payload to the webOS TV.
   * @param type The type of the action
   * @param uri The URI of the action
   * @param payload The optional payload of the action
   * @returns A promise that resolves to the response from the webOS TV
   */
  public async send(type: string, uri: string, payload: { [key: string]: any } = {}): Promise<any> {
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
   * Sends an authentication request to the webOS TV.
   * @param clientKey - The client key to send to the webOS TV to authenticate your app. Leave empty if it is your first connection
   * @returns A promise that resolves to an auth key. Remember to store the auth key somewhere to use it again next time
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
   * Requests the specified URI with the specified payload to the webOS TV.
   * _Syntactic sugar of `send('request', uri, payload)`_
   * @param uri The URI of the action
   * @param payload The optional payload of the action
   * @returns A promise that resolves to the response from the webOS TV
   */
  public request(uri: string, payload?: any): Promise<any> {
    return this.send('request', uri, payload);
  }

  /**
   * Sends a subscription request to the specified URI and with the specified payload to the webOS TV.
   * _Syntactic sugar of `send('subscribe', uri, payload)`_
   * @param uri The URI of the action to subscribe to
   * @param payload The optional payload of the action
   * @returns A promise that resolves to the response from the webOS TV
   */
  public subscribe(uri: string, payload?: any) {
    return this.send('subscribe', uri, payload);
  }

  /**
   * Turns off the webOS TV.
   * @returns A promise
   */
  public async turnOff() {
    return this.request('ssap://system/turnOff');
  }

  /**
   * Gets the current volume of the webOS TV.
   * @returns A promise that resolves to the current volume of the webOS TV
   */
  public async getVolume(): Promise<number> {
    const { volume } = await this.request('ssap://audio/getVolume');
    return parseFloat(volume);
  }

  /**
   * Sets the volume on the webOS TV.
   * @param volumeToSet - The new volume. It can either be a number, or 'max' or 'min'
   * @returns A promise that resolves to the new volume of the webOS TV
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
   * @param deltaVolume - The volume to add to the webOS TV
   * @returns A promise that resolves to the new volume of the webOS TV
   */
  public async increaseVolume(deltaVolume: number | string): Promise<number> {
    const oldVolume = await this.getVolume();
    return this.setVolume(oldVolume + (typeof deltaVolume === 'string' ? parseFloat(deltaVolume) : deltaVolume));
  }

  /**
   * Decreases the webOS TV volume by the specified delta.
   * @param deltaVolume - The volume to remove from the webOS TV
   * @returns A promise that resolves to the new volume of the webOS TV
   */
  public async decreaseVolume(deltaVolume: number | string): Promise<number> {
    const oldVolume = await this.getVolume();
    return this.setVolume(oldVolume - (typeof deltaVolume === 'string' ? parseFloat(deltaVolume) : deltaVolume));
  }

  /**
   * Sends a volume up signal to the webOS TV.
   * @returns A promise that resolves to the new volume of the webOS TV
   */
  public async volumeUp(): Promise<number> {
    await this.request('ssap://audio/volumeUp');
    return this.getVolume();
  }

  /**
   * Sends a volume down signal to the webOS TV.
   * @returns A promise that resolves to the new volume of the webOS TV
   */
  public async volumeDown(): Promise<number> {
    await this.request('ssap://audio/volumeDown');
    return this.getVolume();
  }

  /**
   * Checks whether the webOS TV is currently muted or not.
   * @returns A promise that resolves to the current mute state of the webOS TV
   */
  public async isMuted(): Promise<boolean> {
    const { mute } = await this.request('ssap://audio/getStatus');
    return mute;
  }

  /**
   * Mutes the webOS TV.
   * @returns A promise that resolves to the new mute state of the webOS TV (always true)
   */
  public async mute(): Promise<true> {
    await this.request('ssap://audio/setMute', { mute: true });
    return true;
  }

  /**
   * Unmutes the webOS TV.
   * @returns A promise that resolves to the new mute state of the webOS TV (always false)
   */
  public async unmute(): Promise<false> {
    await this.request('ssap://audio/setMute', { mute: false });
    return false;
  }

  /**
   * Toggles the mute state of the webOS TV.
   * @returns A promise that resolves to the new mute state of the webOS TV (always the opposite of the old state)
   */
  public async toggleMute(): Promise<boolean> {
    const muted = await this.isMuted();
    return muted ? this.unmute() : this.mute();
  }

  /**
   * Gets info about the foreground app.
   * @returns A promise that resolves to the info of the foreground app
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
   * @returns The app status
   */
  public async appStatus() {
    return this.request('ssap://com.webos.service.appstatus/getAppStatus');
  }

  /**
   * Gets the app state.
   * @returns The app state
   */
  public async appState() {
    return this.request('ssap://system.launcher/getAppState');
  }

  /**
   * Gets the list of the available apps.
   * @returns A promise that resolves to the list of the available apps
   */
  public async appList() {
    return this.request('ssap://com.webos.applicationManager/listApps');
  }

  /**
   * Lists the launch points of the webOS TV.
   * @returns A promise that resolves to the list of the available launch points
   */
  public async launchPoints() {
    return this.request('ssap://com.webos.applicationManager/listLaunchPoints');
  }

  /**
   * Launches the app with the specified ID.
   * @param id - The ID of the app to launch
   * @returns A promise
   */
  public async launchApp(id: string) {
    return this.request('ssap://system.launcher/launch', { id });
  }

  /**
   * Closes the app with the specified ID.
   * @param id - The ID of the app to close
   * @returns A promise
   */
  public async closeApp(id: string) {
    return this.request('ssap://system.launcher/close', { id });
  }

  /**
   * Opens the webOS TV browser at the specified URL. Will open a new tab if the browser is already opened.
   * @param target - The target URL to open
   * @returns A promise that resolves to the session ID of the tab opened in the browser
   */
  public async openURL(target: string): Promise<string> {
    const { sessionId } = await this.request('ssap://system.launcher/open', { target });
    return sessionId;
  }

  /**
   * Gets the list of the channels on the webOS TV.
   * @returns The list of the channels on the webOS TV
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
   * Gets the current channel from the webOS TV.
   * @returns A promise that resolves to the currently active channel on the webOS TV
   */
  public async currentChannel(): Promise<{
    returnValue: boolean;
    channelId: string;
    signalChannelId: string;
    channelModeId: number;
    channelModeName: string;
    channelTypeId: number;
    channelTypeName: string;
    channelNumber: string;
    channelName: string;
    physicalNumber: number;
    isSkipped: boolean;
    isLocked: boolean;
    isDescrambled: boolean;
    isScrambled: boolean;
    isFineTuned: boolean;
    isInvisible: boolean;
    isHEVCChannel: boolean;
    favoriteGroup: any;
    hybridtvType: any;
    dualChannel: {
      dualChannelId: any;
      dualChannelTypeId: any;
      dualChannelTypeName: any;
      dualChannelNumber: any;
    };
  }> {
    return this.request('ssap://tv/getCurrentChannel');
  }

  /**
   * Enables 3D on the webOS TV.
   * @returns A promise that resolves to the new state of the 3D of the webOS TV (always true)
   */
  public async enable3D() {
    return this.request('ssap://com.webos.service.tv.display/set3DOn');
  }

  /**
   * Disables 3D on the webOS TV.
   * @returns A promise that resolves to the new state of the 3D of the webOS TV (always false)
   */
  public disable3D() {
    return this.request('ssap://com.webos.service.tv.display/set3DOff');
  }

  /**
   * Checks whether the 3D is currently enabled or not on the webOS TV.
   * @returns A promise that resolves to the status of the 3D on the webOS TV
   */
  public async check3DStatus(): Promise<{
    status: boolean;
    pattern: '2d' | '2dto3d' | 'side_side_half' | 'top_bottom';
  }> {
    const { status3D } = await this.request('ssap://com.webos.service.tv.display/get3DStatus');
    return status3D;
  }

  /**
   * Shows a toast notification on the webOS TV.
   * @param message - The message to show in the toast
   * @returns A promise that resolves to the ID of the shown toast notification.
   */
  public async showNotification(message: string): Promise<string> {
    const { toastId } = await this.request('ssap://system.notifications/createToast', { message });
    return toastId;
  }

  /**
   * Requests a specialized socket to the webOS TV.
   * @param uri The URI of the action to ask the specialized socket for
   * @param SocketClass - The class of the specialized socket to instantiate. It should be a SpecializedWebSocket or a class that extends it.
   */
  public async getSocket(uri: string, SocketClass: typeof SpecializedWebSocket): Promise<SpecializedWebSocket> {
    if (this.specializedSockets[uri]) {
      return this.specializedSockets[uri];
    }
    const { socketPath } = await this.request(uri);
    this.specializedSockets[uri] = new SocketClass(socketPath);
    this.specializedSockets[uri].addEventListener('close', () => delete this.specializedSockets[uri]);
    return this.specializedSockets[uri];
  }

  /**
   * Requests a pointer input socket to the webOS TV.
   * @returns A promise that resolves to a specialized pointer input socket
   */
  public async getPointerInputSocket(): Promise<PointerInputSocket> {
    return this.getSocket('ssap://com.webos.service.networkinput/getPointerInputSocket', PointerInputSocket) as Promise<PointerInputSocket>;
  }

  /**
   * Requests a remote keyboard socket to the webOS TV.
   * @returns A promise that resolves to a specialized remote keyboard socket
   */
  public async getRemoteKeyboardSocket(): Promise<RemoteKeyboardSocket> {
    return this.getSocket('ssap://com.webos.service.ime/registerRemoteKeyboard', RemoteKeyboardSocket) as Promise<RemoteKeyboardSocket>;
  }

  /**
   * Writes the given text on the webOS TV.
   * @param text - The text to write on the webOS TV
   * @param replace - Whether to replace the text or to append to it. Defaults to false
   * @returns A promise
   */
  public async writeText(text: string, replace: boolean = false): Promise<any> {
    return this.request('ssap://com.webos.service.ime/insertText', {
      text,
      replace: replace ? 1 : 0,
    });
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
