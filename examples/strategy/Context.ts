import Flying from './behaviour/Flying';
import Talking from './behaviour/Talking';

// in this example our context is Animal
export class Animal {
    // first we define behaviour/strategies
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
