[Assistant SDK for Node.js](../README.md) > [SpecializedWebSocket](../classes/specializedwebsocket.md) > [Server](../classes/specializedwebsocket.server.md)

# Class: Server

## Hierarchy

**Server**

## Index

### Constructors

* [constructor](specializedwebsocket.server.md#constructor)

### Properties

* [clients](specializedwebsocket.server.md#clients)
* [options](specializedwebsocket.server.md#options)
* [path](specializedwebsocket.server.md#path)
* [defaultMaxListeners](specializedwebsocket.server.md#defaultmaxlisteners)

### Methods

* [addListener](specializedwebsocket.server.md#addlistener)
* [address](specializedwebsocket.server.md#address)
* [close](specializedwebsocket.server.md#close)
* [emit](specializedwebsocket.server.md#emit)
* [eventNames](specializedwebsocket.server.md#eventnames)
* [getMaxListeners](specializedwebsocket.server.md#getmaxlisteners)
* [handleUpgrade](specializedwebsocket.server.md#handleupgrade)
* [listenerCount](specializedwebsocket.server.md#listenercount)
* [listeners](specializedwebsocket.server.md#listeners)
* [off](specializedwebsocket.server.md#off)
* [on](specializedwebsocket.server.md#on)
* [once](specializedwebsocket.server.md#once)
* [prependListener](specializedwebsocket.server.md#prependlistener)
* [prependOnceListener](specializedwebsocket.server.md#prependoncelistener)
* [rawListeners](specializedwebsocket.server.md#rawlisteners)
* [removeAllListeners](specializedwebsocket.server.md#removealllisteners)
* [removeListener](specializedwebsocket.server.md#removelistener)
* [setMaxListeners](specializedwebsocket.server.md#setmaxlisteners)
* [shouldHandle](specializedwebsocket.server.md#shouldhandle)
* [listenerCount](specializedwebsocket.server.md#listenercount-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Server**(options?: *`ServerOptions`*, callback?: *`function`*): [Server](specializedwebsocket.server.md)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `ServerOptions` |
| `Optional` callback | `function` |

**Returns:** [Server](specializedwebsocket.server.md)

___

## Properties

<a id="clients"></a>

###  clients

**● clients**: *`Set`<`WebSocket`>*

___
<a id="options"></a>

###  options

**● options**: *`ServerOptions`*

___
<a id="path"></a>

###  path

**● path**: *`string`*

___
<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

___

## Methods

<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: *"connection"*, cb: *`function`*): `this`

▸ **addListener**(event: *"error"*, cb: *`function`*): `this`

▸ **addListener**(event: *"headers"*, cb: *`function`*): `this`

▸ **addListener**(event: *"listening"*, cb: *`function`*): `this`

▸ **addListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "connection" |
| cb | `function` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| cb | `function` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "headers" |
| cb | `function` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "listening" |
| cb | `function` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="address"></a>

###  address

▸ **address**(): `AddressInfo` \| `string`

**Returns:** `AddressInfo` \| `string`

___
<a id="close"></a>

###  close

▸ **close**(cb?: *`function`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` cb | `function` |

**Returns:** `void`

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *`string` \| `symbol`*, ...args: *`any`[]*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="eventnames"></a>

###  eventNames

▸ **eventNames**(): `Array`<`string` \| `symbol`>

**Returns:** `Array`<`string` \| `symbol`>

___
<a id="getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

**Returns:** `number`

___
<a id="handleupgrade"></a>

###  handleUpgrade

▸ **handleUpgrade**(request: *`IncomingMessage`*, socket: *`Socket`*, upgradeHead: *`Buffer`*, callback: *`function`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| request | `IncomingMessage` |
| socket | `Socket` |
| upgradeHead | `Buffer` |
| callback | `function` |

**Returns:** `void`

___
<a id="listenercount"></a>

###  listenerCount

▸ **listenerCount**(type: *`string` \| `symbol`*): `number`

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` \| `symbol` |

**Returns:** `number`

___
<a id="listeners"></a>

###  listeners

▸ **listeners**(event: *`string` \| `symbol`*): `Function`[]

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |

**Returns:** `Function`[]

___
<a id="off"></a>

###  off

▸ **off**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="on"></a>

###  on

▸ **on**(event: *"connection"*, cb: *`function`*): `this`

▸ **on**(event: *"error"*, cb: *`function`*): `this`

▸ **on**(event: *"headers"*, cb: *`function`*): `this`

▸ **on**(event: *"listening"*, cb: *`function`*): `this`

▸ **on**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "connection" |
| cb | `function` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| cb | `function` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "headers" |
| cb | `function` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "listening" |
| cb | `function` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="once"></a>

###  once

▸ **once**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="prependlistener"></a>

###  prependListener

▸ **prependListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="prependoncelistener"></a>

###  prependOnceListener

▸ **prependOnceListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="rawlisteners"></a>

###  rawListeners

▸ **rawListeners**(event: *`string` \| `symbol`*): `Function`[]

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |

**Returns:** `Function`[]

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(event?: *`string` \| `symbol`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` event | `string` \| `symbol` |

**Returns:** `this`

___
<a id="removelistener"></a>

###  removeListener

▸ **removeListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

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
<a id="shouldhandle"></a>

###  shouldHandle

▸ **shouldHandle**(request: *`IncomingMessage`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| request | `IncomingMessage` |

**Returns:** `boolean`

___
<a id="listenercount-1"></a>

### `<Static>` listenerCount

▸ **listenerCount**(emitter: *`EventEmitter`*, event: *`string` \| `symbol`*): `number`

*__deprecated__*: since v4.0.0

**Parameters:**

| Name | Type |
| ------ | ------ |
| emitter | `EventEmitter` |
| event | `string` \| `symbol` |

**Returns:** `number`

___

