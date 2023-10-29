[webOS](../README.md) / [Exports](../modules.md) / [sockets](../modules/sockets.md) / RemoteKeyboardSocket

# Class: RemoteKeyboardSocket

[sockets](../modules/sockets.md).RemoteKeyboardSocket

## Hierarchy

- [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

  ↳ **`RemoteKeyboardSocket`**

## Table of contents

### Constructors

- [constructor](sockets.RemoteKeyboardSocket.md#constructor)

### Properties

- [CLOSED](sockets.RemoteKeyboardSocket.md#closed)
- [CLOSING](sockets.RemoteKeyboardSocket.md#closing)
- [CONNECTING](sockets.RemoteKeyboardSocket.md#connecting)
- [OPEN](sockets.RemoteKeyboardSocket.md#open)
- [binaryType](sockets.RemoteKeyboardSocket.md#binarytype)
- [bufferedAmount](sockets.RemoteKeyboardSocket.md#bufferedamount)
- [extensions](sockets.RemoteKeyboardSocket.md#extensions)
- [isPaused](sockets.RemoteKeyboardSocket.md#ispaused)
- [onclose](sockets.RemoteKeyboardSocket.md#onclose)
- [onerror](sockets.RemoteKeyboardSocket.md#onerror)
- [onmessage](sockets.RemoteKeyboardSocket.md#onmessage)
- [onopen](sockets.RemoteKeyboardSocket.md#onopen)
- [protocol](sockets.RemoteKeyboardSocket.md#protocol)
- [readyState](sockets.RemoteKeyboardSocket.md#readystate)
- [url](sockets.RemoteKeyboardSocket.md#url)
- [CLOSED](sockets.RemoteKeyboardSocket.md#closed-1)
- [CLOSING](sockets.RemoteKeyboardSocket.md#closing-1)
- [CONNECTING](sockets.RemoteKeyboardSocket.md#connecting-1)
- [OPEN](sockets.RemoteKeyboardSocket.md#open-1)
- [captureRejectionSymbol](sockets.RemoteKeyboardSocket.md#capturerejectionsymbol)
- [captureRejections](sockets.RemoteKeyboardSocket.md#capturerejections)
- [defaultMaxListeners](sockets.RemoteKeyboardSocket.md#defaultmaxlisteners)
- [errorMonitor](sockets.RemoteKeyboardSocket.md#errormonitor)

### Methods

- [[captureRejectionSymbol]](sockets.RemoteKeyboardSocket.md#[capturerejectionsymbol])
- [addEventListener](sockets.RemoteKeyboardSocket.md#addeventlistener)
- [addListener](sockets.RemoteKeyboardSocket.md#addlistener)
- [close](sockets.RemoteKeyboardSocket.md#close)
- [emit](sockets.RemoteKeyboardSocket.md#emit)
- [eventNames](sockets.RemoteKeyboardSocket.md#eventnames)
- [getMaxListeners](sockets.RemoteKeyboardSocket.md#getmaxlisteners)
- [listenerCount](sockets.RemoteKeyboardSocket.md#listenercount)
- [listeners](sockets.RemoteKeyboardSocket.md#listeners)
- [off](sockets.RemoteKeyboardSocket.md#off)
- [on](sockets.RemoteKeyboardSocket.md#on)
- [once](sockets.RemoteKeyboardSocket.md#once)
- [pause](sockets.RemoteKeyboardSocket.md#pause)
- [ping](sockets.RemoteKeyboardSocket.md#ping)
- [pong](sockets.RemoteKeyboardSocket.md#pong)
- [prependListener](sockets.RemoteKeyboardSocket.md#prependlistener)
- [prependOnceListener](sockets.RemoteKeyboardSocket.md#prependoncelistener)
- [rawListeners](sockets.RemoteKeyboardSocket.md#rawlisteners)
- [removeAllListeners](sockets.RemoteKeyboardSocket.md#removealllisteners)
- [removeEventListener](sockets.RemoteKeyboardSocket.md#removeeventlistener)
- [removeListener](sockets.RemoteKeyboardSocket.md#removelistener)
- [resume](sockets.RemoteKeyboardSocket.md#resume)
- [send](sockets.RemoteKeyboardSocket.md#send)
- [setMaxListeners](sockets.RemoteKeyboardSocket.md#setmaxlisteners)
- [terminate](sockets.RemoteKeyboardSocket.md#terminate)
- [addAbortListener](sockets.RemoteKeyboardSocket.md#addabortlistener)
- [getEventListeners](sockets.RemoteKeyboardSocket.md#geteventlisteners)
- [getMaxListeners](sockets.RemoteKeyboardSocket.md#getmaxlisteners-1)
- [listenerCount](sockets.RemoteKeyboardSocket.md#listenercount-1)
- [on](sockets.RemoteKeyboardSocket.md#on-1)
- [once](sockets.RemoteKeyboardSocket.md#once-1)
- [setMaxListeners](sockets.RemoteKeyboardSocket.md#setmaxlisteners-1)

## Constructors

### constructor

• **new RemoteKeyboardSocket**(`address`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `options?` | `ClientOptions` |

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[constructor](sockets.SpecializedWebSocket.md#constructor)

#### Defined in

[src/sockets.ts:4](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/sockets.ts#L4)

## Properties

### CLOSED

• `Readonly` **CLOSED**: ``3``

The connection is closed.

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[CLOSED](sockets.SpecializedWebSocket.md#closed)

#### Defined in

node_modules/@types/ws/index.d.ts:70

___

### CLOSING

• `Readonly` **CLOSING**: ``2``

The connection is in the process of closing.

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[CLOSING](sockets.SpecializedWebSocket.md#closing)

#### Defined in

node_modules/@types/ws/index.d.ts:68

___

### CONNECTING

• `Readonly` **CONNECTING**: ``0``

The connection is not yet open.

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[CONNECTING](sockets.SpecializedWebSocket.md#connecting)

#### Defined in

node_modules/@types/ws/index.d.ts:64

___

### OPEN

• `Readonly` **OPEN**: ``1``

The connection is open and ready to communicate.

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[OPEN](sockets.SpecializedWebSocket.md#open)

#### Defined in

node_modules/@types/ws/index.d.ts:66

___

### binaryType

• **binaryType**: ``"nodebuffer"`` \| ``"arraybuffer"`` \| ``"fragments"``

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[binaryType](sockets.SpecializedWebSocket.md#binarytype)

#### Defined in

node_modules/@types/ws/index.d.ts:49

___

### bufferedAmount

• `Readonly` **bufferedAmount**: `number`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[bufferedAmount](sockets.SpecializedWebSocket.md#bufferedamount)

#### Defined in

node_modules/@types/ws/index.d.ts:50

___

### extensions

• `Readonly` **extensions**: `string`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[extensions](sockets.SpecializedWebSocket.md#extensions)

#### Defined in

node_modules/@types/ws/index.d.ts:51

___

### isPaused

• `Readonly` **isPaused**: `boolean`

Indicates whether the websocket is paused

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[isPaused](sockets.SpecializedWebSocket.md#ispaused)

#### Defined in

node_modules/@types/ws/index.d.ts:53

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

node_modules/@types/ws/index.d.ts:74

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

node_modules/@types/ws/index.d.ts:73

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

node_modules/@types/ws/index.d.ts:75

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

node_modules/@types/ws/index.d.ts:72

___

### protocol

• `Readonly` **protocol**: `string`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[protocol](sockets.SpecializedWebSocket.md#protocol)

#### Defined in

node_modules/@types/ws/index.d.ts:54

___

### readyState

• `Readonly` **readyState**: ``0`` \| ``1`` \| ``2`` \| ``3``

The current state of the connection

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[readyState](sockets.SpecializedWebSocket.md#readystate)

#### Defined in

node_modules/@types/ws/index.d.ts:56

___

### url

• `Readonly` **url**: `string`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[url](sockets.SpecializedWebSocket.md#url)

#### Defined in

node_modules/@types/ws/index.d.ts:61

___

### CLOSED

▪ `Static` `Readonly` **CLOSED**: ``3``

The connection is closed.

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[CLOSED](sockets.SpecializedWebSocket.md#closed-1)

#### Defined in

node_modules/@types/ws/index.d.ts:47

___

### CLOSING

▪ `Static` `Readonly` **CLOSING**: ``2``

The connection is in the process of closing.

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[CLOSING](sockets.SpecializedWebSocket.md#closing-1)

#### Defined in

node_modules/@types/ws/index.d.ts:45

___

### CONNECTING

▪ `Static` `Readonly` **CONNECTING**: ``0``

The connection is not yet open.

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[CONNECTING](sockets.SpecializedWebSocket.md#connecting-1)

#### Defined in

node_modules/@types/ws/index.d.ts:41

___

### OPEN

▪ `Static` `Readonly` **OPEN**: ``1``

The connection is open and ready to communicate.

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[OPEN](sockets.SpecializedWebSocket.md#open-1)

#### Defined in

node_modules/@types/ws/index.d.ts:43

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](sockets.SpecializedWebSocket.md#capturerejectionsymbol)

Value: `Symbol.for('nodejs.rejection')`

See how to write a custom `rejection handler`.

**`Since`**

v13.4.0, v12.16.0

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[captureRejectionSymbol](sockets.SpecializedWebSocket.md#capturerejectionsymbol)

#### Defined in

node_modules/@types/node/events.d.ts:402

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Value: [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Change the default `captureRejections` option on all new `EventEmitter` objects.

**`Since`**

v13.4.0, v12.16.0

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[captureRejections](sockets.SpecializedWebSocket.md#capturerejections)

#### Defined in

node_modules/@types/node/events.d.ts:409

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

By default, a maximum of `10` listeners can be registered for any single
event. This limit can be changed for individual `EventEmitter` instances
using the `emitter.setMaxListeners(n)` method. To change the default
for _all_`EventEmitter` instances, the `events.defaultMaxListeners`property can be used. If this value is not a positive number, a `RangeError`is thrown.

Take caution when setting the `events.defaultMaxListeners` because the
change affects _all_`EventEmitter` instances, including those created before
the change is made. However, calling `emitter.setMaxListeners(n)` still has
precedence over `events.defaultMaxListeners`.

This is not a hard limit. The `EventEmitter` instance will allow
more listeners to be added but will output a trace warning to stderr indicating
that a "possible EventEmitter memory leak" has been detected. For any single`EventEmitter`, the `emitter.getMaxListeners()` and `emitter.setMaxListeners()`methods can be used to
temporarily avoid this warning:

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.setMaxListeners(emitter.getMaxListeners() + 1);
emitter.once('event', () => {
  // do stuff
  emitter.setMaxListeners(Math.max(emitter.getMaxListeners() - 1, 0));
});
```

The `--trace-warnings` command-line flag can be used to display the
stack trace for such warnings.

The emitted warning can be inspected with `process.on('warning')` and will
have the additional `emitter`, `type`, and `count` properties, referring to
the event emitter instance, the event's name and the number of attached
listeners, respectively.
Its `name` property is set to `'MaxListenersExceededWarning'`.

**`Since`**

v0.11.2

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[defaultMaxListeners](sockets.SpecializedWebSocket.md#defaultmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:446

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](sockets.SpecializedWebSocket.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`events. Listeners installed using this symbol are called before the regular`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an`'error'` event is emitted. Therefore, the process will still crash if no
regular `'error'` listener is installed.

**`Since`**

v13.6.0, v12.17.0

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[errorMonitor](sockets.SpecializedWebSocket.md#errormonitor)

#### Defined in

node_modules/@types/node/events.d.ts:395

## Methods

### [captureRejectionSymbol]

▸ `Optional` **[captureRejectionSymbol]**(`error`, `event`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |
| `event` | `string` |
| `...args` | `any`[] |

#### Returns

`void`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[[captureRejectionSymbol]](sockets.SpecializedWebSocket.md#[capturerejectionsymbol])

#### Defined in

node_modules/@types/node/events.d.ts:112

___

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

node_modules/@types/ws/index.d.ts:115

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

node_modules/@types/ws/index.d.ts:120

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

node_modules/@types/ws/index.d.ts:125

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

node_modules/@types/ws/index.d.ts:130

___

### addListener

▸ **addListener**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`code`: `number`, `reason`: `Buffer`) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[addListener](sockets.SpecializedWebSocket.md#addlistener)

#### Defined in

node_modules/@types/ws/index.d.ts:178

▸ **addListener**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[addListener](sockets.SpecializedWebSocket.md#addlistener)

#### Defined in

node_modules/@types/ws/index.d.ts:179

▸ **addListener**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`request`: `IncomingMessage`) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[addListener](sockets.SpecializedWebSocket.md#addlistener)

#### Defined in

node_modules/@types/ws/index.d.ts:180

▸ **addListener**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | (`data`: `RawData`, `isBinary`: `boolean`) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[addListener](sockets.SpecializedWebSocket.md#addlistener)

#### Defined in

node_modules/@types/ws/index.d.ts:181

▸ **addListener**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"open"`` |
| `listener` | () => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[addListener](sockets.SpecializedWebSocket.md#addlistener)

#### Defined in

node_modules/@types/ws/index.d.ts:182

▸ **addListener**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ping"`` \| ``"pong"`` |
| `listener` | (`data`: `Buffer`) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[addListener](sockets.SpecializedWebSocket.md#addlistener)

#### Defined in

node_modules/@types/ws/index.d.ts:183

▸ **addListener**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unexpected-response"`` |
| `listener` | (`request`: `ClientRequest`, `response`: `IncomingMessage`) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[addListener](sockets.SpecializedWebSocket.md#addlistener)

#### Defined in

node_modules/@types/ws/index.d.ts:184

▸ **addListener**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[addListener](sockets.SpecializedWebSocket.md#addlistener)

#### Defined in

node_modules/@types/ws/index.d.ts:188

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

node_modules/@types/ws/index.d.ts:85

___

### emit

▸ **emit**(`eventName`, `...args`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
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

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

**`Since`**

v0.1.26

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[emit](sockets.SpecializedWebSocket.md#emit)

#### Defined in

node_modules/@types/node/events.d.ts:772

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

#### Returns

(`string` \| `symbol`)[]

**`Since`**

v6.0.0

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[eventNames](sockets.SpecializedWebSocket.md#eventnames)

#### Defined in

node_modules/@types/node/events.d.ts:835

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](sockets.RemoteKeyboardSocket.md#defaultmaxlisteners).

#### Returns

`number`

**`Since`**

v1.0.0

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[getMaxListeners](sockets.SpecializedWebSocket.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:687

___

### listenerCount

▸ **listenerCount**(`eventName`, `listener?`): `number`

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |
| `listener?` | `Function` | The event handler function |

#### Returns

`number`

**`Since`**

v3.2.0

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[listenerCount](sockets.SpecializedWebSocket.md#listenercount)

#### Defined in

node_modules/@types/node/events.d.ts:781

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

**`Since`**

v0.1.26

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[listeners](sockets.SpecializedWebSocket.md#listeners)

#### Defined in

node_modules/@types/node/events.d.ts:700

___

### off

▸ **off**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`this`: `WebSocket`, `code`: `number`, `reason`: `Buffer`) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[off](sockets.SpecializedWebSocket.md#off)

#### Defined in

node_modules/@types/ws/index.d.ts:166

▸ **off**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`this`: `WebSocket`, `err`: `Error`) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[off](sockets.SpecializedWebSocket.md#off)

#### Defined in

node_modules/@types/ws/index.d.ts:167

▸ **off**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`this`: `WebSocket`, `request`: `IncomingMessage`) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[off](sockets.SpecializedWebSocket.md#off)

#### Defined in

node_modules/@types/ws/index.d.ts:168

▸ **off**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | (`this`: `WebSocket`, `data`: `RawData`, `isBinary`: `boolean`) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[off](sockets.SpecializedWebSocket.md#off)

#### Defined in

node_modules/@types/ws/index.d.ts:169

▸ **off**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"open"`` |
| `listener` | (`this`: `WebSocket`) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[off](sockets.SpecializedWebSocket.md#off)

#### Defined in

node_modules/@types/ws/index.d.ts:170

▸ **off**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ping"`` \| ``"pong"`` |
| `listener` | (`this`: `WebSocket`, `data`: `Buffer`) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[off](sockets.SpecializedWebSocket.md#off)

#### Defined in

node_modules/@types/ws/index.d.ts:171

▸ **off**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unexpected-response"`` |
| `listener` | (`this`: `WebSocket`, `request`: `ClientRequest`, `response`: `IncomingMessage`) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[off](sockets.SpecializedWebSocket.md#off)

#### Defined in

node_modules/@types/ws/index.d.ts:172

▸ **off**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (`this`: `WebSocket`, ...`args`: `any`[]) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[off](sockets.SpecializedWebSocket.md#off)

#### Defined in

node_modules/@types/ws/index.d.ts:176

___

### on

▸ **on**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`this`: `WebSocket`, `code`: `number`, `reason`: `Buffer`) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[on](sockets.SpecializedWebSocket.md#on)

#### Defined in

node_modules/@types/ws/index.d.ts:142

▸ **on**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`this`: `WebSocket`, `err`: `Error`) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[on](sockets.SpecializedWebSocket.md#on)

#### Defined in

node_modules/@types/ws/index.d.ts:143

▸ **on**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`this`: `WebSocket`, `request`: `IncomingMessage`) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[on](sockets.SpecializedWebSocket.md#on)

#### Defined in

node_modules/@types/ws/index.d.ts:144

▸ **on**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | (`this`: `WebSocket`, `data`: `RawData`, `isBinary`: `boolean`) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[on](sockets.SpecializedWebSocket.md#on)

#### Defined in

node_modules/@types/ws/index.d.ts:145

▸ **on**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"open"`` |
| `listener` | (`this`: `WebSocket`) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[on](sockets.SpecializedWebSocket.md#on)

#### Defined in

node_modules/@types/ws/index.d.ts:146

▸ **on**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ping"`` \| ``"pong"`` |
| `listener` | (`this`: `WebSocket`, `data`: `Buffer`) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[on](sockets.SpecializedWebSocket.md#on)

#### Defined in

node_modules/@types/ws/index.d.ts:147

▸ **on**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unexpected-response"`` |
| `listener` | (`this`: `WebSocket`, `request`: `ClientRequest`, `response`: `IncomingMessage`) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[on](sockets.SpecializedWebSocket.md#on)

#### Defined in

node_modules/@types/ws/index.d.ts:148

▸ **on**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (`this`: `WebSocket`, ...`args`: `any`[]) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[on](sockets.SpecializedWebSocket.md#on)

#### Defined in

node_modules/@types/ws/index.d.ts:152

___

### once

▸ **once**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`this`: `WebSocket`, `code`: `number`, `reason`: `Buffer`) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[once](sockets.SpecializedWebSocket.md#once)

#### Defined in

node_modules/@types/ws/index.d.ts:154

▸ **once**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`this`: `WebSocket`, `err`: `Error`) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[once](sockets.SpecializedWebSocket.md#once)

#### Defined in

node_modules/@types/ws/index.d.ts:155

▸ **once**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`this`: `WebSocket`, `request`: `IncomingMessage`) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[once](sockets.SpecializedWebSocket.md#once)

#### Defined in

node_modules/@types/ws/index.d.ts:156

▸ **once**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | (`this`: `WebSocket`, `data`: `RawData`, `isBinary`: `boolean`) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[once](sockets.SpecializedWebSocket.md#once)

#### Defined in

node_modules/@types/ws/index.d.ts:157

▸ **once**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"open"`` |
| `listener` | (`this`: `WebSocket`) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[once](sockets.SpecializedWebSocket.md#once)

#### Defined in

node_modules/@types/ws/index.d.ts:158

▸ **once**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ping"`` \| ``"pong"`` |
| `listener` | (`this`: `WebSocket`, `data`: `Buffer`) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[once](sockets.SpecializedWebSocket.md#once)

#### Defined in

node_modules/@types/ws/index.d.ts:159

▸ **once**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unexpected-response"`` |
| `listener` | (`this`: `WebSocket`, `request`: `ClientRequest`, `response`: `IncomingMessage`) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[once](sockets.SpecializedWebSocket.md#once)

#### Defined in

node_modules/@types/ws/index.d.ts:160

▸ **once**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (`this`: `WebSocket`, ...`args`: `any`[]) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[once](sockets.SpecializedWebSocket.md#once)

#### Defined in

node_modules/@types/ws/index.d.ts:164

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

node_modules/@types/ws/index.d.ts:107

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

node_modules/@types/ws/index.d.ts:86

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

node_modules/@types/ws/index.d.ts:87

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

**`Since`**

v6.0.0

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[prependListener](sockets.SpecializedWebSocket.md#prependlistener)

#### Defined in

node_modules/@types/node/events.d.ts:799

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

**`Since`**

v6.0.0

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[prependOnceListener](sockets.SpecializedWebSocket.md#prependoncelistener)

#### Defined in

node_modules/@types/node/events.d.ts:815

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import { EventEmitter } from 'node:events';
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

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

**`Since`**

v9.4.0

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[rawListeners](sockets.SpecializedWebSocket.md#rawlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:731

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

**`Since`**

v0.1.26

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[removeAllListeners](sockets.SpecializedWebSocket.md#removealllisteners)

#### Defined in

node_modules/@types/node/events.d.ts:671

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

node_modules/@types/ws/index.d.ts:136

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

node_modules/@types/ws/index.d.ts:137

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

node_modules/@types/ws/index.d.ts:138

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

node_modules/@types/ws/index.d.ts:139

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`code`: `number`, `reason`: `Buffer`) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[removeListener](sockets.SpecializedWebSocket.md#removelistener)

#### Defined in

node_modules/@types/ws/index.d.ts:190

▸ **removeListener**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[removeListener](sockets.SpecializedWebSocket.md#removelistener)

#### Defined in

node_modules/@types/ws/index.d.ts:191

▸ **removeListener**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`request`: `IncomingMessage`) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[removeListener](sockets.SpecializedWebSocket.md#removelistener)

#### Defined in

node_modules/@types/ws/index.d.ts:192

▸ **removeListener**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | (`data`: `RawData`, `isBinary`: `boolean`) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[removeListener](sockets.SpecializedWebSocket.md#removelistener)

#### Defined in

node_modules/@types/ws/index.d.ts:193

▸ **removeListener**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"open"`` |
| `listener` | () => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[removeListener](sockets.SpecializedWebSocket.md#removelistener)

#### Defined in

node_modules/@types/ws/index.d.ts:194

▸ **removeListener**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ping"`` \| ``"pong"`` |
| `listener` | (`data`: `Buffer`) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[removeListener](sockets.SpecializedWebSocket.md#removelistener)

#### Defined in

node_modules/@types/ws/index.d.ts:195

▸ **removeListener**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unexpected-response"`` |
| `listener` | (`request`: `ClientRequest`, `response`: `IncomingMessage`) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[removeListener](sockets.SpecializedWebSocket.md#removelistener)

#### Defined in

node_modules/@types/ws/index.d.ts:196

▸ **removeListener**(`event`, `listener`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[removeListener](sockets.SpecializedWebSocket.md#removelistener)

#### Defined in

node_modules/@types/ws/index.d.ts:200

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

node_modules/@types/ws/index.d.ts:112

___

### send

▸ **send**(`type`, `payload?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `payload` | `unknown` |

#### Returns

`void`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[send](sockets.SpecializedWebSocket.md#send)

#### Defined in

[src/sockets.ts:8](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/sockets.ts#L8)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

**`Since`**

v0.3.5

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[setMaxListeners](sockets.SpecializedWebSocket.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:681

___

### terminate

▸ **terminate**(): `void`

#### Returns

`void`

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[terminate](sockets.SpecializedWebSocket.md#terminate)

#### Defined in

node_modules/@types/ws/index.d.ts:100

___

### addAbortListener

▸ `Static` **addAbortListener**(`signal`, `resource`): `Disposable`

Listens once to the `abort` event on the provided `signal`.

Listening to the `abort` event on abort signals is unsafe and may
lead to resource leaks since another third party with the signal can
call `e.stopImmediatePropagation()`. Unfortunately Node.js cannot change
this since it would violate the web standard. Additionally, the original
API makes it easy to forget to remove listeners.

This API allows safely using `AbortSignal`s in Node.js APIs by solving these
two issues by listening to the event such that `stopImmediatePropagation` does
not prevent the listener from running.

Returns a disposable so that it may be unsubscribed from more easily.

```js
import { addAbortListener } from 'node:events';

function example(signal) {
  let disposable;
  try {
    signal.addEventListener('abort', (e) => e.stopImmediatePropagation());
    disposable = addAbortListener(signal, (e) => {
      // Do something when signal is aborted.
    });
  } finally {
    disposable?.[Symbol.dispose]();
  }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `signal` | `AbortSignal` |
| `resource` | (`event`: `Event`) => `void` |

#### Returns

`Disposable`

Disposable that removes the `abort` listener.

**`Since`**

v20.5.0

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[addAbortListener](sockets.SpecializedWebSocket.md#addabortlistener)

#### Defined in

node_modules/@types/node/events.d.ts:387

___

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
import { getEventListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  console.log(getEventListeners(ee, 'foo')); // [ [Function: listener] ]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  console.log(getEventListeners(et, 'foo')); // [ [Function: listener] ]
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` \| `_DOMEventTarget` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

**`Since`**

v15.2.0, v14.17.0

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[getEventListeners](sockets.SpecializedWebSocket.md#geteventlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:308

___

### getMaxListeners

▸ `Static` **getMaxListeners**(`emitter`): `number`

Returns the currently set max amount of listeners.

For `EventEmitter`s this behaves exactly the same as calling `.getMaxListeners` on
the emitter.

For `EventTarget`s this is the only way to get the max event listeners for the
event target. If the number of event handlers on a single EventTarget exceeds
the max set, the EventTarget will print a warning.

```js
import { getMaxListeners, setMaxListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  console.log(getMaxListeners(ee)); // 10
  setMaxListeners(11, ee);
  console.log(getMaxListeners(ee)); // 11
}
{
  const et = new EventTarget();
  console.log(getMaxListeners(et)); // 10
  setMaxListeners(11, et);
  console.log(getMaxListeners(et)); // 11
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` \| `_DOMEventTarget` |

#### Returns

`number`

**`Since`**

v19.9.0

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[getMaxListeners](sockets.SpecializedWebSocket.md#getmaxlisteners-1)

#### Defined in

node_modules/@types/node/events.d.ts:337

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
import { EventEmitter, listenerCount } from 'node:events';

const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

**`Since`**

v0.9.12

**`Deprecated`**

Since v3.2.0 - Use `listenerCount` instead.

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[listenerCount](sockets.SpecializedWebSocket.md#listenercount-1)

#### Defined in

node_modules/@types/node/events.d.ts:280

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`\>

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

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
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`<`any`\>

that iterates `eventName` events emitted by the `emitter`

**`Since`**

v13.6.0, v12.16.0

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[on](sockets.SpecializedWebSocket.md#on-1)

#### Defined in

node_modules/@types/node/events.d.ts:258

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
import { once, EventEmitter } from 'node:events';
import process from 'node:process';

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
  console.error('error happened', err);
}
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.error('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
import { EventEmitter, once } from 'node:events';

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

**`Since`**

v11.13.0, v10.16.0

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[once](sockets.SpecializedWebSocket.md#once-1)

#### Defined in

node_modules/@types/node/events.d.ts:193

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

node_modules/@types/node/events.d.ts:198

___

### setMaxListeners

▸ `Static` **setMaxListeners**(`n?`, `...eventTargets`): `void`

```js
import { setMaxListeners, EventEmitter } from 'node:events';

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n?` | `number` | A non-negative number. The maximum number of listeners per `EventTarget` event. |
| `...eventTargets` | (`EventEmitter` \| `_DOMEventTarget`)[] | - |

#### Returns

`void`

**`Since`**

v15.4.0

#### Inherited from

[SpecializedWebSocket](sockets.SpecializedWebSocket.md).[setMaxListeners](sockets.SpecializedWebSocket.md#setmaxlisteners-1)

#### Defined in

node_modules/@types/node/events.d.ts:352
