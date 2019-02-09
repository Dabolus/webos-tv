[webOS](../README.md) > [TV](../classes/tv.md)

# Class: TV

A promise-based package to control WebOS based TVs with JavaScript.
*__author__*: Giorgio Garasto [giorgio@garasto.it](mailto:giorgio@garasto.it)

*__link__*: [https://github.com/Dabolus/webos-tv](https://github.com/Dabolus/webos-tv)

*__license__*: MIT

*__class__*: 

## Hierarchy

**TV**

## Index

### Constructors

* [constructor](tv.md#constructor)

### Properties

* [callbacks](tv.md#callbacks)
* [config](tv.md#config)
* [connection](tv.md#connection)
* [connectionOpened](tv.md#connectionopened)
* [currId](tv.md#currid)
* [specializedSockets](tv.md#specializedsockets)

### Accessors

* [nextId](tv.md#nextid)

### Methods

* [appList](tv.md#applist)
* [appState](tv.md#appstate)
* [appStatus](tv.md#appstatus)
* [authenticate](tv.md#authenticate)
* [channelDown](tv.md#channeldown)
* [channelList](tv.md#channellist)
* [channelUp](tv.md#channelup)
* [check3DStatus](tv.md#check3dstatus)
* [closeApp](tv.md#closeapp)
* [closeMediaViewer](tv.md#closemediaviewer)
* [currentChannel](tv.md#currentchannel)
* [decreaseVolume](tv.md#decreasevolume)
* [deleteText](tv.md#deletetext)
* [disable3D](tv.md#disable3d)
* [enable3D](tv.md#enable3d)
* [fastForward](tv.md#fastforward)
* [foregroundAppInfo](tv.md#foregroundappinfo)
* [getCurrentSWInformation](tv.md#getcurrentswinformation)
* [getPointerInputSocket](tv.md#getpointerinputsocket)
* [getRemoteKeyboardSocket](tv.md#getremotekeyboardsocket)
* [getServiceList](tv.md#getservicelist)
* [getSocket](tv.md#getsocket)
* [getVolume](tv.md#getvolume)
* [handleMessage](tv.md#handlemessage)
* [increaseVolume](tv.md#increasevolume)
* [isMuted](tv.md#ismuted)
* [launchApp](tv.md#launchapp)
* [launchPoints](tv.md#launchpoints)
* [mute](tv.md#mute)
* [openURL](tv.md#openurl)
* [pause](tv.md#pause)
* [play](tv.md#play)
* [request](tv.md#request)
* [rewind](tv.md#rewind)
* [send](tv.md#send)
* [sendEnter](tv.md#sendenter)
* [setVolume](tv.md#setvolume)
* [showNotification](tv.md#shownotification)
* [stop](tv.md#stop)
* [subscribe](tv.md#subscribe)
* [toggleMute](tv.md#togglemute)
* [turnOff](tv.md#turnoff)
* [unmute](tv.md#unmute)
* [volumeDown](tv.md#volumedown)
* [volumeUp](tv.md#volumeup)
* [writeText](tv.md#writetext)
* [getTVURL](tv.md#gettvurl)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TV**(hostname: *`string`*, config?: *`object`*): [TV](tv.md)

Connects to a webOS TV to the given hostname.
*__constructor__*: 

**Parameters:**

**hostname: `string`**

The hostname of the webOS TV to connect to

**`Default value` config: `object`**

Other configuration options

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` appName | `string` |  The app name to send to the webOS TV. Defaults to 'WebOS TV Control' |
| `Optional` vendorName | `string` |  The vendor name to send to the webOS TV. Defaults to 'JavaScript' |

**Returns:** [TV](tv.md)

___

## Properties

<a id="callbacks"></a>

### `<Private>` callbacks

**● callbacks**: *`object`*

#### Type declaration

[key: `string`]: `object`

 reject: `function`

▸(err: *`Error`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| err | `Error` |

**Returns:** `void`

 resolve: `function`

▸(val: *`any`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| val | `any` |

**Returns:** `void`

___
<a id="config"></a>

### `<Private>` config

**● config**: *`any`*

___
<a id="connection"></a>

### `<Private>` connection

**● connection**: *`WebSocket`*

___
<a id="connectionopened"></a>

### `<Private>` connectionOpened

**● connectionOpened**: *`Promise`<`void`>*

___
<a id="currid"></a>

### `<Private>` currId

**● currId**: *`number`* = 0

___
<a id="specializedsockets"></a>

### `<Private>` specializedSockets

**● specializedSockets**: *`object`*

#### Type declaration

[key: `string`]: [SpecializedWebSocket](specializedwebsocket.md)

___

## Accessors

<a id="nextid"></a>

### `<Private>` nextId

getnextId(): `string`

**Returns:** `string`

___

## Methods

<a id="applist"></a>

###  appList

▸ **appList**(): `Promise`<`any`>

Gets the list of the available apps.

**Returns:** `Promise`<`any`>
A promise that resolves to the list of the available apps

___
<a id="appstate"></a>

###  appState

▸ **appState**(): `Promise`<`any`>

Gets the app state.

**Returns:** `Promise`<`any`>
The app state

___
<a id="appstatus"></a>

###  appStatus

▸ **appStatus**(): `Promise`<`any`>

Gets the app status.

**Returns:** `Promise`<`any`>
The app status

___
<a id="authenticate"></a>

###  authenticate

▸ **authenticate**(clientKey?: *`string`*): `Promise`<`any`>

Sends an authentication request to the webOS TV.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` clientKey | `string` |  The client key to send to the webOS TV to authenticate your app. Leave empty if it is your first connection |

**Returns:** `Promise`<`any`>
A promise that resolves to an auth key. Remember to store the auth key somewhere to use it again next time

___
<a id="channeldown"></a>

###  channelDown

▸ **channelDown**(): `Promise`<`object`>

Sends a channel down signal to the webOS TV.

**Returns:** `Promise`<`object`>
A promise that resolves to the new channel of the webOS TV

___
<a id="channellist"></a>

###  channelList

▸ **channelList**(): `Promise`<`Array`<`object`>>

Gets the list of the channels on the webOS TV.

**Returns:** `Promise`<`Array`<`object`>>
The list of the channels on the webOS TV

___
<a id="channelup"></a>

###  channelUp

▸ **channelUp**(): `Promise`<`object`>

Sends a channel up signal to the webOS TV.

**Returns:** `Promise`<`object`>
A promise that resolves to the new channel of the webOS TV

___
<a id="check3dstatus"></a>

###  check3DStatus

▸ **check3DStatus**(): `Promise`<`object`>

Checks whether the 3D is currently enabled or not on the webOS TV.

**Returns:** `Promise`<`object`>
A promise that resolves to the status of the 3D on the webOS TV

___
<a id="closeapp"></a>

###  closeApp

▸ **closeApp**(id: *`string`*): `Promise`<`any`>

Closes the app with the specified ID.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  The ID of the app to close |

**Returns:** `Promise`<`any`>
A promise

___
<a id="closemediaviewer"></a>

###  closeMediaViewer

▸ **closeMediaViewer**(): `Promise`<`any`>

Closes the media viewer.

**Returns:** `Promise`<`any`>
A promise

___
<a id="currentchannel"></a>

###  currentChannel

▸ **currentChannel**(): `Promise`<`object`>

Gets the current channel from the webOS TV.

**Returns:** `Promise`<`object`>
A promise that resolves to the currently active channel on the webOS TV

___
<a id="decreasevolume"></a>

###  decreaseVolume

▸ **decreaseVolume**(deltaVolume: *`number` \| `string`*): `Promise`<`number`>

Decreases the webOS TV volume by the specified delta.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| deltaVolume | `number` \| `string` |  The volume to remove from the webOS TV |

**Returns:** `Promise`<`number`>
A promise that resolves to the new volume of the webOS TV

___
<a id="deletetext"></a>

###  deleteText

▸ **deleteText**(count: *`number`*): `Promise`<`any`>

Deletes the given number of characters on the webOS TV.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| count | `number` |  The number of characters to delete |

**Returns:** `Promise`<`any`>
A promise

___
<a id="disable3d"></a>

###  disable3D

▸ **disable3D**(): `Promise`<`any`>

Disables 3D on the webOS TV.

**Returns:** `Promise`<`any`>
A promise that resolves to the new state of the 3D of the webOS TV (always false)

___
<a id="enable3d"></a>

###  enable3D

▸ **enable3D**(): `Promise`<`any`>

Enables 3D on the webOS TV.

**Returns:** `Promise`<`any`>
A promise that resolves to the new state of the 3D of the webOS TV (always true)

___
<a id="fastforward"></a>

###  fastForward

▸ **fastForward**(): `Promise`<`any`>

Sends the fast forward command to the webOS TV.

**Returns:** `Promise`<`any`>
A promise

___
<a id="foregroundappinfo"></a>

###  foregroundAppInfo

▸ **foregroundAppInfo**(): `Promise`<`object`>

Gets info about the foreground app.

**Returns:** `Promise`<`object`>
A promise that resolves to the info of the foreground app

___
<a id="getcurrentswinformation"></a>

###  getCurrentSWInformation

▸ **getCurrentSWInformation**(): `Promise`<`any`>

Gets the current SW information

**Returns:** `Promise`<`any`>
A promise

___
<a id="getpointerinputsocket"></a>

###  getPointerInputSocket

▸ **getPointerInputSocket**(): `Promise`<[PointerInputSocket](pointerinputsocket.md)>

Requests a pointer input socket to the webOS TV.

**Returns:** `Promise`<[PointerInputSocket](pointerinputsocket.md)>
A promise that resolves to a specialized pointer input socket

___
<a id="getremotekeyboardsocket"></a>

###  getRemoteKeyboardSocket

▸ **getRemoteKeyboardSocket**(): `Promise`<[RemoteKeyboardSocket](remotekeyboardsocket.md)>

Requests a remote keyboard socket to the webOS TV.

**Returns:** `Promise`<[RemoteKeyboardSocket](remotekeyboardsocket.md)>
A promise that resolves to a specialized remote keyboard socket

___
<a id="getservicelist"></a>

###  getServiceList

▸ **getServiceList**(): `Promise`<`any`>

Gets the service list from the webOS TV.

**Returns:** `Promise`<`any`>
A promise

___
<a id="getsocket"></a>

###  getSocket

▸ **getSocket**(uri: *`string`*, SocketClass: *[SpecializedWebSocket](specializedwebsocket.md)*): `Promise`<[SpecializedWebSocket](specializedwebsocket.md)>

Requests a specialized socket to the webOS TV.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| uri | `string` |  The URI of the action to ask the specialized socket for |
| SocketClass | [SpecializedWebSocket](specializedwebsocket.md) |  The class of the specialized socket to instantiate. It should be a SpecializedWebSocket or a class that extends it. |

**Returns:** `Promise`<[SpecializedWebSocket](specializedwebsocket.md)>

___
<a id="getvolume"></a>

###  getVolume

▸ **getVolume**(): `Promise`<`number`>

Gets the current volume of the webOS TV.

**Returns:** `Promise`<`number`>
A promise that resolves to the current volume of the webOS TV

___
<a id="handlemessage"></a>

### `<Private>` handleMessage

▸ **handleMessage**(message: *`string`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| message | `string` |

**Returns:** `void`

___
<a id="increasevolume"></a>

###  increaseVolume

▸ **increaseVolume**(deltaVolume: *`number` \| `string`*): `Promise`<`number`>

Increases the webOS TV volume by the specified delta.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| deltaVolume | `number` \| `string` |  The volume to add to the webOS TV |

**Returns:** `Promise`<`number`>
A promise that resolves to the new volume of the webOS TV

___
<a id="ismuted"></a>

###  isMuted

▸ **isMuted**(): `Promise`<`boolean`>

Checks whether the webOS TV is currently muted or not.

**Returns:** `Promise`<`boolean`>
A promise that resolves to the current mute state of the webOS TV

___
<a id="launchapp"></a>

###  launchApp

▸ **launchApp**(id: *`string`*): `Promise`<`any`>

Launches the app with the specified ID.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  The ID of the app to launch |

**Returns:** `Promise`<`any`>
A promise

___
<a id="launchpoints"></a>

###  launchPoints

▸ **launchPoints**(): `Promise`<`any`>

Lists the launch points of the webOS TV.

**Returns:** `Promise`<`any`>
A promise that resolves to the list of the available launch points

___
<a id="mute"></a>

###  mute

▸ **mute**(): `Promise`<`true`>

Mutes the webOS TV.

**Returns:** `Promise`<`true`>
A promise that resolves to the new mute state of the webOS TV (always true)

___
<a id="openurl"></a>

###  openURL

▸ **openURL**(target: *`string`*): `Promise`<`string`>

Opens the webOS TV browser at the specified URL. Will open a new tab if the browser is already opened.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| target | `string` |  The target URL to open |

**Returns:** `Promise`<`string`>
A promise that resolves to the session ID of the tab opened in the browser

___
<a id="pause"></a>

###  pause

▸ **pause**(): `Promise`<`any`>

Sends the pause command to the webOS TV.

**Returns:** `Promise`<`any`>
A promise

___
<a id="play"></a>

###  play

▸ **play**(): `Promise`<`any`>

Sends the play command to the webOS TV.

**Returns:** `Promise`<`any`>
A promise

___
<a id="request"></a>

###  request

▸ **request**(uri: *`string`*, payload?: *`any`*): `Promise`<`any`>

Requests the specified URI with the specified payload to the webOS TV. _Syntactic sugar of `send('request', uri, payload)`_

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| uri | `string` |  The URI of the action |
| `Optional` payload | `any` |  The optional payload of the action |

**Returns:** `Promise`<`any`>
A promise that resolves to the response from the webOS TV

___
<a id="rewind"></a>

###  rewind

▸ **rewind**(): `Promise`<`any`>

Sends the rewind command to the webOS TV.

**Returns:** `Promise`<`any`>
A promise

___
<a id="send"></a>

###  send

▸ **send**(type: *`string`*, uri: *`string`*, payload?: *`object`*): `Promise`<`any`>

Sends the action of the specified type and URI and with the specified payload to the webOS TV.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| type | `string` | - |  The type of the action |
| uri | `string` | - |  The URI of the action |
| `Default value` payload | `object` |  {} |  The optional payload of the action |

**Returns:** `Promise`<`any`>
A promise that resolves to the response from the webOS TV

___
<a id="sendenter"></a>

###  sendEnter

▸ **sendEnter**(): `Promise`<`any`>

Sends an enter key to the webOS TV.

**Returns:** `Promise`<`any`>
A promise

___
<a id="setvolume"></a>

###  setVolume

▸ **setVolume**(volumeToSet: *`number` \| `string`*): `Promise`<`number`>

Sets the volume on the webOS TV.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| volumeToSet | `number` \| `string` |  The new volume. It can either be a number, or 'max' or 'min' |

**Returns:** `Promise`<`number`>
A promise that resolves to the new volume of the webOS TV

___
<a id="shownotification"></a>

###  showNotification

▸ **showNotification**(message: *`string`*): `Promise`<`string`>

Shows a toast notification on the webOS TV.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to show in the toast |

**Returns:** `Promise`<`string`>
A promise that resolves to the ID of the shown toast notification.

___
<a id="stop"></a>

###  stop

▸ **stop**(): `Promise`<`any`>

Sends the stop command to the webOS TV.

**Returns:** `Promise`<`any`>
A promise

___
<a id="subscribe"></a>

###  subscribe

▸ **subscribe**(uri: *`string`*, payload?: *`any`*): `Promise`<`any`>

Sends a subscription request to the specified URI and with the specified payload to the webOS TV. _Syntactic sugar of `send('subscribe', uri, payload)`_

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| uri | `string` |  The URI of the action to subscribe to |
| `Optional` payload | `any` |  The optional payload of the action |

**Returns:** `Promise`<`any`>
A promise that resolves to the response from the webOS TV

___
<a id="togglemute"></a>

###  toggleMute

▸ **toggleMute**(): `Promise`<`boolean`>

Toggles the mute state of the webOS TV.

**Returns:** `Promise`<`boolean`>
A promise that resolves to the new mute state of the webOS TV (always the opposite of the old state)

___
<a id="turnoff"></a>

###  turnOff

▸ **turnOff**(): `Promise`<`any`>

Turns off the webOS TV.

**Returns:** `Promise`<`any`>
A promise

___
<a id="unmute"></a>

###  unmute

▸ **unmute**(): `Promise`<`false`>

Unmutes the webOS TV.

**Returns:** `Promise`<`false`>
A promise that resolves to the new mute state of the webOS TV (always false)

___
<a id="volumedown"></a>

###  volumeDown

▸ **volumeDown**(): `Promise`<`number`>

Sends a volume down signal to the webOS TV.

**Returns:** `Promise`<`number`>
A promise that resolves to the new volume of the webOS TV

___
<a id="volumeup"></a>

###  volumeUp

▸ **volumeUp**(): `Promise`<`number`>

Sends a volume up signal to the webOS TV.

**Returns:** `Promise`<`number`>
A promise that resolves to the new volume of the webOS TV

___
<a id="writetext"></a>

###  writeText

▸ **writeText**(text: *`string`*, replace?: *`boolean`*): `Promise`<`any`>

Writes the given text on the webOS TV.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| text | `string` | - |  The text to write on the webOS TV |
| `Default value` replace | `boolean` | false |  Whether to replace the text or to append to it. Defaults to false |

**Returns:** `Promise`<`any`>
A promise

___
<a id="gettvurl"></a>

### `<Static>` getTVURL

▸ **getTVURL**(hostname: *`string`*): `URL`

Returns a properly formatted TV URL for the given hostname.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| hostname | `string` |  The hostname to get the TV URL from |

**Returns:** `URL`
The URL object corresponding to the TV hostname

___

