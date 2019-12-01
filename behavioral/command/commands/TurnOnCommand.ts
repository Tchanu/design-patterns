import { Bulb } from '../Bulb';
import { Command } from '../Command';

export class TurnOnCommand implements Command {
  constructor(
    protected bulb: Bulb,
  ) {
  }

  execute() {
    this.bulb.turnOn();
  }

  undo() {
    this.bulb.turnOff();
  }

  redo() {
    this.execute();
  }
}
