
// Observer declares method which is invoked by Publisher when new data is emitted
export interface Observer<T> {
  update(data: T): void;
}
