import { Bulb } from './Receiver';

export interface Command {
  execute();

  undo();

  redo();
}

// Command
export class TurnOn implements Command {
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

export class TurnOff implements Command {
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
