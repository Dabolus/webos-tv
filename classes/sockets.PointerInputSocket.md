[webOS](../README.md) / [Exports](../modules.md) / [sockets](../modules/sockets.md) / PointerInputSocket

# Class: PointerInputSocket

[sockets](../modules/sockets.md).PointerInputSocket

## Hierarchy

- [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

  ↳ **`PointerInputSocket`**

## Table of contents

### Constructors

- [constructor](sockets.PointerInputSocket.md#constructor)

### Properties

- [CLOSED](sockets.PointerInputSocket.md#closed)
- [CLOSING](sockets.PointerInputSocket.md#closing)
- [CONNECTING](sockets.PointerInputSocket.md#connecting)
- [OPEN](sockets.PointerInputSocket.md#open)
- [binaryType](sockets.PointerInputSocket.md#binarytype)
- [bufferedAmount](sockets.PointerInputSocket.md#bufferedamount)
- [extensions](sockets.PointerInputSocket.md#extensions)
- [isPaused](sockets.PointerInputSocket.md#ispaused)
- [onclose](sockets.PointerInputSocket.md#onclose)
- [onerror](sockets.PointerInputSocket.md#onerror)
- [onmessage](sockets.PointerInputSocket.md#onmessage)
- [onopen](sockets.PointerInputSocket.md#onopen)
- [protocol](sockets.PointerInputSocket.md#protocol)
- [readyState](sockets.PointerInputSocket.md#readystate)
- [url](sockets.PointerInputSocket.md#url)
- [CLOSED](sockets.PointerInputSocket.md#closed-1)
- [CLOSING](sockets.PointerInputSocket.md#closing-1)
- [CONNECTING](sockets.PointerInputSocket.md#connecting-1)
- [OPEN](sockets.PointerInputSocket.md#open-1)
- [captureRejectionSymbol](sockets.PointerInputSocket.md#capturerejectionsymbol)
- [captureRejections](sockets.PointerInputSocket.md#capturerejections)
- [defaultMaxListeners](sockets.PointerInputSocket.md#defaultmaxlisteners)
- [errorMonitor](sockets.PointerInputSocket.md#errormonitor)

### Methods

- [addEventListener](sockets.PointerInputSocket.md#addeventlistener)
- [addListener](sockets.PointerInputSocket.md#addlistener)
- [click](sockets.PointerInputSocket.md#click)
- [close](sockets.PointerInputSocket.md#close)
- [emit](sockets.PointerInputSocket.md#emit)
- [eventNames](sockets.PointerInputSocket.md#eventnames)
- [getMaxListeners](sockets.PointerInputSocket.md#getmaxlisteners)
- [listenerCount](sockets.PointerInputSocket.md#listenercount)
- [listeners](sockets.PointerInputSocket.md#listeners)
- [move](sockets.PointerInputSocket.md#move)
- [off](sockets.PointerInputSocket.md#off)
- [on](sockets.PointerInputSocket.md#on)
- [once](sockets.PointerInputSocket.md#once)
- [pause](sockets.PointerInputSocket.md#pause)
- [ping](sockets.PointerInputSocket.md#ping)
- [pong](sockets.PointerInputSocket.md#pong)
- [prependListener](sockets.PointerInputSocket.md#prependlistener)
- [prependOnceListener](sockets.PointerInputSocket.md#prependoncelistener)
- [press](sockets.PointerInputSocket.md#press)
- [rawListeners](sockets.PointerInputSocket.md#rawlisteners)
- [removeAllListeners](sockets.PointerInputSocket.md#removealllisteners)
- [removeEventListener](sockets.PointerInputSocket.md#removeeventlistener)
- [removeListener](sockets.PointerInputSocket.md#removelistener)
- [resume](sockets.PointerInputSocket.md#resume)
- [scroll](sockets.PointerInputSocket.md#scroll)
- [send](sockets.PointerInputSocket.md#send)
- [setMaxListeners](sockets.PointerInputSocket.md#setmaxlisteners)
- [terminate](sockets.PointerInputSocket.md#terminate)
- [getEventListeners](sockets.PointerInputSocket.md#geteventlisteners)
- [listenerCount](sockets.PointerInputSocket.md#listenercount-1)
- [on](sockets.PointerInputSocket.md#on-1)
- [once](sockets.PointerInputSocket.md#once-1)
- [setMaxListeners](sockets.PointerInputSocket.md#setmaxlisteners-1)

## Constructors

### constructor

• **new PointerInputSocket**(`address`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `options?` | `ClientOptions` |

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[constructor](sockets.SpecializedWebSocket.md#constructor)

#### Defined in

[src/sockets.ts:4](https://github.com/Dabolus/webos-tv/blob/db77d18/src/sockets.ts#L4)

## Properties

### CLOSED

• `Readonly` **CLOSED**: ``3``

The connection is closed.

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[CLOSED](sockets.SpecializedWebSocket.md#closed)

#### Defined in

node_modules/@types/ws/index.d.ts:62

___

### CLOSING

• `Readonly` **CLOSING**: ``2``

The connection is in the process of closing.

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[CLOSING](sockets.SpecializedWebSocket.md#closing)

#### Defined in

node_modules/@types/ws/index.d.ts:60

___

### CONNECTING

• `Readonly` **CONNECTING**: ``0``

The connection is not yet open.

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[CONNECTING](sockets.SpecializedWebSocket.md#connecting)

#### Defined in

node_modules/@types/ws/index.d.ts:56

___

### OPEN

• `Readonly` **OPEN**: ``1``

The connection is open and ready to communicate.

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[OPEN](sockets.SpecializedWebSocket.md#open)

#### Defined in

node_modules/@types/ws/index.d.ts:58

___

### binaryType

• **binaryType**: ``"nodebuffer"`` \| ``"arraybuffer"`` \| ``"fragments"``

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[binaryType](sockets.SpecializedWebSocket.md#binarytype)

#### Defined in

node_modules/@types/ws/index.d.ts:41

___

### bufferedAmount

• `Readonly` **bufferedAmount**: `number`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[bufferedAmount](sockets.SpecializedWebSocket.md#bufferedamount)

#### Defined in

node_modules/@types/ws/index.d.ts:42

___

### extensions

• `Readonly` **extensions**: `string`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[extensions](sockets.SpecializedWebSocket.md#extensions)

#### Defined in

node_modules/@types/ws/index.d.ts:43

___

### isPaused

• `Readonly` **isPaused**: `boolean`

Indicates whether the websocket is paused

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[isPaused](sockets.SpecializedWebSocket.md#ispaused)

#### Defined in

node_modules/@types/ws/index.d.ts:45

___

### onclose

• **onclose**: (`event`: `CloseEvent`) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `CloseEvent` |

##### Returns

`void`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[onclose](sockets.SpecializedWebSocket.md#onclose)

#### Defined in

node_modules/@types/ws/index.d.ts:66

___

### onerror

• **onerror**: (`event`: `ErrorEvent`) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `ErrorEvent` |

##### Returns

`void`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[onerror](sockets.SpecializedWebSocket.md#onerror)

#### Defined in

node_modules/@types/ws/index.d.ts:65

___

### onmessage

• **onmessage**: (`event`: `MessageEvent`) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MessageEvent` |

##### Returns

`void`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[onmessage](sockets.SpecializedWebSocket.md#onmessage)

#### Defined in

node_modules/@types/ws/index.d.ts:67

___

### onopen

• **onopen**: (`event`: `Event`) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |

##### Returns

`void`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[onopen](sockets.SpecializedWebSocket.md#onopen)

#### Defined in

node_modules/@types/ws/index.d.ts:64

___

### protocol

• `Readonly` **protocol**: `string`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[protocol](sockets.SpecializedWebSocket.md#protocol)

#### Defined in

node_modules/@types/ws/index.d.ts:46

___

### readyState

• `Readonly` **readyState**: ``0`` \| ``1`` \| ``2`` \| ``3``

The current state of the connection

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[readyState](sockets.SpecializedWebSocket.md#readystate)

#### Defined in

node_modules/@types/ws/index.d.ts:48

___

### url

• `Readonly` **url**: `string`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[url](sockets.SpecializedWebSocket.md#url)

#### Defined in

node_modules/@types/ws/index.d.ts:53

___

### CLOSED

▪ `Static` `Readonly` **CLOSED**: ``3``

The connection is closed.

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[CLOSED](sockets.SpecializedWebSocket.md#closed-1)

#### Defined in

node_modules/@types/ws/index.d.ts:39

___

### CLOSING

▪ `Static` `Readonly` **CLOSING**: ``2``

The connection is in the process of closing.

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[CLOSING](sockets.SpecializedWebSocket.md#closing-1)

#### Defined in

node_modules/@types/ws/index.d.ts:37

___

### CONNECTING

▪ `Static` `Readonly` **CONNECTING**: ``0``

The connection is not yet open.

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[CONNECTING](sockets.SpecializedWebSocket.md#connecting-1)

#### Defined in

node_modules/@types/ws/index.d.ts:33

___

### OPEN

▪ `Static` `Readonly` **OPEN**: ``1``

The connection is open and ready to communicate.

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[OPEN](sockets.SpecializedWebSocket.md#open-1)

#### Defined in

node_modules/@types/ws/index.d.ts:35

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](sockets.SpecializedWebSocket.md#capturerejectionsymbol)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[captureRejectionSymbol](sockets.SpecializedWebSocket.md#capturerejectionsymbol)

#### Defined in

node_modules/@types/node/events.d.ts:328

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[captureRejections](sockets.SpecializedWebSocket.md#capturerejections)

#### Defined in

node_modules/@types/node/events.d.ts:333

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[defaultMaxListeners](sockets.SpecializedWebSocket.md#defaultmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:334

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](sockets.SpecializedWebSocket.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[errorMonitor](sockets.SpecializedWebSocket.md#errormonitor)

#### Defined in

node_modules/@types/node/events.d.ts:327

## Methods

### addEventListener

▸ **addEventListener**(`method`, `cb`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | ``"message"`` |
| `cb` | (`event`: `MessageEvent`) => `void` |
| `options?` | `EventListenerOptions` |

#### Returns

`void`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[addEventListener](sockets.SpecializedWebSocket.md#addeventlistener)

#### Defined in

node_modules/@types/ws/index.d.ts:101

▸ **addEventListener**(`method`, `cb`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | ``"close"`` |
| `cb` | (`event`: `CloseEvent`) => `void` |
| `options?` | `EventListenerOptions` |

#### Returns

`void`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[addEventListener](sockets.SpecializedWebSocket.md#addeventlistener)

#### Defined in

node_modules/@types/ws/index.d.ts:106

▸ **addEventListener**(`method`, `cb`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | ``"error"`` |
| `cb` | (`event`: `ErrorEvent`) => `void` |
| `options?` | `EventListenerOptions` |

#### Returns

`void`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[addEventListener](sockets.SpecializedWebSocket.md#addeventlistener)

#### Defined in

node_modules/@types/ws/index.d.ts:111

▸ **addEventListener**(`method`, `cb`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | ``"open"`` |
| `cb` | (`event`: `Event`) => `void` |
| `options?` | `EventListenerOptions` |

#### Returns

`void`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[addEventListener](sockets.SpecializedWebSocket.md#addeventlistener)

#### Defined in

node_modules/@types/ws/index.d.ts:116

___

### addListener

▸ **addListener**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`code`: `number`, `reason`: `Buffer`) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[addListener](sockets.SpecializedWebSocket.md#addlistener)

#### Defined in

node_modules/@types/ws/index.d.ts:164

▸ **addListener**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[addListener](sockets.SpecializedWebSocket.md#addlistener)

#### Defined in

node_modules/@types/ws/index.d.ts:165

▸ **addListener**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`request`: `IncomingMessage`) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[addListener](sockets.SpecializedWebSocket.md#addlistener)

#### Defined in

node_modules/@types/ws/index.d.ts:166

▸ **addListener**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | (`data`: `RawData`, `isBinary`: `boolean`) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[addListener](sockets.SpecializedWebSocket.md#addlistener)

#### Defined in

node_modules/@types/ws/index.d.ts:167

▸ **addListener**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"open"`` |
| `listener` | () => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[addListener](sockets.SpecializedWebSocket.md#addlistener)

#### Defined in

node_modules/@types/ws/index.d.ts:168

▸ **addListener**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ping"`` \| ``"pong"`` |
| `listener` | (`data`: `Buffer`) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[addListener](sockets.SpecializedWebSocket.md#addlistener)

#### Defined in

node_modules/@types/ws/index.d.ts:169

▸ **addListener**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unexpected-response"`` |
| `listener` | (`request`: `ClientRequest`, `response`: `IncomingMessage`) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[addListener](sockets.SpecializedWebSocket.md#addlistener)

#### Defined in

node_modules/@types/ws/index.d.ts:170

▸ **addListener**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[addListener](sockets.SpecializedWebSocket.md#addlistener)

#### Defined in

node_modules/@types/ws/index.d.ts:174

___

### click

▸ **click**(): `void`

#### Returns

`void`

#### Defined in

[src/sockets.ts:26](https://github.com/Dabolus/webos-tv/blob/db77d18/src/sockets.ts#L26)

___

### close

▸ **close**(`code?`, `data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code?` | `number` |
| `data?` | `string` \| `Buffer` |

#### Returns

`void`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[close](sockets.SpecializedWebSocket.md#close)

#### Defined in

node_modules/@types/ws/index.d.ts:77

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[emit](sockets.SpecializedWebSocket.md#emit)

#### Defined in

node_modules/@types/node/events.d.ts:610

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`Since`**

v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[eventNames](sockets.SpecializedWebSocket.md#eventnames)

#### Defined in

node_modules/@types/node/events.d.ts:669

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](sockets.PointerInputSocket.md#defaultmaxlisteners).

**`Since`**

v1.0.0

#### Returns

`number`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[getMaxListeners](sockets.SpecializedWebSocket.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:526

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

**`Since`**

v3.2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[listenerCount](sockets.SpecializedWebSocket.md#listenercount)

#### Defined in

node_modules/@types/node/events.d.ts:616

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[listeners](sockets.SpecializedWebSocket.md#listeners)

#### Defined in

node_modules/@types/node/events.d.ts:539

___

### move

▸ **move**(`dx`, `dy`, `pressing`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dx` | `number` |
| `dy` | `number` |
| `pressing` | `boolean` |

#### Returns

`void`

#### Defined in

[src/sockets.ts:34](https://github.com/Dabolus/webos-tv/blob/db77d18/src/sockets.ts#L34)

___

### off

▸ **off**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`this`: `WebSocket`, `code`: `number`, `reason`: `Buffer`) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[off](sockets.SpecializedWebSocket.md#off)

#### Defined in

node_modules/@types/ws/index.d.ts:152

▸ **off**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`this`: `WebSocket`, `err`: `Error`) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[off](sockets.SpecializedWebSocket.md#off)

#### Defined in

node_modules/@types/ws/index.d.ts:153

▸ **off**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`this`: `WebSocket`, `request`: `IncomingMessage`) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[off](sockets.SpecializedWebSocket.md#off)

#### Defined in

node_modules/@types/ws/index.d.ts:154

▸ **off**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | (`this`: `WebSocket`, `data`: `RawData`, `isBinary`: `boolean`) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[off](sockets.SpecializedWebSocket.md#off)

#### Defined in

node_modules/@types/ws/index.d.ts:155

▸ **off**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"open"`` |
| `listener` | (`this`: `WebSocket`) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[off](sockets.SpecializedWebSocket.md#off)

#### Defined in

node_modules/@types/ws/index.d.ts:156

▸ **off**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ping"`` \| ``"pong"`` |
| `listener` | (`this`: `WebSocket`, `data`: `Buffer`) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[off](sockets.SpecializedWebSocket.md#off)

#### Defined in

node_modules/@types/ws/index.d.ts:157

▸ **off**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unexpected-response"`` |
| `listener` | (`this`: `WebSocket`, `request`: `ClientRequest`, `response`: `IncomingMessage`) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[off](sockets.SpecializedWebSocket.md#off)

#### Defined in

node_modules/@types/ws/index.d.ts:158

▸ **off**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (`this`: `WebSocket`, ...`args`: `any`[]) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[off](sockets.SpecializedWebSocket.md#off)

#### Defined in

node_modules/@types/ws/index.d.ts:162

___

### on

▸ **on**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`this`: `WebSocket`, `code`: `number`, `reason`: `Buffer`) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[on](sockets.SpecializedWebSocket.md#on)

#### Defined in

node_modules/@types/ws/index.d.ts:128

▸ **on**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`this`: `WebSocket`, `err`: `Error`) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[on](sockets.SpecializedWebSocket.md#on)

#### Defined in

node_modules/@types/ws/index.d.ts:129

▸ **on**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`this`: `WebSocket`, `request`: `IncomingMessage`) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[on](sockets.SpecializedWebSocket.md#on)

#### Defined in

node_modules/@types/ws/index.d.ts:130

▸ **on**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | (`this`: `WebSocket`, `data`: `RawData`, `isBinary`: `boolean`) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[on](sockets.SpecializedWebSocket.md#on)

#### Defined in

node_modules/@types/ws/index.d.ts:131

▸ **on**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"open"`` |
| `listener` | (`this`: `WebSocket`) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[on](sockets.SpecializedWebSocket.md#on)

#### Defined in

node_modules/@types/ws/index.d.ts:132

▸ **on**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ping"`` \| ``"pong"`` |
| `listener` | (`this`: `WebSocket`, `data`: `Buffer`) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[on](sockets.SpecializedWebSocket.md#on)

#### Defined in

node_modules/@types/ws/index.d.ts:133

▸ **on**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unexpected-response"`` |
| `listener` | (`this`: `WebSocket`, `request`: `ClientRequest`, `response`: `IncomingMessage`) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[on](sockets.SpecializedWebSocket.md#on)

#### Defined in

node_modules/@types/ws/index.d.ts:134

▸ **on**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (`this`: `WebSocket`, ...`args`: `any`[]) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[on](sockets.SpecializedWebSocket.md#on)

#### Defined in

node_modules/@types/ws/index.d.ts:138

___

### once

▸ **once**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`this`: `WebSocket`, `code`: `number`, `reason`: `Buffer`) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[once](sockets.SpecializedWebSocket.md#once)

#### Defined in

node_modules/@types/ws/index.d.ts:140

▸ **once**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`this`: `WebSocket`, `err`: `Error`) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[once](sockets.SpecializedWebSocket.md#once)

#### Defined in

node_modules/@types/ws/index.d.ts:141

▸ **once**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`this`: `WebSocket`, `request`: `IncomingMessage`) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[once](sockets.SpecializedWebSocket.md#once)

#### Defined in

node_modules/@types/ws/index.d.ts:142

▸ **once**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | (`this`: `WebSocket`, `data`: `RawData`, `isBinary`: `boolean`) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[once](sockets.SpecializedWebSocket.md#once)

#### Defined in

node_modules/@types/ws/index.d.ts:143

▸ **once**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"open"`` |
| `listener` | (`this`: `WebSocket`) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[once](sockets.SpecializedWebSocket.md#once)

#### Defined in

node_modules/@types/ws/index.d.ts:144

▸ **once**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ping"`` \| ``"pong"`` |
| `listener` | (`this`: `WebSocket`, `data`: `Buffer`) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[once](sockets.SpecializedWebSocket.md#once)

#### Defined in

node_modules/@types/ws/index.d.ts:145

▸ **once**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unexpected-response"`` |
| `listener` | (`this`: `WebSocket`, `request`: `ClientRequest`, `response`: `IncomingMessage`) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[once](sockets.SpecializedWebSocket.md#once)

#### Defined in

node_modules/@types/ws/index.d.ts:146

▸ **once**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (`this`: `WebSocket`, ...`args`: `any`[]) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[once](sockets.SpecializedWebSocket.md#once)

#### Defined in

node_modules/@types/ws/index.d.ts:150

___

### pause

▸ **pause**(): `void`

Pause the websocket causing it to stop emitting events. Some events can still be
emitted after this is called, until all buffered data is consumed. This method
is a noop if the ready state is `CONNECTING` or `CLOSED`.

#### Returns

`void`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[pause](sockets.SpecializedWebSocket.md#pause)

#### Defined in

node_modules/@types/ws/index.d.ts:93

___

### ping

▸ **ping**(`data?`, `mask?`, `cb?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |
| `mask?` | `boolean` |
| `cb?` | (`err`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[ping](sockets.SpecializedWebSocket.md#ping)

#### Defined in

node_modules/@types/ws/index.d.ts:78

___

### pong

▸ **pong**(`data?`, `mask?`, `cb?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |
| `mask?` | `boolean` |
| `cb?` | (`err`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[pong](sockets.SpecializedWebSocket.md#pong)

#### Defined in

node_modules/@types/ws/index.d.ts:79

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[prependListener](sockets.SpecializedWebSocket.md#prependlistener)

#### Defined in

node_modules/@types/node/events.d.ts:634

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[prependOnceListener](sockets.SpecializedWebSocket.md#prependoncelistener)

#### Defined in

node_modules/@types/node/events.d.ts:650

___

### press

▸ **press**(`button`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `button` | `string` |

#### Returns

`void`

#### Defined in

[src/sockets.ts:30](https://github.com/Dabolus/webos-tv/blob/db77d18/src/sockets.ts#L30)

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

**`Since`**

v9.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[rawListeners](sockets.SpecializedWebSocket.md#rawlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:569

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[removeAllListeners](sockets.SpecializedWebSocket.md#removealllisteners)

#### Defined in

node_modules/@types/node/events.d.ts:510

___

### removeEventListener

▸ **removeEventListener**(`method`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | ``"message"`` |
| `cb` | (`event`: `MessageEvent`) => `void` |

#### Returns

`void`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[removeEventListener](sockets.SpecializedWebSocket.md#removeeventlistener)

#### Defined in

node_modules/@types/ws/index.d.ts:122

▸ **removeEventListener**(`method`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | ``"close"`` |
| `cb` | (`event`: `CloseEvent`) => `void` |

#### Returns

`void`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[removeEventListener](sockets.SpecializedWebSocket.md#removeeventlistener)

#### Defined in

node_modules/@types/ws/index.d.ts:123

▸ **removeEventListener**(`method`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | ``"error"`` |
| `cb` | (`event`: `ErrorEvent`) => `void` |

#### Returns

`void`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[removeEventListener](sockets.SpecializedWebSocket.md#removeeventlistener)

#### Defined in

node_modules/@types/ws/index.d.ts:124

▸ **removeEventListener**(`method`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | ``"open"`` |
| `cb` | (`event`: `Event`) => `void` |

#### Returns

`void`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[removeEventListener](sockets.SpecializedWebSocket.md#removeeventlistener)

#### Defined in

node_modules/@types/ws/index.d.ts:125

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`code`: `number`, `reason`: `Buffer`) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[removeListener](sockets.SpecializedWebSocket.md#removelistener)

#### Defined in

node_modules/@types/ws/index.d.ts:176

▸ **removeListener**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[removeListener](sockets.SpecializedWebSocket.md#removelistener)

#### Defined in

node_modules/@types/ws/index.d.ts:177

▸ **removeListener**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`request`: `IncomingMessage`) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[removeListener](sockets.SpecializedWebSocket.md#removelistener)

#### Defined in

node_modules/@types/ws/index.d.ts:178

▸ **removeListener**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | (`data`: `RawData`, `isBinary`: `boolean`) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[removeListener](sockets.SpecializedWebSocket.md#removelistener)

#### Defined in

node_modules/@types/ws/index.d.ts:179

▸ **removeListener**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"open"`` |
| `listener` | () => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[removeListener](sockets.SpecializedWebSocket.md#removelistener)

#### Defined in

node_modules/@types/ws/index.d.ts:180

▸ **removeListener**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ping"`` \| ``"pong"`` |
| `listener` | (`data`: `Buffer`) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[removeListener](sockets.SpecializedWebSocket.md#removelistener)

#### Defined in

node_modules/@types/ws/index.d.ts:181

▸ **removeListener**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unexpected-response"`` |
| `listener` | (`request`: `ClientRequest`, `response`: `IncomingMessage`) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[removeListener](sockets.SpecializedWebSocket.md#removelistener)

#### Defined in

node_modules/@types/ws/index.d.ts:182

▸ **removeListener**(`event`, `listener`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[removeListener](sockets.SpecializedWebSocket.md#removelistener)

#### Defined in

node_modules/@types/ws/index.d.ts:186

___

### resume

▸ **resume**(): `void`

Make a paused socket resume emitting events. This method is a noop if the ready
state is `CONNECTING` or `CLOSED`.

#### Returns

`void`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[resume](sockets.SpecializedWebSocket.md#resume)

#### Defined in

node_modules/@types/ws/index.d.ts:98

___

### scroll

▸ **scroll**(`dx`, `dy`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dx` | `number` |
| `dy` | `number` |

#### Returns

`void`

#### Defined in

[src/sockets.ts:38](https://github.com/Dabolus/webos-tv/blob/db77d18/src/sockets.ts#L38)

___

### send

▸ **send**(`type`, `payload?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `payload` | `any` |

#### Returns

`void`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[send](sockets.SpecializedWebSocket.md#send)

#### Defined in

[src/sockets.ts:8](https://github.com/Dabolus/webos-tv/blob/db77d18/src/sockets.ts#L8)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`PointerInputSocket`](sockets.PointerInputSocket.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.3.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`PointerInputSocket`](sockets.PointerInputSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[setMaxListeners](sockets.SpecializedWebSocket.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:520

___

### terminate

▸ **terminate**(): `void`

#### Returns

`void`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[terminate](sockets.SpecializedWebSocket.md#terminate)

#### Defined in

node_modules/@types/ws/index.d.ts:86

___

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
const { getEventListeners, EventEmitter } = require('events');

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  getEventListeners(ee, 'foo'); // [listener]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  getEventListeners(et, 'foo'); // [listener]
}
```

**`Since`**

v15.2.0, v14.17.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` \| `_DOMEventTarget` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[getEventListeners](sockets.SpecializedWebSocket.md#geteventlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:299

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
const { EventEmitter, listenerCount } = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

**`Since`**

v0.9.12

**`Deprecated`**

Since v3.2.0 - Use `listenerCount` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[listenerCount](sockets.SpecializedWebSocket.md#listenercount-1)

#### Defined in

node_modules/@types/node/events.d.ts:271

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`\>

```js
const { on, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo')) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
const { on, EventEmitter } = require('events');
const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

**`Since`**

v13.6.0, v12.16.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`<`any`\>

that iterates `eventName` events emitted by the `emitter`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[on](sockets.SpecializedWebSocket.md#on-1)

#### Defined in

node_modules/@types/node/events.d.ts:254

___

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
const { once, EventEmitter } = require('events');

async function run() {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit('myevent', 42);
  });

  const [value] = await once(ee, 'myevent');
  console.log(value);

  const err = new Error('kaboom');
  process.nextTick(() => {
    ee.emit('error', err);
  });

  try {
    await once(ee, 'myevent');
  } catch (err) {
    console.log('error happened', err);
  }
}

run();
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.log('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

**`Since`**

v11.13.0, v10.16.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[once](sockets.SpecializedWebSocket.md#once-1)

#### Defined in

node_modules/@types/node/events.d.ts:194

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[once](sockets.SpecializedWebSocket.md#once-1)

#### Defined in

node_modules/@types/node/events.d.ts:195

___

### setMaxListeners

▸ `Static` **setMaxListeners**(`n?`, ...`eventTargets`): `void`

```js
const {
  setMaxListeners,
  EventEmitter
} = require('events');

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

**`Since`**

v15.4.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n?` | `number` | A non-negative number. The maximum number of listeners per `EventTarget` event. |
| `...eventTargets` | (`EventEmitter` \| `_DOMEventTarget`)[] | - |

#### Returns

`void`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[setMaxListeners](sockets.SpecializedWebSocket.md#setmaxlisteners-1)

#### Defined in

node_modules/@types/node/events.d.ts:317
