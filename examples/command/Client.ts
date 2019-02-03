import {Bulb} from "./Receiver";
import {TurnOff, TurnOn} from "./Command";
import {RemoteControl} from "./Invoker";

// concrete receiver
const bulb = new Bulb();

// concrete commands
const turnOnBulb = new TurnOn(bulb);
const turnOffBulb = new TurnOff(bulb);

// setup control
const remote = new RemoteControl();

// submit bulb commands
remote.submit(turnOnBulb); // Turning on...
remote.submit(turnOffBulb); // Turning off...
