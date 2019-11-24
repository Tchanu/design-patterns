import { Coffee } from './Coffee';

export class MilkCoffee implements Coffee {
  constructor(protected coffee: Coffee) {
  }

  getCost(): number {
    return this.coffee.getCost() + 2;
  }

  getDescription(): string {
    return `${this.coffee.getDescription()}, milk`;
  }
}
