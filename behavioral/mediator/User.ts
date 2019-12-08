import { Mediator } from './Mediator';

// component(aka colleague)
export class User {
  protected mediator: Mediator;

  constructor(public name: string) {
  }

  setMediator(mediator: Mediator) {
    this.mediator = mediator;
  }

  sendMessage(message: string): void {
    this.mediator.send(this, 'message', message);
  }

  receiveMessage(user: User, message: string) {
    console.log(`${this.name} received \`${message}\` from ${user.name}`);
  }

  poke(targetUserName: string): void {
    this.mediator.send(this, 'poke', targetUserName);
  }

  receivePoke(sender: User): void {
    console.log(`${this.name}, ${sender.name} poked you!`);
  }

}
