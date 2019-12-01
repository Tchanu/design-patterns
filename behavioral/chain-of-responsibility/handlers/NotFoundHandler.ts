import { Handler } from '../Handler';

export class NotFoundHandler extends Handler {
  handle(path: string): string {
    console.log(' -> NotFoundHandler');
    return '404 Not Found';
  }

  setNext(handler: Handler): never {
    throw new Error('NotFoundHandler should be last in the chain');
  }
}
