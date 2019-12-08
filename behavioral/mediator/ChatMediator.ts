import { Mediator } from './Mediator';
import { User } from './User';

export class ChatMediator implements Mediator {
  constructor(private users: User[] = []) {
    this.users.forEach(x => x.setMediator(this));
  }

  send(sender: User, event: 'message' | 'poke', payload: string): void {
    switch (event) {
      case 'message':
        // message will be sent to everyone except sender
        this.broadCast(sender, payload);
        break;
      case 'poke':
        // only target user will be poked
        const targetUser = this.users.find(x => x.name === payload);
        if (!targetUser) {
          console.error(`${payload} not found`);
          return;
        }

        targetUser.receivePoke(sender);
        break;
    }
  }

  add(user: User): void {
    this.users.push(user);
  }

  // send message to all users except sender
  private broadCast(sender: User, message: string) {
    this.users
      .filter(user => user !== sender)
      .forEach(x => x.receiveMessage(sender, message));
  }
}
