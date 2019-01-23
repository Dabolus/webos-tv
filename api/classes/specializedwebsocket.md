[Assistant SDK for Node.js](../README.md) > [SpecializedWebSocket](../classes/specializedwebsocket.md)

# Class: SpecializedWebSocket

## Hierarchy

 `WebSocket`

**↳ SpecializedWebSocket**

↳  [PointerInputSocket](pointerinputsocket.md)

↳  [RemoteKeyboardSocket](remotekeyboardsocket.md)

## Index

### Classes

* [Server](specializedwebsocket.server.md)

### Interfaces

* [AddressInfo](../interfaces/specializedwebsocket.addressinfo.md)
* [ClientOptions](../interfaces/specializedwebsocket.clientoptions.md)
* [PerMessageDeflateOptions](../interfaces/specializedwebsocket.permessagedeflateoptions.md)
* [ServerOptions](../interfaces/specializedwebsocket.serveroptions.md)

### Type aliases

* [CertMeta](specializedwebsocket.md#certmeta)
* [Data](specializedwebsocket.md#data)
* [VerifyClientCallbackAsync](specializedwebsocket.md#verifyclientcallbackasync)
* [VerifyClientCallbackSync](specializedwebsocket.md#verifyclientcallbacksync)

### Constructors

* [constructor](specializedwebsocket.md#constructor)

### Properties

* [CLOSED](specializedwebsocket.md#closed)
* [CLOSING](specializedwebsocket.md#closing)
* [CONNECTING](specializedwebsocket.md#connecting)
* [OPEN](specializedwebsocket.md#open)
* [binaryType](specializedwebsocket.md#binarytype)
* [bufferedAmount](specializedwebsocket.md#bufferedamount)
* [extensions](specializedwebsocket.md#extensions)
* [onclose](specializedwebsocket.md#onclose)
* [onerror](specializedwebsocket.md#onerror)
* [onmessage](specializedwebsocket.md#onmessage)
* [onopen](specializedwebsocket.md#onopen)
* [protocol](specializedwebsocket.md#protocol)
* [readyState](specializedwebsocket.md#readystate)
* [url](specializedwebsocket.md#url)
* [CLOSED](specializedwebsocket.md#closed-1)
* [CLOSING](specializedwebsocket.md#closing-1)
* [CONNECTING](specializedwebsocket.md#connecting-1)
* [OPEN](specializedwebsocket.md#open-1)
* [defaultMaxListeners](specializedwebsocket.md#defaultmaxlisteners)

### Methods

* [addEventListener](specializedwebsocket.md#addeventlistener)
* [addListener](specializedwebsocket.md#addlistener)
* [close](specializedwebsocket.md#close)
* [emit](specializedwebsocket.md#emit)
* [eventNames](specializedwebsocket.md#eventnames)
* [getMaxListeners](specializedwebsocket.md#getmaxlisteners)
* [listenerCount](specializedwebsocket.md#listenercount)
* [listeners](specializedwebsocket.md#listeners)
* [off](specializedwebsocket.md#off)
* [on](specializedwebsocket.md#on)
* [once](specializedwebsocket.md#once)
* [ping](specializedwebsocket.md#ping)
* [pong](specializedwebsocket.md#pong)
* [prependListener](specializedwebsocket.md#prependlistener)
* [prependOnceListener](specializedwebsocket.md#prependoncelistener)
* [rawListeners](specializedwebsocket.md#rawlisteners)
* [removeAllListeners](specializedwebsocket.md#removealllisteners)
* [removeEventListener](specializedwebsocket.md#removeeventlistener)
* [removeListener](specializedwebsocket.md#removelistener)
* [send](specializedwebsocket.md#send)
* [setMaxListeners](specializedwebsocket.md#setmaxlisteners)
* [terminate](specializedwebsocket.md#terminate)
* [listenerCount](specializedwebsocket.md#listenercount-1)

---

## Type aliases

<a id="certmeta"></a>

### `<Static>` CertMeta

**Ƭ CertMeta**: *`string` | `string`[] | `Buffer` | `Buffer`[]*

CertMeta represents the accepted types for certificate & key data.

___
<a id="data"></a>

### `<Static>` Data

**Ƭ Data**: *`string` | `Buffer` | `ArrayBuffer` | `Buffer`[]*

Data represents the message payload received over the WebSocket.

___
<a id="verifyclientcallbackasync"></a>

### `<Static>` VerifyClientCallbackAsync

**Ƭ VerifyClientCallbackAsync**: *`function`*

VerifyClientCallbackAsync is an asynchronous callback used to inspect the incoming message. The return value (boolean) of the function determines whether or not to accept the handshake.

#### Type declaration
▸(info: *`object`*, callback: *`function`*): `void`

**Parameters:**

**info: `object`**

| Name | Type |
| ------ | ------ |
| origin | `string` |
| req | `IncomingMessage` |
| secure | `boolean` |

**callback: `function`**

**Returns:** `void`

___
<a id="verifyclientcallbacksync"></a>

### `<Static>` VerifyClientCallbackSync

**Ƭ VerifyClientCallbackSync**: *`function`*

VerifyClientCallbackSync is a synchronous callback used to inspect the incoming message. The return value (boolean) of the function determines whether or not to accept the handshake.

#### Type declaration
▸(info: *`object`*): `boolean`

**Parameters:**

**info: `object`**

| Name | Type |
| ------ | ------ |
| origin | `string` |
| req | `IncomingMessage` |
| secure | `boolean` |

**Returns:** `boolean`

___

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SpecializedWebSocket**(address: *`string`*, options?: *`ClientOptions`*): [SpecializedWebSocket](specializedwebsocket.md)

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` |
| `Optional` options | `ClientOptions` |

**Returns:** [SpecializedWebSocket](specializedwebsocket.md)

___

## Properties

<a id="closed"></a>

###  CLOSED

**● CLOSED**: *`number`*

___
<a id="closing"></a>

###  CLOSING

**● CLOSING**: *`number`*

___
<a id="connecting"></a>

###  CONNECTING

**● CONNECTING**: *`number`*

___
<a id="open"></a>

###  OPEN

**● OPEN**: *`number`*

___
<a id="binarytype"></a>

###  binaryType

**● binaryType**: *`string`*

___
<a id="bufferedamount"></a>

###  bufferedAmount

**● bufferedAmount**: *`number`*

___
<a id="extensions"></a>

###  extensions

**● extensions**: *`string`*

___
<a id="onclose"></a>

###  onclose

**● onclose**: *`function`*

#### Type declaration
▸(event: *`object`*): `void`

**Parameters:**

**event: `object`**

| Name | Type |
| ------ | ------ |
| code | `number` |
| reason | `string` |
| target | `WebSocket` |
| wasClean | `boolean` |

**Returns:** `void`

___
<a id="onerror"></a>

###  onerror

**● onerror**: *`function`*

#### Type declaration
▸(event: *`object`*): `void`

**Parameters:**

**event: `object`**

| Name | Type |
| ------ | ------ |
| error | `any` |
| message | `string` |
| target | `WebSocket` |
| type | `string` |

**Returns:** `void`

___
<a id="onmessage"></a>

###  onmessage

**● onmessage**: *`function`*

#### Type declaration
▸(event: *`object`*): `void`

**Parameters:**

**event: `object`**

| Name | Type |
| ------ | ------ |
| data | `WebSocket.Data` |
| target | `WebSocket` |
| type | `string` |

**Returns:** `void`

___
<a id="onopen"></a>

###  onopen

**● onopen**: *`function`*

#### Type declaration
▸(event: *`object`*): `void`

**Parameters:**

**event: `object`**

| Name | Type |
| ------ | ------ |
| target | `WebSocket` |

**Returns:** `void`

___
<a id="protocol"></a>

###  protocol

**● protocol**: *`string`*

___
<a id="readystate"></a>

###  readyState

**● readyState**: *`number`*

___
<a id="url"></a>

###  url

**● url**: *`string`*

___
<a id="closed-1"></a>

### `<Static>` CLOSED

**● CLOSED**: *`number`*

___
<a id="closing-1"></a>

### `<Static>` CLOSING

**● CLOSING**: *`number`*

___
<a id="connecting-1"></a>

### `<Static>` CONNECTING

**● CONNECTING**: *`number`*

___
<a id="open-1"></a>

### `<Static>` OPEN

**● OPEN**: *`number`*

___
<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

___

## Methods

<a id="addeventlistener"></a>

###  addEventListener

▸ **addEventListener**(method: *"message"*, cb?: *`function`*): `void`

▸ **addEventListener**(method: *"close"*, cb?: *`function`*): `void`

▸ **addEventListener**(method: *"error"*, cb?: *`function`*): `void`

▸ **addEventListener**(method: *"open"*, cb?: *`function`*): `void`

▸ **addEventListener**(method: *`string`*, listener?: *`function`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| method | "message" |
| `Optional` cb | `function` |

**Returns:** `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| method | "close" |
| `Optional` cb | `function` |

**Returns:** `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| method | "error" |
| `Optional` cb | `function` |

**Returns:** `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| method | "open" |
| `Optional` cb | `function` |

**Returns:** `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| method | `string` |
| `Optional` listener | `function` |

**Returns:** `void`

___
<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: *"close"*, listener: *`function`*): `this`

▸ **addListener**(event: *"error"*, listener: *`function`*): `this`

▸ **addListener**(event: *"upgrade"*, listener: *`function`*): `this`

▸ **addListener**(event: *"message"*, listener: *`function`*): `this`

▸ **addListener**(event: *"open"*, listener: *`function`*): `this`

▸ **addListener**(event: *"ping" | "pong"*, listener: *`function`*): `this`

▸ **addListener**(event: *"unexpected-response"*, listener: *`function`*): `this`

▸ **addListener**(event: *`string` | `symbol`*, listener: *`function`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "upgrade" |
| listener | `function` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "message" |
| listener | `function` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "open" |
| listener | `function` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "ping" | "pong" |
| listener | `function` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "unexpected-response" |
| listener | `function` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` | `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="close"></a>

###  close

▸ **close**(code?: *`number`*, data?: *`string`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` code | `number` |
| `Optional` data | `string` |

**Returns:** `void`

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *`string` | `symbol`*, ...args: *`any`[]*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` | `symbol` |
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="eventnames"></a>

###  eventNames

▸ **eventNames**(): `Array`<`string` | `symbol`>

**Returns:** `Array`<`string` | `symbol`>

___
<a id="getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

**Returns:** `number`

___
<a id="listenercount"></a>

###  listenerCount

▸ **listenerCount**(type: *`string` | `symbol`*): `number`

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` | `symbol` |

**Returns:** `number`

___
<a id="listeners"></a>

###  listeners

▸ **listeners**(event: *`string` | `symbol`*): `Function`[]

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` | `symbol` |

**Returns:** `Function`[]

___
<a id="off"></a>

###  off

▸ **off**(event: *`string` | `symbol`*, listener: *`function`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` | `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="on"></a>

###  on

▸ **on**(event: *"close"*, listener: *`function`*): `this`

▸ **on**(event: *"error"*, listener: *`function`*): `this`

▸ **on**(event: *"upgrade"*, listener: *`function`*): `this`

▸ **on**(event: *"message"*, listener: *`function`*): `this`

▸ **on**(event: *"open"*, listener: *`function`*): `this`

▸ **on**(event: *"ping" | "pong"*, listener: *`function`*): `this`

▸ **on**(event: *"unexpected-response"*, listener: *`function`*): `this`

▸ **on**(event: *`string` | `symbol`*, listener: *`function`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "upgrade" |
| listener | `function` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "message" |
| listener | `function` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "open" |
| listener | `function` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "ping" | "pong" |
| listener | `function` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "unexpected-response" |
| listener | `function` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` | `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="once"></a>

###  once

▸ **once**(event: *`string` | `symbol`*, listener: *`function`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` | `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="ping"></a>

###  ping

▸ **ping**(data?: *`any`*, mask?: *`boolean`*, cb?: *`function`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` data | `any` |
| `Optional` mask | `boolean` |
| `Optional` cb | `function` |

**Returns:** `void`

___
<a id="pong"></a>

###  pong

▸ **pong**(data?: *`any`*, mask?: *`boolean`*, cb?: *`function`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` data | `any` |
| `Optional` mask | `boolean` |
| `Optional` cb | `function` |

**Returns:** `void`

___
<a id="prependlistener"></a>

###  prependListener

▸ **prependListener**(event: *`string` | `symbol`*, listener: *`function`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` | `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="prependoncelistener"></a>

###  prependOnceListener

▸ **prependOnceListener**(event: *`string` | `symbol`*, listener: *`function`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` | `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="rawlisteners"></a>

###  rawListeners

▸ **rawListeners**(event: *`string` | `symbol`*): `Function`[]

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` | `symbol` |

**Returns:** `Function`[]

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(event?: *`string` | `symbol`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` event | `string` | `symbol` |

**Returns:** `this`

___
<a id="removeeventlistener"></a>

###  removeEventListener

▸ **removeEventListener**(method: *"message"*, cb?: *`function`*): `void`

▸ **removeEventListener**(method: *"close"*, cb?: *`function`*): `void`

▸ **removeEventListener**(method: *"error"*, cb?: *`function`*): `void`

▸ **removeEventListener**(method: *"open"*, cb?: *`function`*): `void`

▸ **removeEventListener**(method: *`string`*, listener?: *`function`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| method | "message" |
| `Optional` cb | `function` |

**Returns:** `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| method | "close" |
| `Optional` cb | `function` |

**Returns:** `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| method | "error" |
| `Optional` cb | `function` |

**Returns:** `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| method | "open" |
| `Optional` cb | `function` |

**Returns:** `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| method | `string` |
| `Optional` listener | `function` |

**Returns:** `void`

___
<a id="removelistener"></a>

###  removeListener

▸ **removeListener**(event: *"close"*, listener: *`function`*): `this`

▸ **removeListener**(event: *"error"*, listener: *`function`*): `this`

▸ **removeListener**(event: *"upgrade"*, listener: *`function`*): `this`

▸ **removeListener**(event: *"message"*, listener: *`function`*): `this`

▸ **removeListener**(event: *"open"*, listener: *`function`*): `this`

▸ **removeListener**(event: *"ping" | "pong"*, listener: *`function`*): `this`

▸ **removeListener**(event: *"unexpected-response"*, listener: *`function`*): `this`

▸ **removeListener**(event: *`string` | `symbol`*, listener: *`function`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "upgrade" |
| listener | `function` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "message" |
| listener | `function` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "open" |
| listener | `function` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "ping" | "pong" |
| listener | `function` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "unexpected-response" |
| listener | `function` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` | `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="send"></a>

###  send

▸ **send**(type: *`string`*, payload?: *`any`*): `void`

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| type | `string` | - |
| `Default value` payload | `any` |  {} |

**Returns:** `void`

___
<a id="setmaxlisteners"></a>

###  setMaxListeners

▸ **setMaxListeners**(n: *`number`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `this`

___
<a id="terminate"></a>

###  terminate

▸ **terminate**(): `void`

**Returns:** `void`

___
<a id="listenercount-1"></a>

### `<Static>` listenerCount

▸ **listenerCount**(emitter: *`EventEmitter`*, event: *`string` | `symbol`*): `number`

*__deprecated__*: since v4.0.0

**Parameters:**

| Name | Type |
| ------ | ------ |
| emitter | `EventEmitter` |
| event | `string` | `symbol` |

**Returns:** `number`

___

