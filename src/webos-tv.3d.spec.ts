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

  describe('is3DEnabled', () => {
    it('returns the status flag coming from the 3D status request', async () => {
      const is3DEnabledPromise = tv.is3DEnabled();
      await expect(server.nextMessage).resolves.toEqual({
        id: '2',
        type: 'request',
        uri: 'ssap://com.webos.service.tv.display/get3DStatus',
        payload: {},
      });
      server.send({
        id: '2',
        type: 'response',
        payload: { returnValue: true, status3D: { status: true } },
      });
      await expect(is3DEnabledPromise).resolves.toEqual(true);
    });
  });

  [
    {
      method: 'enable3D',
      tvMethod: 'set3DOn',
      expected: true,
    },
    {
      method: 'disable3D',
      tvMethod: 'set3DOff',
      expected: false,
    },
  ].forEach(({ method, tvMethod, expected }) => {
    it('sends the correct request and resolves with the new TV mute status', async () => {
      const methodPromise = (tv as any)[method]();
      await expect(server.nextMessage).resolves.toEqual({
        id: '2',
        type: 'request',
        uri: `ssap://com.webos.service.tv.display/${tvMethod}`,
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
        uri: 'ssap://com.webos.service.tv.display/get3DStatus',
        payload: {},
      });
      server.send({
        id: '3',
        type: 'response',
        payload: { returnValue: true, status3D: { status: expected } },
      });
      await expect(methodPromise).resolves.toEqual(expected);
    });
  });

  describe('toggle3D', () => {
    [true, false].forEach((status) => {
      it(`${status ? 'disables' : 'enables'} the 3D if the current status is ${
        status ? 'enabled' : 'disabled'
      }`, async () => {
        const expected = !status;
        const toggle3DPromise = tv.toggle3D();
        await expect(server.nextMessage).resolves.toEqual({
          id: '2',
          type: 'request',
          uri: 'ssap://com.webos.service.tv.display/get3DStatus',
          payload: {},
        });
        server.send({
          id: '2',
          type: 'response',
          payload: { returnValue: true, status3D: { status } },
        });
        await expect(server.nextMessage).resolves.toEqual({
          id: '3',
          type: 'request',
          uri: `ssap://com.webos.service.tv.display/${
            status ? 'set3DOff' : 'set3DOn'
          }`,
          payload: {},
        });
        server.send({
          id: '3',
          type: 'response',
          payload: { returnValue: true },
        });
        await expect(server.nextMessage).resolves.toEqual({
          id: '4',
          type: 'request',
          uri: 'ssap://com.webos.service.tv.display/get3DStatus',
          payload: {},
        });
        server.send({
          id: '4',
          type: 'response',
          payload: { returnValue: true, status3D: { status: expected } },
        });
        await expect(toggle3DPromise).resolves.toEqual(expected);
      });
    });
  });
});
