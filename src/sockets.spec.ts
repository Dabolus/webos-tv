import WS from 'jest-websocket-mock';
import { SpecializedWebSocket, PointerInputSocket } from './sockets';

describe('SpecializedWebSocket', () => {
  let server: WS;
  let socket: SpecializedWebSocket;

  beforeEach(async () => {
    server = new WS('ws://127.0.0.1:3000');
    socket = new SpecializedWebSocket('ws://127.0.0.1:3000');
    await server.connected;
  });
  afterEach(() => {
    WS.clean();
  });

  it('correctly serializes the messages on send', async () => {
    socket.send('test', {
      str: 'value',
      num: 1,
      boolTrue: true,
      boolFalse: false,
    });
    await expect(server.nextMessage).resolves.toMatchInlineSnapshot(`
      "type: test
      str: value
      num: 1
      boolTrue: 1
      boolFalse: 0"
    `);
  });
});

describe('PointerInputSocket', () => {
  let server: WS;
  let socket: PointerInputSocket;

  beforeEach(async () => {
    server = new WS('ws://127.0.0.1:3000');
    socket = new PointerInputSocket('ws://127.0.0.1:3000');
    await server.connected;
  });
  afterEach(() => {
    WS.clean();
  });

  it('correctly sends a click message when click is called', async () => {
    socket.click();
    await expect(server.nextMessage).resolves.toMatchInlineSnapshot(
      `"type: click"`,
    );
  });

  it('sends the correct button when press is called', async () => {
    socket.press('Enter');
    await expect(server.nextMessage).resolves.toMatchInlineSnapshot(`
      "type: button
      name: Enter"
    `);
  });

  it('sends the correct information when move is called', async () => {
    socket.move(20, 30, false);
    await expect(server.nextMessage).resolves.toMatchInlineSnapshot(`
      "type: move
      dx: 20
      dy: 30
      down: 0"
    `);
    socket.move(0, 0, true);
    await expect(server.nextMessage).resolves.toMatchInlineSnapshot(`
      "type: move
      dx: 0
      dy: 0
      down: 1"
    `);
  });

  it('sends the correct information when scroll is called', async () => {
    socket.scroll(20, 30);
    await expect(server.nextMessage).resolves.toMatchInlineSnapshot(`
      "type: scroll
      dx: 20
      dy: 30"
    `);
  });
});
