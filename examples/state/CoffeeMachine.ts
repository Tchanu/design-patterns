import { State } from './State';

export class CoffeeMachine {
  constructor(private state: State) {
  }

  setState(state: State) {
    this.state = state;
    this.state.setContext(this);
  }

  addCoffee(): void {
    this.state.addCoffee();
  }

  addWater(): void {
    this.state.addWater();
  }

  turnOn(): void {
    this.state.turnOn();
  }

  turnOff(): void {
    this.state.turnOff();
  }
}
