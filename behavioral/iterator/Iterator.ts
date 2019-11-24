export interface Iterator<T> {
  next(): T;

  hasNext(): boolean;
}
