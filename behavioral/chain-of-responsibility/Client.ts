import { BlogHandler, BlogPostHandler, RootHandler, NotFoundHandler } from './handlers';

// let's build simple API request handler
// client makes request and proper resource should be served
const blog = new BlogHandler();
const blogPost = new BlogPostHandler();
const root = new RootHandler();
const notFound = new NotFoundHandler();

// create chain starting from root
root
  .setNext(blog) // add blog
  .setNext(blogPost) // blog post is a child
  .setNext(notFound); // if it's neither home, blog or blog post return not found page;

console.log(root.handle('/'));
/*
 RootHandler
 This is a home
 */

console.log(root.handle('/blog'));
/*
  RootHandler
  -> BlogHandler
  This is a blog
 */

console.log(root.handle('/blog/post'));
/*
 RootHandler
 -> BlogHandler
 -> BlogPostHandler
 This is a blog post
 */

console.log(root.handle('/about'));
/*
 RootHandler
 -> BlogHandler
 -> BlogPostHandler
 -> NotFoundHandler
 404 Not Found
 */
