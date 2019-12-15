import { Observer } from './Observer';

// Publisher defines set of methods to manage observers
export interface Publisher<T> {
  subscribe(observer: Observer<T>): void;

  unSubscribe(observer: Observer<T>): void;

  notify(): void;
}
