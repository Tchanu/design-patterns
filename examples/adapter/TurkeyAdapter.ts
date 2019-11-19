import { Turkey } from './Turkey';
import { Duck } from './Duck';

export class TurkeyAdapter implements Duck {
  constructor(private turkey: Turkey) {
  }

  walk(): void {
    this.turkey.walk();
  }

  quack(): void {
    this.turkey.gobble();
  }
}
