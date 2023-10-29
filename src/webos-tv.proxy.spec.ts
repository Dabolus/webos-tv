import { describe, it, expect, afterEach } from '@jest/globals';
import WS from 'jest-websocket-mock';
import { TV } from './webos-tv';

describe('TV > Proxy methods', () => {
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

  interface ProxyMethodTestInput<
    T extends keyof TV = keyof TV,
    U extends Record<string, unknown> = Record<string, unknown>,
  > {
    methodName: T;
    uri: string;
    input?: {
      parameters?: Parameters<TV[T]>;
      payload?: Record<string, unknown>;
    };
    output?: {
      payload?: U;
      expectedField?: keyof U;
    };
  }

  const proxyMethodsTests: ProxyMethodTestInput[] = [
    {
      methodName: 'turnOff',
      uri: 'ssap://system/turnOff',
    },
    {
      methodName: 'getServiceList',
      uri: 'ssap://api/getServiceList',
      output: {
        payload: { services: ['service'] },
        expectedField: 'services',
      },
    },
    {
      methodName: 'getChannelList',
      uri: 'ssap://tv/getChannelList',
      output: {
        payload: { channelList: ['test'] },
      },
    },
    {
      methodName: 'getCurrentChannel',
      uri: 'ssap://tv/getCurrentChannel',
      output: {
        payload: { channelNumber: 1 },
      },
    },
    {
      methodName: 'getVolume',
      uri: 'ssap://audio/getVolume',
      output: {
        payload: { volume: 1 },
      },
    },
    {
      methodName: 'getAudioStatus',
      uri: 'ssap://audio/getStatus',
      output: {
        payload: { mute: false },
      },
    },
    {
      methodName: 'play',
      uri: 'ssap://media.controls/play',
    },
    {
      methodName: 'stop',
      uri: 'ssap://media.controls/stop',
    },
    {
      methodName: 'pause',
      uri: 'ssap://media.controls/pause',
    },
    {
      methodName: 'rewind',
      uri: 'ssap://media.controls/rewind',
    },
    {
      methodName: 'fastForward',
      uri: 'ssap://media.controls/fastForward',
    },
    {
      methodName: 'closeMediaViewer',
      uri: 'ssap://media.viewer/close',
    },
    {
      methodName: 'foregroundAppInfo',
      uri: 'ssap://com.webos.applicationManager/getForegroundAppInfo',
      output: {
        payload: { appId: 'test' },
      },
    },
    {
      methodName: 'appState',
      uri: 'ssap://system.launcher/getAppState',
      input: {
        parameters: ['testAppId', 'testSessionId'],
        payload: {
          id: 'testAppId',
          sessionId: 'testSessionId',
        },
      },
      output: {
        payload: {
          running: true,
          visible: false,
        },
      },
    },
    {
      methodName: 'getCurrentSWInformation',
      uri: 'ssap://com.webos.service.update/getCurrentSWInformation',
      output: {
        payload: {
          product_name: 'LGTV',
          model_name: 'Test Model',
        },
      },
    },
    {
      methodName: 'appList',
      uri: 'ssap://com.webos.applicationManager/listApps',
      output: {
        payload: { apps: [{ appId: 'test' }] },
        expectedField: 'apps',
      },
    },
    {
      methodName: 'launchPoints',
      uri: 'ssap://com.webos.applicationManager/listLaunchPoints',
      output: {
        payload: { launchPoints: [{ id: 'test' }] },
      },
    },
    {
      methodName: 'launchApp',
      uri: 'ssap://system.launcher/launch',
      input: {
        parameters: ['test'],
        payload: { id: 'test' },
      },
      output: {
        payload: { id: 'test', sessionId: 'testSession' },
      },
    },
    {
      methodName: 'closeApp',
      uri: 'ssap://system.launcher/close',
      input: {
        parameters: ['test'],
        payload: { id: 'test' },
      },
    },
    {
      methodName: 'openURL',
      uri: 'ssap://system.launcher/open',
      input: {
        parameters: ['test'],
        payload: { target: 'test' },
      },
      output: {
        payload: { id: 'test', sessionId: 'testSession' },
      },
    },
    {
      methodName: 'check3DStatus',
      uri: 'ssap://com.webos.service.tv.display/get3DStatus',
      output: {
        payload: { status3D: 'test' },
        expectedField: 'status3D',
      },
    },
    {
      methodName: 'writeText',
      uri: 'ssap://com.webos.service.ime/insertText',
      input: {
        parameters: ['text', true],
        payload: { text: 'text', replace: 1 },
      },
    },
    {
      methodName: 'writeText',
      uri: 'ssap://com.webos.service.ime/insertText',
      input: {
        parameters: ['text'],
        payload: { text: 'text', replace: 0 },
      },
    },
    {
      methodName: 'deleteText',
      uri: 'ssap://com.webos.service.ime/deleteCharacters',
      input: {
        parameters: [3],
        payload: { count: 3 },
      },
    },
    {
      methodName: 'sendEnter',
      uri: 'ssap://com.webos.service.ime/sendEnterKey',
    },
  ];

  proxyMethodsTests.forEach(
    ({
      methodName,
      uri,
      input: {
        parameters: inputParameters = [],
        payload: inputPayload = {},
      } = {},
      output: {
        payload: outputPayload = {},
        expectedField: outputExpectedField,
      } = {},
    }) => {
      describe(methodName, () => {
        it('resolves with the expected value if everything goes fine', async () => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const methodPromise = (tv[methodName] as any)(...inputParameters);
          await expect(server.nextMessage).resolves.toEqual({
            id: '2',
            type: 'request',
            uri,
            payload: inputPayload,
          });
          server.send({
            id: '2',
            type: 'response',
            payload: { returnValue: true, ...outputPayload },
          });
          await expect(methodPromise).resolves.toEqual(
            Object.keys(outputPayload).length === 0
              ? // Empty payload: we expect to receive undefined
                undefined
              : outputExpectedField
              ? // We provided an expected field: we expect to receive its value
                outputPayload[outputExpectedField]
              : // No field provided: we expect to receive the whole payload
                outputPayload,
          );
        });

        it('throws an error if something goes wrong', async () => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const methodPromise = (tv[methodName] as any)(...inputParameters);
          await expect(server.nextMessage).resolves.toEqual({
            id: '2',
            type: 'request',
            uri,
            payload: inputPayload,
          });
          server.send({
            id: '2',
            type: 'response',
            payload: { returnValue: false },
          });
          await expect(methodPromise).rejects.toThrow();
        });
      });
    },
  );
});
