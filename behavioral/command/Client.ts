/*
  Remote execution command
 */
import { Bulb } from './Bulb';
import { RemoteControl } from './RemoteControl';
import { TurnOffCommand, TurnOnCommand } from './commands';

// create command receiver with commands
const bulb = new Bulb();
const turnOnBulb = new TurnOnCommand(bulb);
const turnOffBulb = new TurnOffCommand(bulb);

// create command sender
const remote = new RemoteControl();

// submit bulb commands
remote.submit(turnOnBulb); // Turning on...
remote.submit(turnOffBulb); // Turning off...
