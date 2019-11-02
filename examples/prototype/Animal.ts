import { Cloneable } from './Cloneable';

// we just extend Animal with Cloneable to clone our instance without prototype factory
// it's not a violation at all
export class Animal extends Cloneable {
  constructor(public name: string) {
    super();
  }
}
