import { State } from './State';
import { BoilingState } from './BoilingState';

export class InitialState extends State {
  addCoffee(): void {
    console.log('Coffee has been added');
  }

  addWater(): void {
    console.log('Water has been added');
  }

  turnOff(): void {
    console.log('It\'s already turned off');
  }

  turnOn(): void {
    console.log('Started boiling');
    this.context.setState(new BoilingState());
  }

}
