import { describe, it, expect, afterEach } from '@jest/globals';
import WS from 'jest-websocket-mock';
import { TV } from './webos-tv';

describe('TV > Channel-related methods', () => {
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

  [
    'channelUp' as const,
    'channelDown' as const,
    'openChannel' as const,
  ].forEach((method) => {
    describe(method, () => {
      it('resolves with the new channel if everything goes fine', async () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const methodPromise = (tv[method] as any)();
        await expect(server.nextMessage).resolves.toEqual({
          id: '2',
          type: 'request',
          uri: `ssap://tv/${method}`,
          payload: {},
        });
        server.send({
          id: '2',
          type: 'response',
          payload: { returnValue: true },
        });
        await expect(server.nextMessage).resolves.toEqual({
          id: '3',
          type: 'request',
          uri: 'ssap://tv/getCurrentChannel',
          payload: {},
        });
        server.send({
          id: '3',
          type: 'response',
          payload: { returnValue: true, channelId: 'test' },
        });
        await expect(methodPromise).resolves.toEqual({ channelId: 'test' });
      });

      it('throws an error if something goes wrong', async () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const methodPromise = (tv[method] as any)();
        await expect(server.nextMessage).resolves.toEqual({
          id: '2',
          type: 'request',
          uri: `ssap://tv/${method}`,
          payload: {},
        });
        server.send({
          id: '2',
          type: 'response',
          payload: { returnValue: false },
        });
        await expect(methodPromise).rejects.toThrow();
      });
    });
  });

  describe('openChannelByNumber', () => {
    it('resolves with the new channel if everything goes fine', async () => {
      const openChannelByNumberPromise = tv.openChannelByNumber(2);
      await expect(server.nextMessage).resolves.toEqual({
        id: '2',
        type: 'request',
        uri: 'ssap://tv/getChannelList',
        payload: {},
      });
      server.send({
        id: '2',
        type: 'response',
        payload: {
          returnValue: true,
          channelList: [
            { channelId: 'id-1', channelNumber: '1' },
            { channelId: 'id-2', channelNumber: '2' },
            { channelId: 'id-3', channelNumber: '3' },
          ],
        },
      });
      await expect(server.nextMessage).resolves.toEqual({
        id: '3',
        type: 'request',
        uri: 'ssap://tv/openChannel',
        payload: { channelId: 'id-2' },
      });
      server.send({
        id: '3',
        type: 'response',
        payload: { returnValue: true },
      });
      await expect(server.nextMessage).resolves.toEqual({
        id: '4',
        type: 'request',
        uri: 'ssap://tv/getCurrentChannel',
        payload: {},
      });
      server.send({
        id: '4',
        type: 'response',
        payload: { returnValue: true, channelId: 'test' },
      });
      await expect(openChannelByNumberPromise).resolves.toEqual({
        channelId: 'test',
      });
    });

    it('throws an error if the specified channel cannot by found', async () => {
      const openChannelByNumberPromise = tv.openChannelByNumber(4);
      await expect(server.nextMessage).resolves.toEqual({
        id: '2',
        type: 'request',
        uri: 'ssap://tv/getChannelList',
        payload: {},
      });
      server.send({
        id: '2',
        type: 'response',
        payload: {
          returnValue: true,
          channelList: [
            { channelId: 'id-1', channelNumber: '1' },
            { channelId: 'id-2', channelNumber: '2' },
            { channelId: 'id-3', channelNumber: '3' },
          ],
        },
      });
      await expect(openChannelByNumberPromise).rejects.toThrowError(
        new Error('invalid channel number'),
      );
    });
  });

  describe('openChannelByName', () => {
    it('resolves with the new channel if everything goes fine', async () => {
      const openChannelByNamePromise = tv.openChannelByName('Channel 2');
      await expect(server.nextMessage).resolves.toEqual({
        id: '2',
        type: 'request',
        uri: 'ssap://tv/getChannelList',
        payload: {},
      });
      server.send({
        id: '2',
        type: 'response',
        payload: {
          returnValue: true,
          channelList: [
            { channelId: 'id-1', channelName: 'Channel 1' },
            { channelId: 'id-2', channelName: 'Channel 2' },
            { channelId: 'id-3', channelName: 'Channel 3' },
          ],
        },
      });
      await expect(server.nextMessage).resolves.toEqual({
        id: '3',
        type: 'request',
        uri: 'ssap://tv/openChannel',
        payload: { channelId: 'id-2' },
      });
      server.send({
        id: '3',
        type: 'response',
        payload: { returnValue: true },
      });
      await expect(server.nextMessage).resolves.toEqual({
        id: '4',
        type: 'request',
        uri: 'ssap://tv/getCurrentChannel',
        payload: {},
      });
      server.send({
        id: '4',
        type: 'response',
        payload: { returnValue: true, channelId: 'test' },
      });
      await expect(openChannelByNamePromise).resolves.toEqual({
        channelId: 'test',
      });
    });

    it('throws an error if the specified channel cannot by found', async () => {
      const openChannelByNamePromise = tv.openChannelByName('Channel 4');
      await expect(server.nextMessage).resolves.toEqual({
        id: '2',
        type: 'request',
        uri: 'ssap://tv/getChannelList',
        payload: {},
      });
      server.send({
        id: '2',
        type: 'response',
        payload: {
          returnValue: true,
          channelList: [
            { channelId: 'id-1', channelName: 'Channel 1' },
            { channelId: 'id-2', channelName: 'Channel 2' },
            { channelId: 'id-3', channelName: 'Channel 3' },
          ],
        },
      });
      await expect(openChannelByNamePromise).rejects.toThrowError(
        new Error('invalid channel name'),
      );
    });
  });
});
