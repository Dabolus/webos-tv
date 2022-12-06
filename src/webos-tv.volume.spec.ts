import { describe, it, expect, afterEach } from '@jest/globals';
import WS from 'jest-websocket-mock';
import { TV } from './webos-tv';

describe('TV > Volume-related methods', () => {
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

  describe('setVolume', () => {
    interface SetVolumeTestCase {
      value: number | 'max' | 'min';
      expected: number;
    }

    (
      [
        {
          value: 50,
          expected: 50,
        },
        {
          value: 120,
          expected: 100,
        },
        {
          value: -10,
          expected: 0,
        },
        {
          value: 'max',
          expected: 100,
        },
        {
          value: 'min',
          expected: 0,
        },
      ] as SetVolumeTestCase[]
    ).forEach(({ value, expected }) => {
      it(`sets the volume to ${expected} if the provided value is ${value}`, async () => {
        const setVolumePromise = tv.setVolume(value);
        await expect(server.nextMessage).resolves.toEqual({
          id: '2',
          type: 'request',
          uri: 'ssap://audio/setVolume',
          payload: { volume: expected },
        });
        server.send({
          id: '2',
          type: 'response',
          payload: { returnValue: true },
        });
        await expect(server.nextMessage).resolves.toEqual({
          id: '3',
          type: 'request',
          uri: 'ssap://audio/getVolume',
          payload: {},
        });
        server.send({
          id: '3',
          type: 'response',
          payload: { returnValue: true, volume: expected },
        });
        await expect(setVolumePromise).resolves.toEqual({ volume: expected });
      });
    });

    it('throws an error if something goes wrong', async () => {
      const expectedVolume = 50;
      const setVolumePromise = tv.setVolume(expectedVolume);
      await expect(server.nextMessage).resolves.toEqual({
        id: '2',
        type: 'request',
        uri: 'ssap://audio/setVolume',
        payload: { volume: expectedVolume },
      });
      server.send({
        id: '2',
        type: 'response',
        payload: { returnValue: false },
      });
      await expect(setVolumePromise).rejects.toThrow();
    });
  });

  ['increaseVolume', 'decreaseVolume'].forEach((method) => {
    describe(method, () => {
      it('resolves with the new volume if everything goes fine', async () => {
        const originalVolume = 50;
        const deltaVolume = 30;
        const expectedVolume =
          method === 'increaseVolume'
            ? originalVolume + deltaVolume
            : originalVolume - deltaVolume;
        const methodPromise = (tv as any)[method](deltaVolume);
        await expect(server.nextMessage).resolves.toEqual({
          id: '2',
          type: 'request',
          uri: 'ssap://audio/getVolume',
          payload: {},
        });
        server.send({
          id: '2',
          type: 'response',
          payload: { returnValue: true, volume: originalVolume },
        });
        await expect(server.nextMessage).resolves.toEqual({
          id: '3',
          type: 'request',
          uri: 'ssap://audio/setVolume',
          payload: {
            volume: expectedVolume,
          },
        });
        server.send({
          id: '3',
          type: 'response',
          payload: { returnValue: true },
        });
        await expect(server.nextMessage).resolves.toEqual({
          id: '4',
          type: 'request',
          uri: 'ssap://audio/getVolume',
          payload: {},
        });
        server.send({
          id: '4',
          type: 'response',
          payload: { returnValue: true, volume: expectedVolume },
        });
        await expect(methodPromise).resolves.toEqual({
          volume: expectedVolume,
        });
      });

      it('throws an error if something goes wrong', async () => {
        const methodPromise = (tv as any)[method]();
        await expect(server.nextMessage).resolves.toEqual({
          id: '2',
          type: 'request',
          uri: 'ssap://audio/getVolume',
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

  ['volumeUp', 'volumeDown'].forEach((method) => {
    describe(method, () => {
      it('resolves with the new volume if everything goes fine', async () => {
        const methodPromise = (tv as any)[method]();
        await expect(server.nextMessage).resolves.toEqual({
          id: '2',
          type: 'request',
          uri: `ssap://audio/${method}`,
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
          uri: 'ssap://audio/getVolume',
          payload: {},
        });
        server.send({
          id: '3',
          type: 'response',
          payload: { returnValue: true, volume: 50 },
        });
        await expect(methodPromise).resolves.toEqual({ volume: 50 });
      });

      it('throws an error if something goes wrong', async () => {
        const methodPromise = (tv as any)[method]();
        await expect(server.nextMessage).resolves.toEqual({
          id: '2',
          type: 'request',
          uri: `ssap://audio/${method}`,
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
});
