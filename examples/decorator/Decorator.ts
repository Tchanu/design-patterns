import { Coffee } from './Component';

// concrete decorator
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

// concrete decorator 2
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
