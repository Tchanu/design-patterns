import { Handler } from '../Handler';

export class RootHandler extends Handler {
  handle(path: string): string {
    console.log('RootHandler');
    if (path === '/') {
      return 'This is a root';
    }

    return this.handler.handle(path);
  }
}
