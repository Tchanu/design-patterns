import {Command} from "./Command";

export class RemoteControl{
    submit(command: Command) {
        command.execute();
    }
}