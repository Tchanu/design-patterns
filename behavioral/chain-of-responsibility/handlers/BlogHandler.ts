import { Handler } from '../Handler';

export class BlogHandler extends Handler {
  handle(path: string): string {
    console.log('-> BlogHandler');
    if (path === '/blog') {
      return 'This is a blog';
    }

    return this.handler.handle(path);
  }
}
