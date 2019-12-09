import { Memento } from './Memento';

// TextSnapshot is simplified version for storing Originators state
export class TextSnapshot implements Memento<string> {
  constructor(private state: string) {
  }

  getState(): string {
    return this.state;
  }
}
