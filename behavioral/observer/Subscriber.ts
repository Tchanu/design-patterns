import { Observer } from './Observer';

// business logic goes into concrete Observer and `update` is handled as needed
export class Subscriber implements Observer<string> {
  constructor(private name: string) {
  }

  update(msg: string): void {
    console.log(`Hello ${this.name}, ${msg}`);
  }
}
