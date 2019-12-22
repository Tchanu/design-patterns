
export interface Visitor<T> {
  visit(element: T): number;
}

