export abstract class Handler {
  protected handler: Handler;
  public setNext(handler: Handler): Handler {
    this.handler = handler;
    return handler;
  }
  abstract handle(path: string): string;
}
