// concrete component
import { Coffee } from './Coffee';

export class SimpleCoffee implements Coffee {
  getCost(): number {
    return 5;
  }

  getDescription(): string {
    return 'Simple Coffee';
  }
}
