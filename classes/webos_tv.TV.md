[webOS](../README.md) / [Exports](../modules.md) / [webos-tv](../modules/webos_tv.md) / TV

# Class: TV

[webos-tv](../modules/webos_tv.md).TV

A promise-based package to control webOS based TVs with JavaScript.

**`Author`**

Giorgio Garasto <giorgio@garasto.me>

**`Link`**

https://github.com/Dabolus/webos-tv

**`License`**

MIT

## Table of contents

### Constructors

- [constructor](webos_tv.TV.md#constructor)

### Properties

- [callbacks](webos_tv.TV.md#callbacks)
- [config](webos_tv.TV.md#config)
- [connection](webos_tv.TV.md#connection)
- [connectionOpened](webos_tv.TV.md#connectionopened)
- [currId](webos_tv.TV.md#currid)
- [specializedSockets](webos_tv.TV.md#specializedsockets)

### Accessors

- [nextId](webos_tv.TV.md#nextid)

### Methods

- [appList](webos_tv.TV.md#applist)
- [appState](webos_tv.TV.md#appstate)
- [authenticate](webos_tv.TV.md#authenticate)
- [channelDown](webos_tv.TV.md#channeldown)
- [channelUp](webos_tv.TV.md#channelup)
- [check3DStatus](webos_tv.TV.md#check3dstatus)
- [closeApp](webos_tv.TV.md#closeapp)
- [closeMediaViewer](webos_tv.TV.md#closemediaviewer)
- [decreaseVolume](webos_tv.TV.md#decreasevolume)
- [deleteText](webos_tv.TV.md#deletetext)
- [disable3D](webos_tv.TV.md#disable3d)
- [disconnect](webos_tv.TV.md#disconnect)
- [enable3D](webos_tv.TV.md#enable3d)
- [fastForward](webos_tv.TV.md#fastforward)
- [foregroundAppInfo](webos_tv.TV.md#foregroundappinfo)
- [getAudioStatus](webos_tv.TV.md#getaudiostatus)
- [getChannelList](webos_tv.TV.md#getchannellist)
- [getCurrentChannel](webos_tv.TV.md#getcurrentchannel)
- [getCurrentSWInformation](webos_tv.TV.md#getcurrentswinformation)
- [getPointerInputSocket](webos_tv.TV.md#getpointerinputsocket)
- [getRemoteKeyboardSocket](webos_tv.TV.md#getremotekeyboardsocket)
- [getServiceList](webos_tv.TV.md#getservicelist)
- [getSocket](webos_tv.TV.md#getsocket)
- [getVolume](webos_tv.TV.md#getvolume)
- [handleMessage](webos_tv.TV.md#handlemessage)
- [increaseVolume](webos_tv.TV.md#increasevolume)
- [isMuted](webos_tv.TV.md#ismuted)
- [launchApp](webos_tv.TV.md#launchapp)
- [launchPoints](webos_tv.TV.md#launchpoints)
- [loadIcon](webos_tv.TV.md#loadicon)
- [mute](webos_tv.TV.md#mute)
- [openChannel](webos_tv.TV.md#openchannel)
- [openChannelByName](webos_tv.TV.md#openchannelbyname)
- [openChannelByNumber](webos_tv.TV.md#openchannelbynumber)
- [openURL](webos_tv.TV.md#openurl)
- [pause](webos_tv.TV.md#pause)
- [play](webos_tv.TV.md#play)
- [request](webos_tv.TV.md#request)
- [rewind](webos_tv.TV.md#rewind)
- [send](webos_tv.TV.md#send)
- [sendEnter](webos_tv.TV.md#sendenter)
- [setMute](webos_tv.TV.md#setmute)
- [setVolume](webos_tv.TV.md#setvolume)
- [showNotification](webos_tv.TV.md#shownotification)
- [stop](webos_tv.TV.md#stop)
- [subscribe](webos_tv.TV.md#subscribe)
- [toggle3D](webos_tv.TV.md#toggle3d)
- [toggleMute](webos_tv.TV.md#togglemute)
- [turnOff](webos_tv.TV.md#turnoff)
- [unmute](webos_tv.TV.md#unmute)
- [volumeDown](webos_tv.TV.md#volumedown)
- [volumeUp](webos_tv.TV.md#volumeup)
- [writeText](webos_tv.TV.md#writetext)
- [getTVURL](webos_tv.TV.md#gettvurl)
- [turnOn](webos_tv.TV.md#turnon)

## Constructors

### constructor

• **new TV**(`hostname`)

Connects to a webOS TV to the given hostname.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hostname` | `string` | The hostname of the webOS TV to connect to |

#### Defined in

[src/webos-tv.ts:72](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L72)

## Properties

### callbacks

• `Private` **callbacks**: `Record`<`string`, { `reject`: (`err`: `Error`) => `void` ; `resolve`: (`val`: `any`) => `void`  }\> = `{}`

#### Defined in

[src/webos-tv.ts:58](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L58)

___

### config

• `Private` **config**: [`Config`](../interfaces/model.Config.md)

#### Defined in

[src/webos-tv.ts:54](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L54)

___

### connection

• `Private` `Readonly` **connection**: `WebSocket`

#### Defined in

[src/webos-tv.ts:53](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L53)

___

### connectionOpened

• `Private` `Readonly` **connectionOpened**: `Promise`<`Event`\>

#### Defined in

[src/webos-tv.ts:55](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L55)

___

### currId

• `Private` **currId**: `number` = `0`

#### Defined in

[src/webos-tv.ts:57](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L57)

___

### specializedSockets

• `Private` **specializedSockets**: `Record`<`string`, [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)\> = `{}`

#### Defined in

[src/webos-tv.ts:65](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L65)

## Accessors

### nextId

• `Private` `get` **nextId**(): `string`

#### Returns

`string`

#### Defined in

[src/webos-tv.ts:22](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L22)

## Methods

### appList

▸ **appList**(): `Promise`<[`AppListResult`](../modules/model.md#applistresult)\>

Gets the list of the available apps.

#### Returns

`Promise`<[`AppListResult`](../modules/model.md#applistresult)\>

A promise that resolves to the list of the available apps

#### Defined in

[src/webos-tv.ts:507](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L507)

___

### appState

▸ **appState**(`id`, `sessionId`): `Promise`<[`AppStateTVResponse`](../interfaces/model.AppStateTVResponse.md)\>

Gets the app state.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the app |
| `sessionId` | `string` | The ID of the session |

#### Returns

`Promise`<[`AppStateTVResponse`](../interfaces/model.AppStateTVResponse.md)\>

A promise that resolves to the specified app state

#### Defined in

[src/webos-tv.ts:480](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L480)

___

### authenticate

▸ **authenticate**(`clientKey?`): `Promise`<`string`\>

Sends an authentication request to the webOS TV.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clientKey?` | `string` | The client key to send to the webOS TV to authenticate your app. Leave empty if it is your first connection |

#### Returns

`Promise`<`string`\>

A promise that resolves to an auth key. Remember to store the auth key somewhere to use it again next time

#### Defined in

[src/webos-tv.ts:129](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L129)

___

### channelDown

▸ **channelDown**(): `Promise`<[`GetCurrentChannelTVResponse`](../interfaces/model.GetCurrentChannelTVResponse.md)\>

Sends a channel down signal to the webOS TV.

#### Returns

`Promise`<[`GetCurrentChannelTVResponse`](../interfaces/model.GetCurrentChannelTVResponse.md)\>

A promise that resolves to the new channel of the webOS TV

#### Defined in

[src/webos-tv.ts:228](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L228)

___

### channelUp

▸ **channelUp**(): `Promise`<[`GetCurrentChannelTVResponse`](../interfaces/model.GetCurrentChannelTVResponse.md)\>

Sends a channel up signal to the webOS TV.

#### Returns

`Promise`<[`GetCurrentChannelTVResponse`](../interfaces/model.GetCurrentChannelTVResponse.md)\>

A promise that resolves to the new channel of the webOS TV

#### Defined in

[src/webos-tv.ts:219](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L219)

___

### check3DStatus

▸ **check3DStatus**(): `Promise`<[`TV3DStatus`](../interfaces/model.TV3DStatus.md)\>

Checks whether the 3D is currently enabled or not on the webOS TV.

#### Returns

`Promise`<[`TV3DStatus`](../interfaces/model.TV3DStatus.md)\>

A promise that resolves to the status of the 3D on the webOS TV

#### Defined in

[src/webos-tv.ts:594](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L594)

___

### closeApp

▸ **closeApp**(`id`): `Promise`<`void`\>

Closes the app with the specified ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the app to close |

#### Returns

`Promise`<`void`\>

A promise

#### Defined in

[src/webos-tv.ts:540](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L540)

___

### closeMediaViewer

▸ **closeMediaViewer**(): `Promise`<`void`\>

Closes the media viewer.

#### Returns

`Promise`<`void`\>

A promise

#### Defined in

[src/webos-tv.ts:460](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L460)

___

### decreaseVolume

▸ **decreaseVolume**(`deltaVolume`): `Promise`<[`GetVolumeTVResponse`](../interfaces/model.GetVolumeTVResponse.md)\>

Decreases the webOS TV volume by the specified delta.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deltaVolume` | `string` \| `number` | The volume to remove from the webOS TV |

#### Returns

`Promise`<[`GetVolumeTVResponse`](../interfaces/model.GetVolumeTVResponse.md)\>

A promise that resolves to the new volume of the webOS TV

#### Defined in

[src/webos-tv.ts:331](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L331)

___

### deleteText

▸ **deleteText**(`count`): `Promise`<`void`\>

Deletes the given number of characters on the webOS TV.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `count` | `number` | The number of characters to delete |

#### Returns

`Promise`<`void`\>

A promise

#### Defined in

[src/webos-tv.ts:693](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L693)

___

### disable3D

▸ **disable3D**(): `Promise`<`boolean`\>

Disables 3D on the webOS TV.

#### Returns

`Promise`<`boolean`\>

A promise that resolves to the new state of the 3D of the webOS TV (always false)

#### Defined in

[src/webos-tv.ts:573](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L573)

___

### disconnect

▸ **disconnect**(): `Promise`<`CloseEvent`\>

Disconnects from the webOS TV.

#### Returns

`Promise`<`CloseEvent`\>

A promise that resolves to the connection close event when the connection is closed

#### Defined in

[src/webos-tv.ts:89](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L89)

___

### enable3D

▸ **enable3D**(): `Promise`<`boolean`\>

Enables 3D on the webOS TV.

#### Returns

`Promise`<`boolean`\>

A promise that resolves to the new state of the 3D of the webOS TV (always true)

#### Defined in

[src/webos-tv.ts:561](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L561)

___

### fastForward

▸ **fastForward**(): `Promise`<`void`\>

Sends the fast forward command to the webOS TV.

#### Returns

`Promise`<`void`\>

A promise

#### Defined in

[src/webos-tv.ts:450](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L450)

___

### foregroundAppInfo

▸ **foregroundAppInfo**(): `Promise`<[`ForegroundAppInfoTVResponse`](../interfaces/model.ForegroundAppInfoTVResponse.md)\>

Gets info about the foreground app.

#### Returns

`Promise`<[`ForegroundAppInfoTVResponse`](../interfaces/model.ForegroundAppInfoTVResponse.md)\>

A promise that resolves to the info of the foreground app

#### Defined in

[src/webos-tv.ts:468](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L468)

___

### getAudioStatus

▸ **getAudioStatus**(): `Promise`<[`GetAudioStatusTVResponse`](../interfaces/model.GetAudioStatusTVResponse.md)\>

Checks the current status of the audio of the webOS TV.

#### Returns

`Promise`<[`GetAudioStatusTVResponse`](../interfaces/model.GetAudioStatusTVResponse.md)\>

A promise that resolves to the current audio status of the webOS TV

#### Defined in

[src/webos-tv.ts:365](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L365)

___

### getChannelList

▸ **getChannelList**(): `Promise`<[`GetChannelListTVResponse`](../interfaces/model.GetChannelListTVResponse.md)\>

Gets the list of the channels on the webOS TV.

#### Returns

`Promise`<[`GetChannelListTVResponse`](../interfaces/model.GetChannelListTVResponse.md)\>

The list of the channels on the webOS TV

#### Defined in

[src/webos-tv.ts:201](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L201)

___

### getCurrentChannel

▸ **getCurrentChannel**(): `Promise`<[`GetCurrentChannelTVResponse`](../interfaces/model.GetCurrentChannelTVResponse.md)\>

Gets the current channel from the webOS TV.

#### Returns

`Promise`<[`GetCurrentChannelTVResponse`](../interfaces/model.GetCurrentChannelTVResponse.md)\>

A promise that resolves to the currently active channel on the webOS TV

#### Defined in

[src/webos-tv.ts:209](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L209)

___

### getCurrentSWInformation

▸ **getCurrentSWInformation**(): `Promise`<[`GetCurrentSWInformationTVResponse`](../interfaces/model.GetCurrentSWInformationTVResponse.md)\>

Gets the current SW information

#### Returns

`Promise`<[`GetCurrentSWInformationTVResponse`](../interfaces/model.GetCurrentSWInformationTVResponse.md)\>

A promise that resolves to the current software information

#### Defined in

[src/webos-tv.ts:497](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L497)

___

### getPointerInputSocket

▸ **getPointerInputSocket**(): `Promise`<[`PointerInputSocket`](sockets.PointerInputSocket.md)\>

Requests a pointer input socket to the webOS TV.

#### Returns

`Promise`<[`PointerInputSocket`](sockets.PointerInputSocket.md)\>

A promise that resolves to a specialized pointer input socket

#### Defined in

[src/webos-tv.ts:651](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L651)

___

### getRemoteKeyboardSocket

▸ **getRemoteKeyboardSocket**(): `Promise`<[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)\>

Requests a remote keyboard socket to the webOS TV.

#### Returns

`Promise`<[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)\>

A promise that resolves to a specialized remote keyboard socket

#### Defined in

[src/webos-tv.ts:662](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L662)

___

### getServiceList

▸ **getServiceList**(): `Promise`<[`GetServiceListResult`](../modules/model.md#getservicelistresult)\>

Gets the service list from the webOS TV.

#### Returns

`Promise`<[`GetServiceListResult`](../modules/model.md#getservicelistresult)\>

A promise that resolves to the list of services of the webOS TV

#### Defined in

[src/webos-tv.ts:190](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L190)

___

### getSocket

▸ **getSocket**<`T`\>(`uri`, `SocketClass`): `Promise`<`T`\>

Requests a specialized socket to the webOS TV.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uri` | `string` | The URI of the action to ask the specialized socket for |
| `SocketClass` | (...`args`: `any`[]) => `T` | The class of the specialized socket to instantiate. It should be a SpecializedWebSocket or a class that extends it. |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/webos-tv.ts:631](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L631)

___

### getVolume

▸ **getVolume**(): `Promise`<[`GetVolumeTVResponse`](../interfaces/model.GetVolumeTVResponse.md)\>

Gets the current volume information from the webOS TV.

#### Returns

`Promise`<[`GetVolumeTVResponse`](../interfaces/model.GetVolumeTVResponse.md)\>

A promise that resolves to the current volume information of the webOS TV

#### Defined in

[src/webos-tv.ts:277](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L277)

___

### handleMessage

▸ `Private` **handleMessage**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Data` |

#### Returns

`void`

#### Defined in

[src/webos-tv.ts:712](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L712)

___

### increaseVolume

▸ **increaseVolume**(`deltaVolume`): `Promise`<[`GetVolumeTVResponse`](../interfaces/model.GetVolumeTVResponse.md)\>

Increases the webOS TV volume by the specified delta.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deltaVolume` | `string` \| `number` | The volume to add to the webOS TV |

#### Returns

`Promise`<[`GetVolumeTVResponse`](../interfaces/model.GetVolumeTVResponse.md)\>

A promise that resolves to the new volume of the webOS TV

#### Defined in

[src/webos-tv.ts:314](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L314)

___

### isMuted

▸ **isMuted**(): `Promise`<`boolean`\>

Checks whether the webOS TV is currently muted or not.

#### Returns

`Promise`<`boolean`\>

A promise that resolves to the current mute status of the webOS TV

#### Defined in

[src/webos-tv.ts:373](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L373)

___

### launchApp

▸ **launchApp**(`id`): `Promise`<[`LaunchAppTVResponse`](../interfaces/model.LaunchAppTVResponse.md)\>

Launches the app with the specified ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the app to launch |

#### Returns

`Promise`<[`LaunchAppTVResponse`](../interfaces/model.LaunchAppTVResponse.md)\>

A promise

#### Defined in

[src/webos-tv.ts:529](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L529)

___

### launchPoints

▸ **launchPoints**(): `Promise`<[`LaunchPointsTVResponse`](../interfaces/model.LaunchPointsTVResponse.md)\>

Lists the launch points of the webOS TV.

#### Returns

`Promise`<[`LaunchPointsTVResponse`](../interfaces/model.LaunchPointsTVResponse.md)\>

A promise that resolves to the list of the available launch points

#### Defined in

[src/webos-tv.ts:518](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L518)

___

### loadIcon

▸ `Private` **loadIcon**(`url`, `extension?`): `Promise`<{ `iconData`: `string` ; `iconExtension`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `extension?` | `string` |

#### Returns

`Promise`<{ `iconData`: `string` ; `iconExtension`: `string`  }\>

#### Defined in

[src/webos-tv.ts:727](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L727)

___

### mute

▸ **mute**(): `Promise`<`boolean`\>

Mutes the webOS TV.

#### Returns

`Promise`<`boolean`\>

A promise that resolves to the new mute state of the webOS TV (always true)

#### Defined in

[src/webos-tv.ts:393](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L393)

___

### openChannel

▸ **openChannel**(`channelId`): `Promise`<[`GetCurrentChannelTVResponse`](../interfaces/model.GetCurrentChannelTVResponse.md)\>

Sends an open channel signal to the webOS TV.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | The channel to open. It has to be a string representing the unique identifier of the channel |

#### Returns

`Promise`<[`GetCurrentChannelTVResponse`](../interfaces/model.GetCurrentChannelTVResponse.md)\>

A promise that resolves to the new channel of the webOS TV

#### Defined in

[src/webos-tv.ts:238](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L238)

___

### openChannelByName

▸ **openChannelByName**(`channelName`): `Promise`<[`GetCurrentChannelTVResponse`](../interfaces/model.GetCurrentChannelTVResponse.md)\>

Sends an open channel signal to the webOS TV for the specified channel name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelName` | `string` \| `number` | The channel name to open. If the TV has multiple channels with the same name, the first match will be opened. |

#### Returns

`Promise`<[`GetCurrentChannelTVResponse`](../interfaces/model.GetCurrentChannelTVResponse.md)\>

A promise that resolves to the new channel of the webOS TV

#### Defined in

[src/webos-tv.ts:264](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L264)

___

### openChannelByNumber

▸ **openChannelByNumber**(`channelNumber`): `Promise`<[`GetCurrentChannelTVResponse`](../interfaces/model.GetCurrentChannelTVResponse.md)\>

Sends an open channel signal to the webOS TV for the specified channel number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelNumber` | `string` \| `number` | The channel number to open. If the TV has multiple channels with the same number, the first match will be opened. |

#### Returns

`Promise`<[`GetCurrentChannelTVResponse`](../interfaces/model.GetCurrentChannelTVResponse.md)\>

A promise that resolves to the new channel of the webOS TV

#### Defined in

[src/webos-tv.ts:248](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L248)

___

### openURL

▸ **openURL**(`target`): `Promise`<[`OpenURLTVResponse`](../interfaces/model.OpenURLTVResponse.md)\>

Opens the webOS TV browser at the specified URL. Will open a new tab if the browser is already opened.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `string` | The target URL to open |

#### Returns

`Promise`<[`OpenURLTVResponse`](../interfaces/model.OpenURLTVResponse.md)\>

A promise that resolves to the session ID of the tab opened in the browser

#### Defined in

[src/webos-tv.ts:551](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L551)

___

### pause

▸ **pause**(): `Promise`<`void`\>

Sends the pause command to the webOS TV.

#### Returns

`Promise`<`void`\>

A promise

#### Defined in

[src/webos-tv.ts:434](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L434)

___

### play

▸ **play**(): `Promise`<`void`\>

Sends the play command to the webOS TV.

#### Returns

`Promise`<`void`\>

A promise

#### Defined in

[src/webos-tv.ts:418](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L418)

___

### request

▸ **request**<`T`\>(`uri`, `payload?`): `Promise`<`T`\>

Requests the specified URI with the specified payload to the webOS TV.
_Syntactic sugar of `send('request', uri, payload)`_

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uri` | `string` | The URI of the action |
| `payload?` | `Record`<`string`, `unknown`\> | The optional payload of the action |

#### Returns

`Promise`<`T`\>

A promise that resolves to the response from the webOS TV

#### Defined in

[src/webos-tv.ts:147](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L147)

___

### rewind

▸ **rewind**(): `Promise`<`void`\>

Sends the rewind command to the webOS TV.

#### Returns

`Promise`<`void`\>

A promise

#### Defined in

[src/webos-tv.ts:442](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L442)

___

### send

▸ **send**<`T`\>(`type`, `uri?`, `payload?`): `Promise`<`T`\>

Sends the action of the specified type and URI and with the specified payload to the webOS TV.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The type of the action |
| `uri?` | `string` | The URI of the action |
| `payload` | `Record`<`string`, `unknown`\> | The optional payload of the action |

#### Returns

`Promise`<`T`\>

A promise that resolves to the response from the webOS TV

#### Defined in

[src/webos-tv.ts:103](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L103)

___

### sendEnter

▸ **sendEnter**(): `Promise`<`void`\>

Sends an enter key to the webOS TV.

#### Returns

`Promise`<`void`\>

A promise

#### Defined in

[src/webos-tv.ts:706](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L706)

___

### setMute

▸ **setMute**(`mute`): `Promise`<`boolean`\>

Sets the mute status of the webOS TV.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mute` | `boolean` |

#### Returns

`Promise`<`boolean`\>

A promise that resolves to the new mute status of the webOS TV

#### Defined in

[src/webos-tv.ts:382](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L382)

___

### setVolume

▸ **setVolume**(`volumeToSet`): `Promise`<[`GetVolumeTVResponse`](../interfaces/model.GetVolumeTVResponse.md)\>

Sets the volume on the webOS TV.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `volumeToSet` | `string` \| `number` | The new volume. It can either be a number, or the literal strings 'max' or 'min' |

#### Returns

`Promise`<[`GetVolumeTVResponse`](../interfaces/model.GetVolumeTVResponse.md)\>

A promise that resolves to the new volume of the webOS TV

#### Defined in

[src/webos-tv.ts:286](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L286)

___

### showNotification

▸ **showNotification**(`message`, `iconUrl?`, `iconExtension?`): `Promise`<`string`\>

Shows a toast notification on the webOS TV.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to show in the toast |
| `iconUrl?` | `string` | The optional URL of the icon to show in the toast. It must be a valid (fetchable) URL to an image file (either HTTP(S), data URI, or file URI) |
| `iconExtension?` | `string` | The extension of the icon, automatically detected from the icon URL by default. You can provide it explicitly in case automatic detection fails |

#### Returns

`Promise`<`string`\>

A promise that resolves to the ID of the shown toast notification.

#### Defined in

[src/webos-tv.ts:608](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L608)

___

### stop

▸ **stop**(): `Promise`<`void`\>

Sends the stop command to the webOS TV.

#### Returns

`Promise`<`void`\>

A promise

#### Defined in

[src/webos-tv.ts:426](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L426)

___

### subscribe

▸ **subscribe**<`T`\>(`uri`, `payload?`): `Promise`<`T`\>

Sends a subscription request to the specified URI and with the specified payload to the webOS TV.
_Syntactic sugar of `send('subscribe', uri, payload)`_

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uri` | `string` | The URI of the action to subscribe to |
| `payload?` | `Record`<`string`, `unknown`\> | The optional payload of the action |

#### Returns

`Promise`<`T`\>

A promise that resolves to the response from the webOS TV

#### Defined in

[src/webos-tv.ts:171](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L171)

___

### toggle3D

▸ **toggle3D**(): `Promise`<`boolean`\>

Toggles the 3D state of the webOS TV.

#### Returns

`Promise`<`boolean`\>

A promise that resolves to the 3D state of the webOS TV (always the opposite of the previous state)

#### Defined in

[src/webos-tv.ts:585](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L585)

___

### toggleMute

▸ **toggleMute**(): `Promise`<`boolean`\>

Toggles the mute state of the webOS TV.

#### Returns

`Promise`<`boolean`\>

A promise that resolves to the new mute state of the webOS TV (always the opposite of the previous state)

#### Defined in

[src/webos-tv.ts:409](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L409)

___

### turnOff

▸ **turnOff**(): `Promise`<`void`\>

Turns off the webOS TV.

#### Returns

`Promise`<`void`\>

A promise

#### Defined in

[src/webos-tv.ts:182](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L182)

___

### unmute

▸ **unmute**(): `Promise`<`boolean`\>

Unmutes the webOS TV.

#### Returns

`Promise`<`boolean`\>

A promise that resolves to the new mute state of the webOS TV (always false)

#### Defined in

[src/webos-tv.ts:401](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L401)

___

### volumeDown

▸ **volumeDown**(): `Promise`<[`GetVolumeTVResponse`](../interfaces/model.GetVolumeTVResponse.md)\>

Sends a volume down signal to the webOS TV.

#### Returns

`Promise`<[`GetVolumeTVResponse`](../interfaces/model.GetVolumeTVResponse.md)\>

A promise that resolves to the new volume of the webOS TV

#### Defined in

[src/webos-tv.ts:356](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L356)

___

### volumeUp

▸ **volumeUp**(): `Promise`<[`GetVolumeTVResponse`](../interfaces/model.GetVolumeTVResponse.md)\>

Sends a volume up signal to the webOS TV.

#### Returns

`Promise`<[`GetVolumeTVResponse`](../interfaces/model.GetVolumeTVResponse.md)\>

A promise that resolves to the new volume of the webOS TV

#### Defined in

[src/webos-tv.ts:347](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L347)

___

### writeText

▸ **writeText**(`text`, `replace?`): `Promise`<`void`\>

Writes the given text on the webOS TV.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `string` | `undefined` | The text to write on the webOS TV |
| `replace` | `boolean` | `false` | Whether to replace the text or to append to it. Defaults to false |

#### Returns

`Promise`<`void`\>

A promise that resolves when the request is fulfilled

#### Defined in

[src/webos-tv.ts:675](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L675)

___

### getTVURL

▸ `Static` **getTVURL**(`hostname`): `URL`

Returns a properly formatted TV URL for the given hostname.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hostname` | `string` | The hostname to get the TV URL from |

#### Returns

`URL`

The URL object corresponding to the TV hostname

#### Defined in

[src/webos-tv.ts:31](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L31)

___

### turnOn

▸ `Static` **turnOn**(`hostname`, `mac`): `Promise`<`Buffer`\>

Turns on the specified webOS TV.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hostname` | `string` | The hostname of the webOS TV to wake. It can also be a broadcast address |
| `mac` | `string` | The MAC address of the webOS TV to wake |

#### Returns

`Promise`<`Buffer`\>

A promise that resolves with the magic packet sent to the webOS TV

#### Defined in

[src/webos-tv.ts:48](https://github.com/Dabolus/webos-tv/blob/5769651/src/webos-tv.ts#L48)
