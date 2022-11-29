import { URL } from 'node:url';
import { fetch } from 'undici';
import WebSocket from 'ws';
import { readFile } from './readfile-node';
import defaultConfig from './default-config';
import {
  PointerInputSocket,
  RemoteKeyboardSocket,
  SpecializedWebSocket,
} from './sockets';
import { wake } from './wol';
import * as Model from './model';

/**
 * A promise-based package to control WebOS based TVs with JavaScript.
 * @author Giorgio Garasto <giorgio@garasto.me>
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
      /^(?:(?:https?|s?ftps?|wss?|ssap):\/)?\/?([^:/?#\s]+):?(\d+)?/i,
    );
    if (!host) {
      throw new Error('Invalid hostname.');
    }
    return new URL(`ws://${host}:${port || 3000}`);
  }

  /**
   * Turns on the specified webOS TV.
   * @param hostname - The hostname of the webOS TV to wake. It can also be a broadcast address
   * @param mac - The MAC address of the webOS TV to wake
   * @returns A promise that resolves with the magic packet sent to the webOS TV
   */
  public static turnOn(hostname: string, mac: string): Promise<Buffer> {
    const { hostname: address, port } = TV.getTVURL(hostname);
    return wake(mac, { address, port: Number(port) });
  }

  private readonly connection: WebSocket;
  private config: Model.Config;
  private readonly connectionOpened: Promise<WebSocket.Event>;

  private currId = 0;
  private callbacks: Record<
    string,
    {
      resolve: (val: any) => void;
      reject: (err: Error) => void;
    }
  > = {};
  private specializedSockets: Record<string, SpecializedWebSocket> = {};

  /**
   * Connects to a webOS TV to the given hostname.
   * @param hostname - The hostname of the webOS TV to connect to
   * @constructor
   */
  public constructor(hostname: string) {
    this.config = defaultConfig;
    const { origin } = TV.getTVURL(hostname);
    this.connection = new WebSocket(origin);
    this.connection.addEventListener('message', ({ data }) =>
      this.handleMessage(data),
    );
    this.connectionOpened = new Promise<WebSocket.Event>((resolve, reject) => {
      this.connection.addEventListener('open', resolve);
      this.connection.addEventListener('error', reject);
    });
  }

  /**
   * Disconnects from the webOS TV.
   * @returns A promise that resolves to the connection close event when the connection is closed
   */
  public async disconnect(): Promise<WebSocket.CloseEvent> {
    return new Promise<WebSocket.CloseEvent>((resolve) => {
      this.connection.addEventListener('close', resolve);
      this.connection.close(1000);
    });
  }

  /**
   * Sends the action of the specified type and URI and with the specified payload to the webOS TV.
   * @param type The type of the action
   * @param uri The URI of the action
   * @param payload The optional payload of the action
   * @returns A promise that resolves to the response from the webOS TV
   */
  public async send<T = unknown>(
    type: string,
    uri?: string,
    payload: Record<string, unknown> = {},
  ): Promise<T> {
    await this.connectionOpened;
    return new Promise<T>((resolve, reject) => {
      const id = this.nextId;
      this.callbacks[id] = { resolve, reject };
      this.connection.send(
        JSON.stringify({
          id,
          type,
          uri,
          payload,
        }),
        (err) => err && reject(err),
      );
    });
  }

  /**
   * Sends an authentication request to the webOS TV.
   * @param clientKey - The client key to send to the webOS TV to authenticate your app. Leave empty if it is your first connection
   * @returns A promise that resolves to an auth key. Remember to store the auth key somewhere to use it again next time
   */
  public async authenticate(
    clientKey?: string,
  ): Promise<Model.AuthenticateResult> {
    await this.connectionOpened;
    const payload = await this.send<Model.Config>('register', undefined, {
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
  public async request<T = unknown>(
    uri: string,
    payload?: Record<string, unknown>,
  ): Promise<T> {
    const { returnValue, ...rest } = await this.send<T & Model.BaseTVResponse>(
      'request',
      uri,
      payload,
    );
    if (!returnValue) {
      throw new Error('Request failed.');
    }
    return rest as T;
  }

  /**
   * Sends a subscription request to the specified URI and with the specified payload to the webOS TV.
   * _Syntactic sugar of `send('subscribe', uri, payload)`_
   * @param uri The URI of the action to subscribe to
   * @param payload The optional payload of the action
   * @returns A promise that resolves to the response from the webOS TV
   */
  public subscribe<T = unknown>(
    uri: string,
    payload?: Record<string, unknown>,
  ): Promise<T> {
    return this.send<T>('subscribe', uri, payload);
  }

  /**
   * Turns off the webOS TV.
   * @returns A promise
   */
  public async turnOff(): Promise<Model.TurnOffResult> {
    await this.request<Model.TurnOffTVResponse>('ssap://system/turnOff');
  }

  /**
   * Gets the service list from the webOS TV.
   * @returns A promise that resolves to the list of services of the webOS TV
   */
  public async getServiceList(): Promise<Model.GetServiceListResult> {
    const { services } = await this.request<Model.GetServiceListTVResponse>(
      'ssap://api/getServiceList',
    );
    return services;
  }

  /**
   * Gets the list of the channels on the webOS TV.
   * @returns The list of the channels on the webOS TV
   */
  public async getChannelList(): Promise<Model.GetChannelListResult> {
    return this.request<Model.GetChannelListTVResponse>(
      'ssap://tv/getChannelList',
    );
  }

  /**
   * Gets the current channel from the webOS TV.
   * @returns A promise that resolves to the currently active channel on the webOS TV
   */
  public async getCurrentChannel(): Promise<Model.GetCurrentChannelResult> {
    return this.request<Model.GetCurrentChannelTVResponse>(
      'ssap://tv/getCurrentChannel',
    );
  }

  /**
   * Sends a channel up signal to the webOS TV.
   * @returns A promise that resolves to the new channel of the webOS TV
   */
  public async channelUp(): Promise<Model.ChannelUpResult> {
    await this.request<Model.ChannelUpTVResponse>('ssap://tv/channelUp');
    return this.getCurrentChannel();
  }

  /**
   * Sends a channel down signal to the webOS TV.
   * @returns A promise that resolves to the new channel of the webOS TV
   */
  public async channelDown(): Promise<Model.ChannelDownResult> {
    await this.request<Model.ChannelDownTVResponse>('ssap://tv/channelDown');
    return this.getCurrentChannel();
  }

  /**
   * Sends an open channel signal to the webOS TV.
   * @param channelId - The channel to open. It has to be a string representing the unique identifier of the channel
   * @returns A promise that resolves to the new channel of the webOS TV
   */
  public async openChannel(channelId: string) {
    await this.request('ssap://tv/openChannel', { channelId });
    return this.getCurrentChannel();
  }

  /**
   * Sends an open channel signal to the webOS TV for the specified channel number.
   * @param channelNumber - The channel number to open. If the TV has multiple channels with the same number, the first match will be opened.
   * @returns A promise that resolves to the new channel of the webOS TV
   */
  public async openChannelByNumber(channelNumber: string | number) {
    const { channelList } = await this.getChannelList();
    const channel = channelList.find(
      (c) => c.channelNumber === channelNumber.toString(),
    );
    return channel
      ? this.openChannel(channel.channelId)
      : this.getCurrentChannel();
  }

  /**
   * Sends an open channel signal to the webOS TV for the specified channel name.
   * @param channelName - The channel name to open. If the TV has multiple channels with the same name, the first match will be opened.
   * @returns A promise that resolves to the new channel of the webOS TV
   */
  public async openChannelByName(channelName: string | number) {
    const { channelList } = await this.getChannelList();
    const channel = channelList.find((c) => c.channelName === channelName);
    return channel
      ? this.openChannel(channel.channelId)
      : this.getCurrentChannel();
  }

  /**
   * Gets the current volume information from the webOS TV.
   * @returns A promise that resolves to the current volume information of the webOS TV
   */
  public async getVolume(): Promise<Model.GetVolumeResult> {
    return this.request<Model.GetVolumeTVResponse>('ssap://audio/getVolume');
  }

  /**
   * Sets the volume on the webOS TV.
   * @param volumeToSet - The new volume. It can either be a number, or the literal strings 'max' or 'min'
   * @returns A promise that resolves to the new volume of the webOS TV
   */
  public async setVolume(
    volumeToSet: number | string,
  ): Promise<Model.SetVolumeResult> {
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
          (typeof volumeToSet === 'string'
            ? parseFloat(volumeToSet)
            : volumeToSet) || 0,
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
  public async increaseVolume(
    deltaVolume: number | string,
  ): Promise<Model.IncreaseVolumeResult> {
    const { volume: oldVolume } = await this.getVolume();
    return this.setVolume(
      oldVolume +
        (typeof deltaVolume === 'string'
          ? parseFloat(deltaVolume)
          : deltaVolume),
    );
  }

  /**
   * Decreases the webOS TV volume by the specified delta.
   * @param deltaVolume - The volume to remove from the webOS TV
   * @returns A promise that resolves to the new volume of the webOS TV
   */
  public async decreaseVolume(
    deltaVolume: number | string,
  ): Promise<Model.DecreaseVolumeResult> {
    const { volume: oldVolume } = await this.getVolume();
    return this.setVolume(
      oldVolume -
        (typeof deltaVolume === 'string'
          ? parseFloat(deltaVolume)
          : deltaVolume),
    );
  }

  /**
   * Sends a volume up signal to the webOS TV.
   * @returns A promise that resolves to the new volume of the webOS TV
   */
  public async volumeUp(): Promise<Model.VolumeUpResult> {
    await this.request('ssap://audio/volumeUp');
    return this.getVolume();
  }

  /**
   * Sends a volume down signal to the webOS TV.
   * @returns A promise that resolves to the new volume of the webOS TV
   */
  public async volumeDown(): Promise<Model.VolumeDownResult> {
    await this.request('ssap://audio/volumeDown');
    return this.getVolume();
  }

  /**
   * Checks the current status of the audio of the webOS TV.
   * @returns A promise that resolves to the current audio status of the webOS TV
   */
  public async getAudioStatus(): Promise<Model.GetAudioStatusResult> {
    return this.request<Model.GetAudioStatusTVResponse>(
      'ssap://audio/getStatus',
    );
  }

  /**
   * Checks whether the webOS TV is currently muted or not.
   * @returns A promise that resolves to the current mute status of the webOS TV
   */
  public async isMuted(): Promise<Model.IsMutedResult> {
    const { mute } = await this.getAudioStatus();
    return mute;
  }

  /**
   * Sets the mute status of the webOS TV.
   * @returns A promise that resolves to the new mute status of the webOS TV
   */
  public async setMute(mute: boolean): Promise<Model.SetMuteResult> {
    await this.request<Model.SetMuteTVResponse>('ssap://audio/setMute', {
      mute,
    });
    return mute;
  }

  /**
   * Mutes the webOS TV.
   * @returns A promise that resolves to the new mute state of the webOS TV (always true)
   */
  public async mute(): Promise<Model.MuteResult> {
    return this.setMute(true);
  }

  /**
   * Unmutes the webOS TV.
   * @returns A promise that resolves to the new mute state of the webOS TV (always false)
   */
  public async unmute(): Promise<Model.UnmuteResult> {
    return this.setMute(false);
  }

  /**
   * Toggles the mute state of the webOS TV.
   * @returns A promise that resolves to the new mute state of the webOS TV (always the opposite of the previous state)
   */
  public async toggleMute(): Promise<Model.ToggleMuteResult> {
    const muted = await this.isMuted();
    return this.setMute(!muted);
  }

  /**
   * Sends the play command to the webOS TV.
   * @returns A promise
   */
  public async play(): Promise<Model.PlayResult> {
    await this.request<Model.PlayTVResponse>('ssap://media.controls/play');
  }

  /**
   * Sends the stop command to the webOS TV.
   * @returns A promise
   */
  public async stop(): Promise<Model.StopResult> {
    await this.request<Model.StopTVResponse>('ssap://media.controls/stop');
  }

  /**
   * Sends the pause command to the webOS TV.
   * @returns A promise
   */
  public async pause(): Promise<Model.PauseResult> {
    await this.request<Model.PauseTVResponse>('ssap://media.controls/pause');
  }

  /**
   * Sends the rewind command to the webOS TV.
   * @returns A promise
   */
  public async rewind(): Promise<Model.RewindResult> {
    await this.request<Model.RewindTVResponse>('ssap://media.controls/rewind');
  }

  /**
   * Sends the fast forward command to the webOS TV.
   * @returns A promise
   */
  public async fastForward(): Promise<Model.FastForwardResult> {
    await this.request<Model.FastForwardTVResponse>(
      'ssap://media.controls/fastForward',
    );
  }

  /**
   * Closes the media viewer.
   * @returns A promise
   */
  public async closeMediaViewer(): Promise<Model.CloseMediaViewerResult> {
    await this.request<Model.CloseMediaViewerTVResponse>(
      'ssap://media.viewer/close',
    );
  }

  /**
   * Gets info about the foreground app.
   * @returns A promise that resolves to the info of the foreground app
   */
  public async foregroundAppInfo(): Promise<Model.ForegroundAppInfoResult> {
    return this.request<Model.ForegroundAppInfoTVResponse>(
      'ssap://com.webos.applicationManager/getForegroundAppInfo',
    );
  }

  // TODO: re-enable these methods once they get fixed
  /**
   * Gets the app status.
   * @returns The app status
   */
  // public async appStatus() {
  //   return this.request('ssap://com.webos.service.appstatus/getAppStatus');
  // }

  /**
   * Gets the app state.
   * @returns The app state
   */
  // public async appState() {
  //   return this.request('ssap://system.launcher/getAppState');
  // }

  /**
   * Gets the current SW information
   * @returns A promise
   */
  //  public async getCurrentSWInformation() {
  //   return this.request('com.webos.service.update/getCurrentSWInformation');
  // }

  /**
   * Gets the list of the available apps.
   * @returns A promise that resolves to the list of the available apps
   */
  public async appList(): Promise<Model.AppListResult> {
    const { apps } = await this.request<Model.AppListTVResponse>(
      'ssap://com.webos.applicationManager/listApps',
    );
    return apps;
  }

  /**
   * Lists the launch points of the webOS TV.
   * @returns A promise that resolves to the list of the available launch points
   */
  public async launchPoints(): Promise<Model.LaunchPointsResult> {
    return this.request<Model.LaunchPointsTVResponse>(
      'ssap://com.webos.applicationManager/listLaunchPoints',
    );
  }

  /**
   * Launches the app with the specified ID.
   * @param id - The ID of the app to launch
   * @returns A promise
   */
  public async launchApp(id: string): Promise<Model.LaunchAppResult> {
    return this.request<Model.LaunchAppTVResponse>(
      'ssap://system.launcher/launch',
      { id },
    );
  }

  /**
   * Closes the app with the specified ID.
   * @param id - The ID of the app to close
   * @returns A promise
   */
  public async closeApp(id: string): Promise<Model.CloseAppResult> {
    await this.request<Model.CloseAppTVResponse>(
      'ssap://system.launcher/close',
      { id },
    );
  }

  /**
   * Opens the webOS TV browser at the specified URL. Will open a new tab if the browser is already opened.
   * @param target - The target URL to open
   * @returns A promise that resolves to the session ID of the tab opened in the browser
   */
  public async openURL(target: string): Promise<Model.OpenURLResult> {
    return this.request<Model.OpenURLTVResponse>(
      'ssap://system.launcher/open',
      {
        target,
      },
    );
  }

  /**
   * Enables 3D on the webOS TV.
   * @returns A promise that resolves to the new state of the 3D of the webOS TV (always true)
   */
  public async enable3D(): Promise<Model.Enable3DResult> {
    await this.request<Model.Enable3DTVResponse>(
      'ssap://com.webos.service.tv.display/set3DOn',
    );
    const new3DStatus = await this.check3DStatus();
    return new3DStatus.status;
  }

  /**
   * Disables 3D on the webOS TV.
   * @returns A promise that resolves to the new state of the 3D of the webOS TV (always false)
   */
  public async disable3D(): Promise<Model.Disable3DResult> {
    await this.request<Model.Disable3DTVResponse>(
      'ssap://com.webos.service.tv.display/set3DOff',
    );
    const new3DStatus = await this.check3DStatus();
    return new3DStatus.status;
  }

  /**
   * Toggles the 3D state of the webOS TV.
   * @returns A promise that resolves to the 3D state of the webOS TV (always the opposite of the previous state)
   */
  public async toggle3D(): Promise<Model.Toggle3DResult> {
    const threeDStatus = await this.check3DStatus();
    return threeDStatus.status ? this.disable3D() : this.enable3D();
  }

  /**
   * Checks whether the 3D is currently enabled or not on the webOS TV.
   * @returns A promise that resolves to the status of the 3D on the webOS TV
   */
  public async check3DStatus(): Promise<Model.Check3DStatusResult> {
    const { status3D } = await this.request<Model.Check3DStatusTVResponse>(
      'ssap://com.webos.service.tv.display/get3DStatus',
    );
    return status3D;
  }

  /**
   * Shows a toast notification on the webOS TV.
   * @param message - The message to show in the toast
   * @param iconUrl - The optional URL of the icon to show in the toast. It must be a valid (fetchable) URL to an image file (either HTTP(S), data URI, or file URI)
   * @param iconExtension - The extension of the icon, automatically detected from the icon URL by default. You can provide it explicitly in case automatic detection fails
   * @returns A promise that resolves to the ID of the shown toast notification.
   */
  public async showNotification(
    message: string,
    iconUrl?: string,
    iconExtension?: string,
  ): Promise<string> {
    const iconData = iconUrl
      ? await this.loadIcon(iconUrl, iconExtension)
      : undefined;
    const { toastId } = await this.request<Model.ShowNotificationTVResponse>(
      'ssap://system.notifications/createToast',
      {
        message,
        ...iconData,
      },
    );
    return toastId;
  }

  /**
   * Requests a specialized socket to the webOS TV.
   * @param uri The URI of the action to ask the specialized socket for
   * @param SocketClass - The class of the specialized socket to instantiate. It should be a SpecializedWebSocket or a class that extends it.
   */
  public async getSocket<T extends SpecializedWebSocket>(
    uri: string,
    SocketClass: { new (...args: any[]): T },
  ): Promise<T> {
    if (this.specializedSockets[uri]) {
      return this.specializedSockets[uri] as T;
    }
    const { socketPath } = await this.request<Model.InputSocketTVResponse>(uri);
    this.specializedSockets[uri] = new SocketClass(socketPath);
    this.specializedSockets[uri].addEventListener(
      'close',
      () => delete this.specializedSockets[uri],
    );
    return this.specializedSockets[uri] as T;
  }

  /**
   * Requests a pointer input socket to the webOS TV.
   * @returns A promise that resolves to a specialized pointer input socket
   */
  public async getPointerInputSocket(): Promise<PointerInputSocket> {
    return this.getSocket(
      'ssap://com.webos.service.networkinput/getPointerInputSocket',
      PointerInputSocket,
    );
  }

  /**
   * Requests a remote keyboard socket to the webOS TV.
   * @returns A promise that resolves to a specialized remote keyboard socket
   */
  public async getRemoteKeyboardSocket(): Promise<RemoteKeyboardSocket> {
    return this.getSocket(
      'ssap://com.webos.service.ime/registerRemoteKeyboard',
      RemoteKeyboardSocket,
    );
  }

  /**
   * Writes the given text on the webOS TV.
   * @param text - The text to write on the webOS TV
   * @param replace - Whether to replace the text or to append to it. Defaults to false
   * @returns A promise that resolves when the request is fulfilled
   */
  public async writeText(
    text: string,
    replace = false,
  ): Promise<Model.WriteTextResult> {
    await this.request<Model.WriteTextTVResponse>(
      'ssap://com.webos.service.ime/insertText',
      {
        text,
        replace: replace ? 1 : 0,
      },
    );
  }

  /**
   * Deletes the given number of characters on the webOS TV.
   * @param count The number of characters to delete
   * @returns A promise
   */
  public async deleteText(count: number): Promise<Model.DeleteTextResult> {
    await this.request<Model.DeleteTextTVResponse>(
      'ssap://com.webos.service.ime/deleteCharacters',
      {
        count,
      },
    );
  }

  /**
   * Sends an enter key to the webOS TV.
   * @returns A promise
   */
  public async sendEnter(): Promise<Model.SendEnterResult> {
    await this.request<Model.SendEnterTVResponse>(
      'ssap://com.webos.service.ime/sendEnterKey',
    );
  }

  private handleMessage(message: WebSocket.Data) {
    const { id, payload = {} } = JSON.parse(message.toString());
    if (payload.pairingType === 'PROMPT' && payload.returnValue) {
      // TODO: maybe emit some kind of event
      return;
    }
    if (!id || !this.callbacks[id]) {
      throw new Error();
    }
    if (payload.subscribed) {
      // TODO: do something
    }
    this.callbacks[id].resolve(payload);
  }

  private async loadIcon(
    url: string,
    extension?: string,
  ): Promise<{ iconData: string; iconExtension: string }> {
    const res = await fetch(url, { mode: 'no-cors' });
    const blob = await res.blob();
    const base64 = await readFile(blob);
    return {
      iconData: base64.slice(base64.indexOf(',') + 1),
      iconExtension:
        extension || blob.type.replace(/^\w+\/(?:x-)?([\w-]+).*$/i, '$1'),
    };
  }
}
