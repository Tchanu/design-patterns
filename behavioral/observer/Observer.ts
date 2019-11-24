import { Zoo } from './Observable';

// base observer
export interface Observer {
  update(): void;
}

// concrete observer
export class Animal implements Observer {
  constructor(
    private zoo: Zoo,
    private name: string,
  ) {
  }

  update() {
    console.log(`${this.name}: ${this.zoo.getMessage()}`);
  }
}
