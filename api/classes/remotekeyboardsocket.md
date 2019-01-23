[Assistant SDK for Node.js](../README.md) > [RemoteKeyboardSocket](../classes/remotekeyboardsocket.md)

# Class: RemoteKeyboardSocket

## Hierarchy

↳  [SpecializedWebSocket](specializedwebsocket.md)

**↳ RemoteKeyboardSocket**

## Index

### Constructors

* [constructor](remotekeyboardsocket.md#constructor)

### Properties

* [CLOSED](remotekeyboardsocket.md#closed)
* [CLOSING](remotekeyboardsocket.md#closing)
* [CONNECTING](remotekeyboardsocket.md#connecting)
* [OPEN](remotekeyboardsocket.md#open)
* [binaryType](remotekeyboardsocket.md#binarytype)
* [bufferedAmount](remotekeyboardsocket.md#bufferedamount)
* [extensions](remotekeyboardsocket.md#extensions)
* [onclose](remotekeyboardsocket.md#onclose)
* [onerror](remotekeyboardsocket.md#onerror)
* [onmessage](remotekeyboardsocket.md#onmessage)
* [onopen](remotekeyboardsocket.md#onopen)
* [protocol](remotekeyboardsocket.md#protocol)
* [readyState](remotekeyboardsocket.md#readystate)
* [url](remotekeyboardsocket.md#url)
* [CLOSED](remotekeyboardsocket.md#closed-1)
* [CLOSING](remotekeyboardsocket.md#closing-1)
* [CONNECTING](remotekeyboardsocket.md#connecting-1)
* [OPEN](remotekeyboardsocket.md#open-1)
* [defaultMaxListeners](remotekeyboardsocket.md#defaultmaxlisteners)

### Methods

* [addEventListener](remotekeyboardsocket.md#addeventlistener)
* [addListener](remotekeyboardsocket.md#addlistener)
* [close](remotekeyboardsocket.md#close)
* [emit](remotekeyboardsocket.md#emit)
* [eventNames](remotekeyboardsocket.md#eventnames)
* [getMaxListeners](remotekeyboardsocket.md#getmaxlisteners)
* [listenerCount](remotekeyboardsocket.md#listenercount)
* [listeners](remotekeyboardsocket.md#listeners)
* [off](remotekeyboardsocket.md#off)
* [on](remotekeyboardsocket.md#on)
* [once](remotekeyboardsocket.md#once)
* [ping](remotekeyboardsocket.md#ping)
* [pong](remotekeyboardsocket.md#pong)
* [prependListener](remotekeyboardsocket.md#prependlistener)
* [prependOnceListener](remotekeyboardsocket.md#prependoncelistener)
* [rawListeners](remotekeyboardsocket.md#rawlisteners)
* [removeAllListeners](remotekeyboardsocket.md#removealllisteners)
* [removeEventListener](remotekeyboardsocket.md#removeeventlistener)
* [removeListener](remotekeyboardsocket.md#removelistener)
* [send](remotekeyboardsocket.md#send)
* [setMaxListeners](remotekeyboardsocket.md#setmaxlisteners)
* [terminate](remotekeyboardsocket.md#terminate)
* [listenerCount](remotekeyboardsocket.md#listenercount-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new RemoteKeyboardSocket**(address: *`string`*, options?: *`ClientOptions`*): [RemoteKeyboardSocket](remotekeyboardsocket.md)

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` |
| `Optional` options | `ClientOptions` |

**Returns:** [RemoteKeyboardSocket](remotekeyboardsocket.md)

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

