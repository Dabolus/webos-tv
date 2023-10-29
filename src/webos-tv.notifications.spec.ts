import { describe, it, expect, afterEach } from '@jest/globals';
import WS from 'jest-websocket-mock';
import { Blob } from 'node:buffer';
import { TV } from './webos-tv';

globalThis.fetch = jest.fn();

describe('TV > Notifications-related methods', () => {
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

  describe('showNotification', () => {
    it('creates a toast notification request based on the provided parameters', async () => {
      const showNotificationPromise = tv.showNotification('Hello World!');
      await expect(server.nextMessage).resolves.toEqual({
        id: '2',
        type: 'request',
        uri: 'ssap://system.notifications/createToast',
        payload: { message: 'Hello World!' },
      });
      server.send({
        id: '2',
        type: 'response',
        payload: { returnValue: true, toastId: '123' },
      });
      await expect(showNotificationPromise).resolves.toBe('123');
    });

    it('correctly encodes the icon if provided with one', async () => {
      const icon = 'icon';
      const blobFn = jest
        .fn()
        .mockResolvedValue(new Blob([icon], { type: 'image/png' }));
      (globalThis.fetch as jest.Mock).mockResolvedValue({
        blob: blobFn,
      });
      tv.showNotification('Hello World!', 'file:///icon.png');
      await expect(server.nextMessage).resolves.toEqual({
        id: '2',
        type: 'request',
        uri: 'ssap://system.notifications/createToast',
        payload: {
          message: 'Hello World!',
          iconData: Buffer.from(icon).toString('base64'),
          iconExtension: 'png',
        },
      });
      expect(globalThis.fetch).toHaveBeenCalledWith('file:///icon.png', {
        mode: 'no-cors',
      });
      expect(blobFn).toHaveBeenCalled();
    });
  });
});
