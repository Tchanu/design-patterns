// base component
export interface Coffee {
  getCost(): number;

  getDescription(): string;
}

// concrete component
export class SimpleCoffee implements Coffee {
  getCost(): number {
    return 5;
  }

  getDescription(): string {
    return 'Simple Coffee';
  }
}
