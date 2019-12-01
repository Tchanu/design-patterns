import { Handler } from '../Handler';

export class BlogPostHandler extends Handler {
  handle(path: string): string {
    console.log('-> BlogPostHandler');
    if (path === '/blog/post') {
      return 'This is a blog post';
    }

    return this.handler.handle(path);
  }
}
