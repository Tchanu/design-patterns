import { CoffeeMachine } from './CoffeeMachine';

export abstract class State {
  protected context: CoffeeMachine;

  setContext(context: CoffeeMachine): void {
    this.context = context;
  }

  abstract addCoffee(): void;

  abstract addWater(): void;

  abstract turnOn(): void;

  abstract turnOff(): void;
}
