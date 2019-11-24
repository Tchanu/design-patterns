import { State } from './State';
import { InitialState } from './InitialState';

export class BoilingState extends State {
  addCoffee(): void {
    console.log('You can\'t add more coffee when boiling');
  }

  addWater(): void {
    console.log('You can\'t add more water when boiling');
  }

  turnOff(): void {
    console.log('Turning off');
    this.context.setState(new InitialState());
  }

  turnOn(): void {
    console.log('Already turned on');
  }
}
