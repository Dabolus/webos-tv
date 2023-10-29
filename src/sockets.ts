import WebSocket from 'ws';

export class SpecializedWebSocket extends WebSocket {
  constructor(address: string, options?: WebSocket.ClientOptions) {
    super(address, options);
  }

  public send(type: string, payload: unknown = {}): void {
    super.send(
      Object.entries(payload).reduce(
        (str, [key, val]) => `${str}\n${key}: ${this.serializeValue(val)}`,
        `type: ${type}`,
      ),
    );
  }

  private serializeValue(value: unknown): string | number {
    if (typeof value === 'boolean') {
      return value ? 1 : 0;
    }
    return `${value}`;
  }
}

export class PointerInputSocket extends SpecializedWebSocket {
  public click(): void {
    this.send('click');
  }

  public press(button: string): void {
    this.send('button', { name: button });
  }

  public move(dx: number, dy: number, pressing?: boolean): void {
    this.send('move', { dx, dy, down: pressing ? 1 : 0 });
  }

  public scroll(dx: number, dy: number): void {
    this.send('scroll', { dx, dy });
  }
}

export class RemoteKeyboardSocket extends SpecializedWebSocket {}
