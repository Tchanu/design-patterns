import { Bulb } from '../Bulb';
import { Command } from '../Command';

export class TurnOffCommand implements Command {
  constructor(
    protected bulb: Bulb,
  ) {
  }

  execute() {
    this.bulb.turnOff();
  }

  undo() {
    this.bulb.turnOn();
  }

  redo() {
    this.execute();
  }
}
