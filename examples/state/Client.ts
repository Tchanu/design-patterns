import { CoffeeMachine } from './CoffeeMachine';
import { InitialState } from './InitialState';

// create coffee machine instance with initial state
const coffeeMachine = new CoffeeMachine(new InitialState());

coffeeMachine.addCoffee(); // Coffee has been added
coffeeMachine.addWater(); // Water has been added
coffeeMachine.turnOn(); // Started boiling
// state changed to BoilingState

// let's try something stupid
coffeeMachine.addCoffee(); // You can't add more coffee when boiling
coffeeMachine.turnOn(); // Already turned on

// finish
coffeeMachine.turnOff();
