import { Iterator } from './Iterator';

export class ArrayIterator<T> implements Iterator<T> {
  private index: number = 0;

  constructor(private array: T[]) {
  }

  next(): T {
    if (this.isDone()) {
      throw new Error('Null reference exception');
    }

    return this.array[this.index++];
  }

  hasNext(): boolean {
    return !this.isDone();
  }

  private isDone(): boolean {
    return this.index === this.array.length;
  }
}
