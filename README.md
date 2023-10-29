# webOS TV

A promise-based package to control webOS based TVs with JavaScript.

## Installation

```bash
npm install webos-tv
# or
yarn add webos-tv
```

If you want to use the library in a Node.js environment, make
sure to install also the optional peer dependencies:

```bash
npm install ws
# or
yarn add ws
# plus the optional native peer dependencies for ws,
# if you want to improve performance
# see: https://npmjs.com/package/ws#user-content-opt-in-for-performance
npm install --save-optional bufferutil utf-8-validate
# or
yarn add --optional bufferutil utf-8-validate
```

On browser, the native Fetch and WebSocket APIs are used,
so nothing else is needed.

## Usage

### Simple usage

```js
import { TV } from 'webos-tv';

const ip = '<your TV IP address>';

const tv = new TV(ip);
// On first authentication, no token is required.
// The `authenticate` function will return a token
// once the pairing is accepted on the TV.
const token = await tv.authenticate();
// The received token should be stored somewhere so
// that it can be used in subsequent connections.
// e.g. await tv.authenticate(token);
console.log('Software information: ', await tv.getCurrentSWInformation());
await tv.showNotification('Hello, World!');
await tv.disconnect();
```

### Pointer and keyboard control

The TV class allows opening specialized input sockets that allow
to have a dedicated channel to control the TV pointer and keyboard.

```js
import { TV } from 'webos-tv';

const ip = '<your TV IP address>';

const tv = new TV(ip);
await tv.authenticate();

// This method will return a PointerInputSocket instance
const pointerSocket = await tv.getPointerInputSocket();
pointerSocket.move(20, 30);
pointerSocket.click();
pointerSocket.scroll(0, 10);
```

### Wake-on-LAN

If your TV supports Wake-on-LAN, you can use the `wake` function
to turn it on:

```js
import { TV } from 'webos-tv';

const ip = '<your TV IP address>';
const mac = '<your TV MAC address>';
const password = '<your TV SecureOn password, if required>';

// `turnOn` is a static method of the TV class, so it must be called
// before setting up the connection to the TV (obviously).
await TV.turnOn(ip, mac, password);

// If everything went well, the TV should be turned on now,
// so you should be able to connect to it normally (see above).
// Note that after being turned on, the TV might require some
// seconds before being ready to accept WebSocket connections.
```
