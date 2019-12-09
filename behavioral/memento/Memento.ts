// base Memento interface provides methods for retrieving state
export interface Memento<T> {
  getState(): T;
}
