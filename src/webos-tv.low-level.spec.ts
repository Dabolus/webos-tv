import { describe, it, expect, afterEach } from '@jest/globals';
import WS from 'jest-websocket-mock';
import * as undici from 'undici';
import { Blob } from 'node:buffer';
import { PointerInputSocket, RemoteKeyboardSocket } from './sockets';
import { TV } from './webos-tv';

describe('TV > Low-level methods', () => {
  let server: WS;
  let tv: TV;

  beforeEach(async () => {
    server = new WS('ws://localhost:3000', { jsonProtocol: true });
    tv = new TV('ws://localhost:3000');
    await server.connected;
    tv.authenticate();
    await server.nextMessage;
  });
  afterEach(() => {
    WS.clean();
  });

  describe('send', () => {
    it('sends the message to the TV and resolves with the TV response', async () => {
      const sendPromise = tv.send('test', 'ssap://test', { ping: 'ping' });
      await expect(server.nextMessage).resolves.toEqual({
        id: '2',
        type: 'test',
        uri: 'ssap://test',
        payload: { ping: 'ping' },
      });
      server.send({
        id: '2',
        type: 'response',
        payload: { returnValue: true, pong: 'pong' },
      });
      await expect(sendPromise).resolves.toEqual({
        returnValue: true,
        pong: 'pong',
      });
    });
  });

  describe('request', () => {
    it('sends the request to the TV and resolves with the properly formatted response', async () => {
      const requestPromise = tv.request('ssap://test', { ping: 'ping' });
      await expect(server.nextMessage).resolves.toEqual({
        id: '2',
        type: 'request',
        uri: 'ssap://test',
        payload: { ping: 'ping' },
      });
      server.send({
        id: '2',
        type: 'response',
        payload: { returnValue: true, pong: 'pong' },
      });
      await expect(requestPromise).resolves.toEqual({
        pong: 'pong',
      });
    });

    it('automatically prepends ssap:// to the URL if no protocol is specified', async () => {
      tv.request('test', { ping: 'ping' });
      await expect(server.nextMessage).resolves.toEqual({
        id: '2',
        type: 'request',
        uri: 'ssap://test',
        payload: { ping: 'ping' },
      });
    });

    it('throws an error if TV response return value is falsy', async () => {
      const requestPromise = tv.request('ssap://test', { ping: 'ping' });
      await expect(server.nextMessage).resolves.toEqual({
        id: '2',
        type: 'request',
        uri: 'ssap://test',
        payload: { ping: 'ping' },
      });
      server.send({
        id: '2',
        type: 'response',
        payload: { returnValue: false },
      });
      await expect(requestPromise).rejects.toThrowError(
        new Error('request failed'),
      );
    });

    it('throws with the TV-provided error message if available', async () => {
      const requestPromise = tv.request('ssap://test', { ping: 'ping' });
      await expect(server.nextMessage).resolves.toEqual({
        id: '2',
        type: 'request',
        uri: 'ssap://test',
        payload: { ping: 'ping' },
      });
      server.send({
        id: '2',
        type: 'response',
        payload: { returnValue: false, errorText: 'invalid request' },
      });
      await expect(requestPromise).rejects.toThrowError(
        new Error('invalid request'),
      );
    });
  });

  describe('subscribe', () => {
    it('sends a subscribe request to the TV', async () => {
      const subscribePromise = tv.subscribe('ssap://test', { ping: 'ping' });
      await expect(server.nextMessage).resolves.toEqual({
        id: '2',
        type: 'subscribe',
        uri: 'ssap://test',
        payload: { ping: 'ping' },
      });
      server.send({
        id: '2',
        type: 'response',
        payload: { returnValue: true, pong: 'pong' },
      });
      await expect(subscribePromise).resolves.toEqual({
        returnValue: true,
        pong: 'pong',
      });
    });
  });

  describe('getSocket', () => {
    it('opens a specialized socket with the TV and returns the appropriate class', async () => {
      const specializedUrl = 'ws://localhost:3001/';
      new WS(specializedUrl);
      const subscribePromise = tv.getSocket('ssap://test', PointerInputSocket);
      await expect(server.nextMessage).resolves.toEqual({
        id: '2',
        type: 'request',
        uri: 'ssap://test',
        payload: {},
      });
      server.send({
        id: '2',
        type: 'response',
        payload: { returnValue: true, socketPath: specializedUrl },
      });
      const specializedSocket = await subscribePromise;
      expect(specializedSocket).toBeInstanceOf(PointerInputSocket);
      expect(specializedSocket.url).toBe(specializedUrl);
    });

    it('reuses an open connection if available', async () => {
      const specializedUrl = 'ws://localhost:3001/';
      const specializedServer = new WS(specializedUrl);
      // Start with no clients
      expect(specializedServer.server.clients().length).toBe(0);
      const subscribePromise1 = tv.getSocket('ssap://test', PointerInputSocket);
      await expect(server.nextMessage).resolves.toEqual({
        id: '2',
        type: 'request',
        uri: 'ssap://test',
        payload: {},
      });
      server.send({
        id: '2',
        type: 'response',
        payload: { returnValue: true, socketPath: specializedUrl },
      });
      const specializedSocket1 = await subscribePromise1;
      // Expect to have one client
      expect(specializedServer.server.clients().length).toBe(1);
      const specializedSocket2 = await tv.getSocket(
        'ssap://test',
        PointerInputSocket,
      );
      // Expect no new messages to consume on the server
      expect(server.messagesToConsume.pendingItems.length).toBe(0);
      // Expect to still have only one client
      expect(specializedServer.server.clients().length).toBe(1);
      // Expect the two clients to be exactly the same
      expect(specializedSocket1).toBe(specializedSocket2);
    });
  });

  describe('getPointerInputSocket', () => {
    it('opens a pointer input socket with the TV and returns the appropriate class', async () => {
      const specializedUrl = 'ws://localhost:3001/';
      new WS(specializedUrl);
      const subscribePromise = tv.getPointerInputSocket();
      await expect(server.nextMessage).resolves.toEqual({
        id: '2',
        type: 'request',
        uri: 'ssap://com.webos.service.networkinput/getPointerInputSocket',
        payload: {},
      });
      server.send({
        id: '2',
        type: 'response',
        payload: { returnValue: true, socketPath: specializedUrl },
      });
      const specializedSocket = await subscribePromise;
      expect(specializedSocket).toBeInstanceOf(PointerInputSocket);
      expect(specializedSocket.url).toBe(specializedUrl);
    });
  });

  describe('getRemoteKeyboardSocket', () => {
    it('opens a pointer input socket with the TV and returns the appropriate class', async () => {
      const specializedUrl = 'ws://localhost:3001/';
      new WS(specializedUrl);
      const subscribePromise = tv.getRemoteKeyboardSocket();
      await expect(server.nextMessage).resolves.toEqual({
        id: '2',
        type: 'request',
        uri: 'ssap://com.webos.service.ime/registerRemoteKeyboard',
        payload: {},
      });
      server.send({
        id: '2',
        type: 'response',
        payload: { returnValue: true, socketPath: specializedUrl },
      });
      const specializedSocket = await subscribePromise;
      expect(specializedSocket).toBeInstanceOf(RemoteKeyboardSocket);
      expect(specializedSocket.url).toBe(specializedUrl);
    });
  });

  describe('handleMessage', () => {
    it('resolves the promise of the correct pending message', async () => {
      const id = 'test-id-1';
      tv['callbacks'][id] = { resolve: jest.fn(), reject: jest.fn() };
      const message = JSON.stringify({
        id,
        payload: { returnValue: true },
      });
      tv['handleMessage'](message);
      expect(tv['callbacks'][id].resolve).toHaveBeenCalledWith({
        returnValue: true,
      });
      expect(tv['callbacks'][id].reject).not.toHaveBeenCalled();
      delete tv['callbacks'][id];
    });

    it('throws an error if an unexpected message is received from the TV', async () => {
      const id = 'test-id-2';
      const message = JSON.stringify({ id });
      expect(() => tv['handleMessage'](message)).toThrowError(
        new Error('unexpected message received from the TV'),
      );
    });

    it('ignores pairing response messages', async () => {
      const message = JSON.stringify({
        type: 'response',
        payload: { returnValue: true, pairingType: 'PROMPT' },
      });
      expect(() => tv['handleMessage'](message)).not.toThrow();
    });
  });

  describe('loadIcon', () => {
    it('loads an icon from the TV', async () => {
      const icon = 'icon';
      const blobFn = jest
        .fn()
        .mockResolvedValue(new Blob([icon], { type: 'image/png' }));
      (undici.fetch as jest.Mock).mockResolvedValue({
        blob: blobFn,
      });
      await expect(tv['loadIcon']('file:///icon.png')).resolves.toEqual({
        iconData: Buffer.from(icon).toString('base64'),
        iconExtension: 'png',
      });
      expect(undici.fetch).toHaveBeenCalledWith('file:///icon.png', {
        mode: 'no-cors',
      });
      expect(blobFn).toHaveBeenCalled();
    });
  });
});
