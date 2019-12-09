import { Memento } from './Memento';

export abstract class Originator<T> {
  abstract restore(target: Memento<T>): void;
  abstract getSnapshot(): Memento<T>;
}
