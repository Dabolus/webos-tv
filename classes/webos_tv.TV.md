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
- [is3DEnabled](webos_tv.TV.md#is3denabled)
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

[src/webos-tv.ts:77](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L77)

## Properties

### callbacks

• `Private` **callbacks**: `Record`<`string`, { `reject`: (`err`: `Error`) => `void` ; `resolve`: (`val`: `any`) => `void`  }\> = `{}`

#### Defined in

[src/webos-tv.ts:62](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L62)

___

### config

• `Private` **config**: [`Config`](../interfaces/model.Config.md)

#### Defined in

[src/webos-tv.ts:58](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L58)

___

### connection

• `Private` `Readonly` **connection**: `WebSocket`

#### Defined in

[src/webos-tv.ts:57](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L57)

___

### connectionOpened

• `Private` `Readonly` **connectionOpened**: `Promise`<`Event`\>

#### Defined in

[src/webos-tv.ts:59](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L59)

___

### currId

• `Private` **currId**: `number` = `0`

#### Defined in

[src/webos-tv.ts:61](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L61)

___

### specializedSockets

• `Private` **specializedSockets**: `Record`<`string`, [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)\> = `{}`

#### Defined in

[src/webos-tv.ts:70](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L70)

## Accessors

### nextId

• `Private` `get` **nextId**(): `string`

#### Returns

`string`

#### Defined in

[src/webos-tv.ts:21](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L21)

## Methods

### appList

▸ **appList**(): `Promise`<[`AppListResult`](../modules/model.md#applistresult)\>

Gets the list of the available apps.

#### Returns

`Promise`<[`AppListResult`](../modules/model.md#applistresult)\>

A promise that resolves to the list of the available apps

#### Defined in

[src/webos-tv.ts:492](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L492)

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

[src/webos-tv.ts:465](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L465)

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

[src/webos-tv.ts:133](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L133)

___

### channelDown

▸ **channelDown**(): `Promise`<[`GetCurrentChannelTVResponse`](../interfaces/model.GetCurrentChannelTVResponse.md)\>

Sends a channel down signal to the webOS TV.

#### Returns

`Promise`<[`GetCurrentChannelTVResponse`](../interfaces/model.GetCurrentChannelTVResponse.md)\>

A promise that resolves to the new channel of the webOS TV

#### Defined in

[src/webos-tv.ts:231](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L231)

___

### channelUp

▸ **channelUp**(): `Promise`<[`GetCurrentChannelTVResponse`](../interfaces/model.GetCurrentChannelTVResponse.md)\>

Sends a channel up signal to the webOS TV.

#### Returns

`Promise`<[`GetCurrentChannelTVResponse`](../interfaces/model.GetCurrentChannelTVResponse.md)\>

A promise that resolves to the new channel of the webOS TV

#### Defined in

[src/webos-tv.ts:222](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L222)

___

### check3DStatus

▸ **check3DStatus**(): `Promise`<[`TV3DStatus`](../interfaces/model.TV3DStatus.md)\>

Returns the current 3D status of the webOS TV.

#### Returns

`Promise`<[`TV3DStatus`](../interfaces/model.TV3DStatus.md)\>

A promise that resolves to the status of the 3D on the webOS TV

#### Defined in

[src/webos-tv.ts:586](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L586)

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

[src/webos-tv.ts:525](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L525)

___

### closeMediaViewer

▸ **closeMediaViewer**(): `Promise`<`void`\>

Closes the media viewer.

#### Returns

`Promise`<`void`\>

A promise

#### Defined in

[src/webos-tv.ts:445](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L445)

___

### decreaseVolume

▸ **decreaseVolume**(`deltaVolume?`): `Promise`<[`GetVolumeTVResponse`](../interfaces/model.GetVolumeTVResponse.md)\>

Decreases the webOS TV volume by the specified delta.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `deltaVolume` | `number` | `1` | The volume to remove from the webOS TV |

#### Returns

`Promise`<[`GetVolumeTVResponse`](../interfaces/model.GetVolumeTVResponse.md)\>

A promise that resolves to the new volume of the webOS TV

#### Defined in

[src/webos-tv.ts:321](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L321)

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

[src/webos-tv.ts:685](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L685)

___

### disable3D

▸ **disable3D**(): `Promise`<`boolean`\>

Disables 3D on the webOS TV.

#### Returns

`Promise`<`boolean`\>

A promise that resolves to the new status of the 3D of the webOS TV (always false)

#### Defined in

[src/webos-tv.ts:566](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L566)

___

### disconnect

▸ **disconnect**(): `Promise`<`CloseEvent`\>

Disconnects from the webOS TV.

#### Returns

`Promise`<`CloseEvent`\>

A promise that resolves to the connection close event when the connection is closed

#### Defined in

[src/webos-tv.ts:94](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L94)

___

### enable3D

▸ **enable3D**(): `Promise`<`boolean`\>

Enables 3D on the webOS TV.

#### Returns

`Promise`<`boolean`\>

A promise that resolves to the new status of the 3D of the webOS TV (always true)

#### Defined in

[src/webos-tv.ts:555](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L555)

___

### fastForward

▸ **fastForward**(): `Promise`<`void`\>

Sends the fast forward command to the webOS TV.

#### Returns

`Promise`<`void`\>

A promise

#### Defined in

[src/webos-tv.ts:435](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L435)

___

### foregroundAppInfo

▸ **foregroundAppInfo**(): `Promise`<[`ForegroundAppInfoTVResponse`](../interfaces/model.ForegroundAppInfoTVResponse.md)\>

Gets info about the foreground app.

#### Returns

`Promise`<[`ForegroundAppInfoTVResponse`](../interfaces/model.ForegroundAppInfoTVResponse.md)\>

A promise that resolves to the info of the foreground app

#### Defined in

[src/webos-tv.ts:453](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L453)

___

### getAudioStatus

▸ **getAudioStatus**(): `Promise`<[`GetAudioStatusTVResponse`](../interfaces/model.GetAudioStatusTVResponse.md)\>

Checks the current status of the audio of the webOS TV.

#### Returns

`Promise`<[`GetAudioStatusTVResponse`](../interfaces/model.GetAudioStatusTVResponse.md)\>

A promise that resolves to the current audio status of the webOS TV

#### Defined in

[src/webos-tv.ts:350](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L350)

___

### getChannelList

▸ **getChannelList**(): `Promise`<[`GetChannelListTVResponse`](../interfaces/model.GetChannelListTVResponse.md)\>

Gets the list of the channels on the webOS TV.

#### Returns

`Promise`<[`GetChannelListTVResponse`](../interfaces/model.GetChannelListTVResponse.md)\>

The list of the channels on the webOS TV

#### Defined in

[src/webos-tv.ts:204](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L204)

___

### getCurrentChannel

▸ **getCurrentChannel**(): `Promise`<[`GetCurrentChannelTVResponse`](../interfaces/model.GetCurrentChannelTVResponse.md)\>

Gets the current channel from the webOS TV.

#### Returns

`Promise`<[`GetCurrentChannelTVResponse`](../interfaces/model.GetCurrentChannelTVResponse.md)\>

A promise that resolves to the currently active channel on the webOS TV

#### Defined in

[src/webos-tv.ts:212](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L212)

___

### getCurrentSWInformation

▸ **getCurrentSWInformation**(): `Promise`<[`GetCurrentSWInformationTVResponse`](../interfaces/model.GetCurrentSWInformationTVResponse.md)\>

Gets the current SW information

#### Returns

`Promise`<[`GetCurrentSWInformationTVResponse`](../interfaces/model.GetCurrentSWInformationTVResponse.md)\>

A promise that resolves to the current software information

#### Defined in

[src/webos-tv.ts:482](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L482)

___

### getPointerInputSocket

▸ **getPointerInputSocket**(): `Promise`<[`PointerInputSocket`](sockets.PointerInputSocket.md)\>

Requests a pointer input socket to the webOS TV.

#### Returns

`Promise`<[`PointerInputSocket`](sockets.PointerInputSocket.md)\>

A promise that resolves to a specialized pointer input socket

#### Defined in

[src/webos-tv.ts:643](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L643)

___

### getRemoteKeyboardSocket

▸ **getRemoteKeyboardSocket**(): `Promise`<[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)\>

Requests a remote keyboard socket to the webOS TV.

#### Returns

`Promise`<[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)\>

A promise that resolves to a specialized remote keyboard socket

#### Defined in

[src/webos-tv.ts:654](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L654)

___

### getServiceList

▸ **getServiceList**(): `Promise`<[`GetServiceListResult`](../modules/model.md#getservicelistresult)\>

Gets the service list from the webOS TV.

#### Returns

`Promise`<[`GetServiceListResult`](../modules/model.md#getservicelistresult)\>

A promise that resolves to the list of services of the webOS TV

#### Defined in

[src/webos-tv.ts:194](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L194)

___

### getSocket

▸ **getSocket**<`T`\>(`uri`, `SocketClass`): `Promise`<`T`\>

Requests a specialized socket to the webOS TV.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uri` | `string` | The URI of the action to ask the specialized socket for |
| `SocketClass` | [`Constructor`](../modules/model.md#constructor)<`T`\> | The class of the specialized socket to instantiate. It should be a SpecializedWebSocket or a class that extends it. |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/webos-tv.ts:623](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L623)

___

### getVolume

▸ **getVolume**(): `Promise`<[`GetVolumeTVResponse`](../interfaces/model.GetVolumeTVResponse.md)\>

Gets the current volume information from the webOS TV.

#### Returns

`Promise`<[`GetVolumeTVResponse`](../interfaces/model.GetVolumeTVResponse.md)\>

A promise that resolves to the current volume information of the webOS TV

#### Defined in

[src/webos-tv.ts:280](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L280)

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

[src/webos-tv.ts:704](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L704)

___

### increaseVolume

▸ **increaseVolume**(`deltaVolume?`): `Promise`<[`GetVolumeTVResponse`](../interfaces/model.GetVolumeTVResponse.md)\>

Increases the webOS TV volume by the specified delta.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `deltaVolume` | `number` | `1` | The volume to add to the webOS TV |

#### Returns

`Promise`<[`GetVolumeTVResponse`](../interfaces/model.GetVolumeTVResponse.md)\>

A promise that resolves to the new volume of the webOS TV

#### Defined in

[src/webos-tv.ts:309](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L309)

___

### is3DEnabled

▸ **is3DEnabled**(): `Promise`<`boolean`\>

Checks whether the 3D on the webOS TV is currently enabled or not.

#### Returns

`Promise`<`boolean`\>

A promise that resolves to a boolean indicating whether the 3D is enabled or not

#### Defined in

[src/webos-tv.ts:546](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L546)

___

### isMuted

▸ **isMuted**(): `Promise`<`boolean`\>

Checks whether the webOS TV is currently muted or not.

#### Returns

`Promise`<`boolean`\>

A promise that resolves to the current mute status of the webOS TV

#### Defined in

[src/webos-tv.ts:358](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L358)

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

[src/webos-tv.ts:514](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L514)

___

### launchPoints

▸ **launchPoints**(): `Promise`<[`LaunchPointsTVResponse`](../interfaces/model.LaunchPointsTVResponse.md)\>

Lists the launch points of the webOS TV.

#### Returns

`Promise`<[`LaunchPointsTVResponse`](../interfaces/model.LaunchPointsTVResponse.md)\>

A promise that resolves to the list of the available launch points

#### Defined in

[src/webos-tv.ts:503](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L503)

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

[src/webos-tv.ts:716](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L716)

___

### mute

▸ **mute**(): `Promise`<`boolean`\>

Mutes the webOS TV.

#### Returns

`Promise`<`boolean`\>

A promise that resolves to the new mute state of the webOS TV (always true)

#### Defined in

[src/webos-tv.ts:378](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L378)

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

[src/webos-tv.ts:241](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L241)

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

[src/webos-tv.ts:267](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L267)

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

[src/webos-tv.ts:251](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L251)

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

[src/webos-tv.ts:536](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L536)

___

### pause

▸ **pause**(): `Promise`<`void`\>

Sends the pause command to the webOS TV.

#### Returns

`Promise`<`void`\>

A promise

#### Defined in

[src/webos-tv.ts:419](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L419)

___

### play

▸ **play**(): `Promise`<`void`\>

Sends the play command to the webOS TV.

#### Returns

`Promise`<`void`\>

A promise

#### Defined in

[src/webos-tv.ts:403](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L403)

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

[src/webos-tv.ts:151](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L151)

___

### rewind

▸ **rewind**(): `Promise`<`void`\>

Sends the rewind command to the webOS TV.

#### Returns

`Promise`<`void`\>

A promise

#### Defined in

[src/webos-tv.ts:427](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L427)

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

[src/webos-tv.ts:108](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L108)

___

### sendEnter

▸ **sendEnter**(): `Promise`<`void`\>

Sends an enter key to the webOS TV.

#### Returns

`Promise`<`void`\>

A promise

#### Defined in

[src/webos-tv.ts:698](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L698)

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

[src/webos-tv.ts:367](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L367)

___

### setVolume

▸ **setVolume**(`volumeToSet`): `Promise`<[`GetVolumeTVResponse`](../interfaces/model.GetVolumeTVResponse.md)\>

Sets the volume on the webOS TV.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `volumeToSet` | `number` \| ``"max"`` \| ``"min"`` | The new volume. It can either be a number, or the literal strings 'max' or 'min' |

#### Returns

`Promise`<[`GetVolumeTVResponse`](../interfaces/model.GetVolumeTVResponse.md)\>

A promise that resolves to the new volume of the webOS TV

#### Defined in

[src/webos-tv.ts:289](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L289)

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

[src/webos-tv.ts:600](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L600)

___

### stop

▸ **stop**(): `Promise`<`void`\>

Sends the stop command to the webOS TV.

#### Returns

`Promise`<`void`\>

A promise

#### Defined in

[src/webos-tv.ts:411](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L411)

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

[src/webos-tv.ts:175](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L175)

___

### toggle3D

▸ **toggle3D**(): `Promise`<`boolean`\>

Toggles the 3D status of the webOS TV.

#### Returns

`Promise`<`boolean`\>

A promise that resolves to the 3D status of the webOS TV (always the opposite of the previous status)

#### Defined in

[src/webos-tv.ts:577](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L577)

___

### toggleMute

▸ **toggleMute**(): `Promise`<`boolean`\>

Toggles the mute state of the webOS TV.

#### Returns

`Promise`<`boolean`\>

A promise that resolves to the new mute state of the webOS TV (always the opposite of the previous state)

#### Defined in

[src/webos-tv.ts:394](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L394)

___

### turnOff

▸ **turnOff**(): `Promise`<`void`\>

Turns off the webOS TV.

#### Returns

`Promise`<`void`\>

A promise

#### Defined in

[src/webos-tv.ts:186](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L186)

___

### unmute

▸ **unmute**(): `Promise`<`boolean`\>

Unmutes the webOS TV.

#### Returns

`Promise`<`boolean`\>

A promise that resolves to the new mute state of the webOS TV (always false)

#### Defined in

[src/webos-tv.ts:386](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L386)

___

### volumeDown

▸ **volumeDown**(): `Promise`<[`GetVolumeTVResponse`](../interfaces/model.GetVolumeTVResponse.md)\>

Sends a volume down signal to the webOS TV.

#### Returns

`Promise`<[`GetVolumeTVResponse`](../interfaces/model.GetVolumeTVResponse.md)\>

A promise that resolves to the new volume of the webOS TV

#### Defined in

[src/webos-tv.ts:341](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L341)

___

### volumeUp

▸ **volumeUp**(): `Promise`<[`GetVolumeTVResponse`](../interfaces/model.GetVolumeTVResponse.md)\>

Sends a volume up signal to the webOS TV.

#### Returns

`Promise`<[`GetVolumeTVResponse`](../interfaces/model.GetVolumeTVResponse.md)\>

A promise that resolves to the new volume of the webOS TV

#### Defined in

[src/webos-tv.ts:332](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L332)

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

[src/webos-tv.ts:667](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L667)

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

[src/webos-tv.ts:30](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L30)

___

### turnOn

▸ `Static` **turnOn**(`hostname`, `mac`, `password?`): `Promise`<`Buffer`\>

Turns on the specified webOS TV.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hostname` | `string` | The hostname of the webOS TV to wake. It can also be a broadcast address |
| `mac` | `string` | The MAC address of the webOS TV to wake |
| `password?` | `string` | The SecureOn password of the device to wake |

#### Returns

`Promise`<`Buffer`\>

A promise that resolves with the magic packet sent to the webOS TV

#### Defined in

[src/webos-tv.ts:48](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/webos-tv.ts#L48)
