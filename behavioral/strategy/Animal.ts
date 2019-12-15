import { Flying, Talking } from './behaviors';

// Animal is a context. It delegates work to strategy objects(behaviors)
export class Animal {
  // strategy objects
  private flying: Flying;
  private talking: Talking;

  // client sets behaviours at runtime
  constructor(flying: Flying, talking: Talking) {
    this.flying = flying;
    this.talking = talking;
  }

  doFly(): void {
    this.flying.fly();
  }

  doTalk(): void {
    this.talking.talk();
  }
}
