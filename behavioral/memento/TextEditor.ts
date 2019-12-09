import { Originator } from './Originator';
import { Memento } from './Memento';
import { TextSnapshot } from './TextSnapshot';

export class TextEditor extends Originator<string> {
  constructor(private state: string = '') {
    super();
  }

  write(data: string) {
    this.state += data;
  }

  print(): void {
    console.log(this.state);
  }

  // creates text snapshot for originator
  getSnapshot(): Memento<string> {
    return new TextSnapshot(this.state);
  }

  // stores state snapshot
  restore(target: Memento<string>): void {
    this.state = target.getState();
  }
}
