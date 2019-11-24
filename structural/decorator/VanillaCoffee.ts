import { Coffee } from './Coffee';

export class VanillaCoffee implements Coffee {
  constructor(protected coffee: Coffee) {
  }

  getCost(): number {
    return this.coffee.getCost() + 1;
  }

  getDescription(): string {
    return `${this.coffee.getDescription()}, vanilla`;
  }
}
