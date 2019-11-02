import { Iterator } from './Iterator';

export class ObjectIterator<T extends {}> implements Iterator<T> {
  private index: number = 0;
  private keys: string[] = [];

  constructor(private obj: T) {
    this.keys = Object.keys(obj);
  }

  hasNext(): boolean {
    return !this.isDone();
  }

  next(): T {
    if (this.isDone()) {
      throw new Error('Null reference exception');
    }

    return this.getValueByIndex(this.index++);
  }

  private isDone() {
    return this.index === this.keys.length;
  }

  private getValueByIndex(index: number): any {
    return this.obj[this.keys[index]];
  }
}
