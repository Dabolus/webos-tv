[webOS](../README.md) / [Exports](../modules.md) / [sockets](../modules/sockets.md) / SpecializedWebSocket

# Class: SpecializedWebSocket

[sockets](../modules/sockets.md).SpecializedWebSocket

## Hierarchy

- `WebSocket`

  ↳ **`SpecializedWebSocket`**

  ↳↳ [`PointerInputSocket`](sockets.PointerInputSocket.md)

  ↳↳ [`RemoteKeyboardSocket`](sockets.RemoteKeyboardSocket.md)

## Table of contents

### Constructors

- [constructor](sockets.SpecializedWebSocket.md#constructor)

### Properties

- [CLOSED](sockets.SpecializedWebSocket.md#closed)
- [CLOSING](sockets.SpecializedWebSocket.md#closing)
- [CONNECTING](sockets.SpecializedWebSocket.md#connecting)
- [OPEN](sockets.SpecializedWebSocket.md#open)
- [binaryType](sockets.SpecializedWebSocket.md#binarytype)
- [bufferedAmount](sockets.SpecializedWebSocket.md#bufferedamount)
- [extensions](sockets.SpecializedWebSocket.md#extensions)
- [isPaused](sockets.SpecializedWebSocket.md#ispaused)
- [onclose](sockets.SpecializedWebSocket.md#onclose)
- [onerror](sockets.SpecializedWebSocket.md#onerror)
- [onmessage](sockets.SpecializedWebSocket.md#onmessage)
- [onopen](sockets.SpecializedWebSocket.md#onopen)
- [protocol](sockets.SpecializedWebSocket.md#protocol)
- [readyState](sockets.SpecializedWebSocket.md#readystate)
- [url](sockets.SpecializedWebSocket.md#url)
- [CLOSED](sockets.SpecializedWebSocket.md#closed-1)
- [CLOSING](sockets.SpecializedWebSocket.md#closing-1)
- [CONNECTING](sockets.SpecializedWebSocket.md#connecting-1)
- [OPEN](sockets.SpecializedWebSocket.md#open-1)
- [captureRejectionSymbol](sockets.SpecializedWebSocket.md#capturerejectionsymbol)
- [captureRejections](sockets.SpecializedWebSocket.md#capturerejections)
- [defaultMaxListeners](sockets.SpecializedWebSocket.md#defaultmaxlisteners)
- [errorMonitor](sockets.SpecializedWebSocket.md#errormonitor)

### Methods

- [[captureRejectionSymbol]](sockets.SpecializedWebSocket.md#[capturerejectionsymbol])
- [addEventListener](sockets.SpecializedWebSocket.md#addeventlistener)
- [addListener](sockets.SpecializedWebSocket.md#addlistener)
- [close](sockets.SpecializedWebSocket.md#close)
- [emit](sockets.SpecializedWebSocket.md#emit)
- [eventNames](sockets.SpecializedWebSocket.md#eventnames)
- [getMaxListeners](sockets.SpecializedWebSocket.md#getmaxlisteners)
- [listenerCount](sockets.SpecializedWebSocket.md#listenercount)
- [listeners](sockets.SpecializedWebSocket.md#listeners)
- [off](sockets.SpecializedWebSocket.md#off)
- [on](sockets.SpecializedWebSocket.md#on)
- [once](sockets.SpecializedWebSocket.md#once)
- [pause](sockets.SpecializedWebSocket.md#pause)
- [ping](sockets.SpecializedWebSocket.md#ping)
- [pong](sockets.SpecializedWebSocket.md#pong)
- [prependListener](sockets.SpecializedWebSocket.md#prependlistener)
- [prependOnceListener](sockets.SpecializedWebSocket.md#prependoncelistener)
- [rawListeners](sockets.SpecializedWebSocket.md#rawlisteners)
- [removeAllListeners](sockets.SpecializedWebSocket.md#removealllisteners)
- [removeEventListener](sockets.SpecializedWebSocket.md#removeeventlistener)
- [removeListener](sockets.SpecializedWebSocket.md#removelistener)
- [resume](sockets.SpecializedWebSocket.md#resume)
- [send](sockets.SpecializedWebSocket.md#send)
- [serializeValue](sockets.SpecializedWebSocket.md#serializevalue)
- [setMaxListeners](sockets.SpecializedWebSocket.md#setmaxlisteners)
- [terminate](sockets.SpecializedWebSocket.md#terminate)
- [addAbortListener](sockets.SpecializedWebSocket.md#addabortlistener)
- [getEventListeners](sockets.SpecializedWebSocket.md#geteventlisteners)
- [getMaxListeners](sockets.SpecializedWebSocket.md#getmaxlisteners-1)
- [listenerCount](sockets.SpecializedWebSocket.md#listenercount-1)
- [on](sockets.SpecializedWebSocket.md#on-1)
- [once](sockets.SpecializedWebSocket.md#once-1)
- [setMaxListeners](sockets.SpecializedWebSocket.md#setmaxlisteners-1)

## Constructors

### constructor

• **new SpecializedWebSocket**(`address`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `options?` | `ClientOptions` |

#### Overrides

WebSocket.constructor

#### Defined in

[src/sockets.ts:4](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/sockets.ts#L4)

## Properties

### CLOSED

• `Readonly` **CLOSED**: ``3``

The connection is closed.

#### Inherited from

WebSocket.CLOSED

#### Defined in

node_modules/@types/ws/index.d.ts:70

___

### CLOSING

• `Readonly` **CLOSING**: ``2``

The connection is in the process of closing.

#### Inherited from

WebSocket.CLOSING

#### Defined in

node_modules/@types/ws/index.d.ts:68

___

### CONNECTING

• `Readonly` **CONNECTING**: ``0``

The connection is not yet open.

#### Inherited from

WebSocket.CONNECTING

#### Defined in

node_modules/@types/ws/index.d.ts:64

___

### OPEN

• `Readonly` **OPEN**: ``1``

The connection is open and ready to communicate.

#### Inherited from

WebSocket.OPEN

#### Defined in

node_modules/@types/ws/index.d.ts:66

___

### binaryType

• **binaryType**: ``"nodebuffer"`` \| ``"arraybuffer"`` \| ``"fragments"``

#### Inherited from

WebSocket.binaryType

#### Defined in

node_modules/@types/ws/index.d.ts:49

___

### bufferedAmount

• `Readonly` **bufferedAmount**: `number`

#### Inherited from

WebSocket.bufferedAmount

#### Defined in

node_modules/@types/ws/index.d.ts:50

___

### extensions

• `Readonly` **extensions**: `string`

#### Inherited from

WebSocket.extensions

#### Defined in

node_modules/@types/ws/index.d.ts:51

___

### isPaused

• `Readonly` **isPaused**: `boolean`

Indicates whether the websocket is paused

#### Inherited from

WebSocket.isPaused

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

WebSocket.onclose

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

WebSocket.onerror

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

WebSocket.onmessage

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

WebSocket.onopen

#### Defined in

node_modules/@types/ws/index.d.ts:72

___

### protocol

• `Readonly` **protocol**: `string`

#### Inherited from

WebSocket.protocol

#### Defined in

node_modules/@types/ws/index.d.ts:54

___

### readyState

• `Readonly` **readyState**: ``0`` \| ``1`` \| ``2`` \| ``3``

The current state of the connection

#### Inherited from

WebSocket.readyState

#### Defined in

node_modules/@types/ws/index.d.ts:56

___

### url

• `Readonly` **url**: `string`

#### Inherited from

WebSocket.url

#### Defined in

node_modules/@types/ws/index.d.ts:61

___

### CLOSED

▪ `Static` `Readonly` **CLOSED**: ``3``

The connection is closed.

#### Inherited from

WebSocket.CLOSED

#### Defined in

node_modules/@types/ws/index.d.ts:47

___

### CLOSING

▪ `Static` `Readonly` **CLOSING**: ``2``

The connection is in the process of closing.

#### Inherited from

WebSocket.CLOSING

#### Defined in

node_modules/@types/ws/index.d.ts:45

___

### CONNECTING

▪ `Static` `Readonly` **CONNECTING**: ``0``

The connection is not yet open.

#### Inherited from

WebSocket.CONNECTING

#### Defined in

node_modules/@types/ws/index.d.ts:41

___

### OPEN

▪ `Static` `Readonly` **OPEN**: ``1``

The connection is open and ready to communicate.

#### Inherited from

WebSocket.OPEN

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

WebSocket.captureRejectionSymbol

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

WebSocket.captureRejections

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

WebSocket.defaultMaxListeners

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

WebSocket.errorMonitor

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

WebSocket.[captureRejectionSymbol]

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

WebSocket.addEventListener

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

WebSocket.addEventListener

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

WebSocket.addEventListener

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

WebSocket.addEventListener

#### Defined in

node_modules/@types/ws/index.d.ts:130

___

### addListener

▸ **addListener**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`code`: `number`, `reason`: `Buffer`) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.addListener

#### Defined in

node_modules/@types/ws/index.d.ts:178

▸ **addListener**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.addListener

#### Defined in

node_modules/@types/ws/index.d.ts:179

▸ **addListener**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`request`: `IncomingMessage`) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.addListener

#### Defined in

node_modules/@types/ws/index.d.ts:180

▸ **addListener**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | (`data`: `RawData`, `isBinary`: `boolean`) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.addListener

#### Defined in

node_modules/@types/ws/index.d.ts:181

▸ **addListener**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"open"`` |
| `listener` | () => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.addListener

#### Defined in

node_modules/@types/ws/index.d.ts:182

▸ **addListener**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ping"`` \| ``"pong"`` |
| `listener` | (`data`: `Buffer`) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.addListener

#### Defined in

node_modules/@types/ws/index.d.ts:183

▸ **addListener**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unexpected-response"`` |
| `listener` | (`request`: `ClientRequest`, `response`: `IncomingMessage`) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.addListener

#### Defined in

node_modules/@types/ws/index.d.ts:184

▸ **addListener**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.addListener

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

WebSocket.close

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

WebSocket.emit

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

WebSocket.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:835

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](sockets.SpecializedWebSocket.md#defaultmaxlisteners).

#### Returns

`number`

**`Since`**

v1.0.0

#### Inherited from

WebSocket.getMaxListeners

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

WebSocket.listenerCount

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

WebSocket.listeners

#### Defined in

node_modules/@types/node/events.d.ts:700

___

### off

▸ **off**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`this`: `WebSocket`, `code`: `number`, `reason`: `Buffer`) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.off

#### Defined in

node_modules/@types/ws/index.d.ts:166

▸ **off**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`this`: `WebSocket`, `err`: `Error`) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.off

#### Defined in

node_modules/@types/ws/index.d.ts:167

▸ **off**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`this`: `WebSocket`, `request`: `IncomingMessage`) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.off

#### Defined in

node_modules/@types/ws/index.d.ts:168

▸ **off**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | (`this`: `WebSocket`, `data`: `RawData`, `isBinary`: `boolean`) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.off

#### Defined in

node_modules/@types/ws/index.d.ts:169

▸ **off**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"open"`` |
| `listener` | (`this`: `WebSocket`) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.off

#### Defined in

node_modules/@types/ws/index.d.ts:170

▸ **off**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ping"`` \| ``"pong"`` |
| `listener` | (`this`: `WebSocket`, `data`: `Buffer`) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.off

#### Defined in

node_modules/@types/ws/index.d.ts:171

▸ **off**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unexpected-response"`` |
| `listener` | (`this`: `WebSocket`, `request`: `ClientRequest`, `response`: `IncomingMessage`) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.off

#### Defined in

node_modules/@types/ws/index.d.ts:172

▸ **off**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (`this`: `WebSocket`, ...`args`: `any`[]) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.off

#### Defined in

node_modules/@types/ws/index.d.ts:176

___

### on

▸ **on**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`this`: `WebSocket`, `code`: `number`, `reason`: `Buffer`) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.on

#### Defined in

node_modules/@types/ws/index.d.ts:142

▸ **on**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`this`: `WebSocket`, `err`: `Error`) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.on

#### Defined in

node_modules/@types/ws/index.d.ts:143

▸ **on**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`this`: `WebSocket`, `request`: `IncomingMessage`) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.on

#### Defined in

node_modules/@types/ws/index.d.ts:144

▸ **on**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | (`this`: `WebSocket`, `data`: `RawData`, `isBinary`: `boolean`) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.on

#### Defined in

node_modules/@types/ws/index.d.ts:145

▸ **on**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"open"`` |
| `listener` | (`this`: `WebSocket`) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.on

#### Defined in

node_modules/@types/ws/index.d.ts:146

▸ **on**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ping"`` \| ``"pong"`` |
| `listener` | (`this`: `WebSocket`, `data`: `Buffer`) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.on

#### Defined in

node_modules/@types/ws/index.d.ts:147

▸ **on**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unexpected-response"`` |
| `listener` | (`this`: `WebSocket`, `request`: `ClientRequest`, `response`: `IncomingMessage`) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.on

#### Defined in

node_modules/@types/ws/index.d.ts:148

▸ **on**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (`this`: `WebSocket`, ...`args`: `any`[]) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.on

#### Defined in

node_modules/@types/ws/index.d.ts:152

___

### once

▸ **once**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`this`: `WebSocket`, `code`: `number`, `reason`: `Buffer`) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.once

#### Defined in

node_modules/@types/ws/index.d.ts:154

▸ **once**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`this`: `WebSocket`, `err`: `Error`) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.once

#### Defined in

node_modules/@types/ws/index.d.ts:155

▸ **once**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`this`: `WebSocket`, `request`: `IncomingMessage`) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.once

#### Defined in

node_modules/@types/ws/index.d.ts:156

▸ **once**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | (`this`: `WebSocket`, `data`: `RawData`, `isBinary`: `boolean`) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.once

#### Defined in

node_modules/@types/ws/index.d.ts:157

▸ **once**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"open"`` |
| `listener` | (`this`: `WebSocket`) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.once

#### Defined in

node_modules/@types/ws/index.d.ts:158

▸ **once**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ping"`` \| ``"pong"`` |
| `listener` | (`this`: `WebSocket`, `data`: `Buffer`) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.once

#### Defined in

node_modules/@types/ws/index.d.ts:159

▸ **once**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unexpected-response"`` |
| `listener` | (`this`: `WebSocket`, `request`: `ClientRequest`, `response`: `IncomingMessage`) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.once

#### Defined in

node_modules/@types/ws/index.d.ts:160

▸ **once**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (`this`: `WebSocket`, ...`args`: `any`[]) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.once

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

WebSocket.pause

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

WebSocket.ping

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

WebSocket.pong

#### Defined in

node_modules/@types/ws/index.d.ts:87

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

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

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

**`Since`**

v6.0.0

#### Inherited from

WebSocket.prependListener

#### Defined in

node_modules/@types/node/events.d.ts:799

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

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

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

**`Since`**

v6.0.0

#### Inherited from

WebSocket.prependOnceListener

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

WebSocket.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:731

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

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

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

**`Since`**

v0.1.26

#### Inherited from

WebSocket.removeAllListeners

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

WebSocket.removeEventListener

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

WebSocket.removeEventListener

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

WebSocket.removeEventListener

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

WebSocket.removeEventListener

#### Defined in

node_modules/@types/ws/index.d.ts:139

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | (`code`: `number`, `reason`: `Buffer`) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.removeListener

#### Defined in

node_modules/@types/ws/index.d.ts:190

▸ **removeListener**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.removeListener

#### Defined in

node_modules/@types/ws/index.d.ts:191

▸ **removeListener**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`request`: `IncomingMessage`) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.removeListener

#### Defined in

node_modules/@types/ws/index.d.ts:192

▸ **removeListener**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"message"`` |
| `listener` | (`data`: `RawData`, `isBinary`: `boolean`) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.removeListener

#### Defined in

node_modules/@types/ws/index.d.ts:193

▸ **removeListener**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"open"`` |
| `listener` | () => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.removeListener

#### Defined in

node_modules/@types/ws/index.d.ts:194

▸ **removeListener**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ping"`` \| ``"pong"`` |
| `listener` | (`data`: `Buffer`) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.removeListener

#### Defined in

node_modules/@types/ws/index.d.ts:195

▸ **removeListener**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unexpected-response"`` |
| `listener` | (`request`: `ClientRequest`, `response`: `IncomingMessage`) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.removeListener

#### Defined in

node_modules/@types/ws/index.d.ts:196

▸ **removeListener**(`event`, `listener`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

#### Inherited from

WebSocket.removeListener

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

WebSocket.resume

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

#### Overrides

WebSocket.send

#### Defined in

[src/sockets.ts:8](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/sockets.ts#L8)

___

### serializeValue

▸ `Private` **serializeValue**(`value`): `string` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`string` \| `number`

#### Defined in

[src/sockets.ts:17](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/sockets.ts#L17)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

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

[`SpecializedWebSocket`](sockets.SpecializedWebSocket.md)

**`Since`**

v0.3.5

#### Inherited from

WebSocket.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:681

___

### terminate

▸ **terminate**(): `void`

#### Returns

`void`

#### Inherited from

WebSocket.terminate

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

WebSocket.addAbortListener

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

WebSocket.getEventListeners

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

WebSocket.getMaxListeners

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

WebSocket.listenerCount

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

WebSocket.on

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

WebSocket.once

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

WebSocket.once

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

WebSocket.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:352
