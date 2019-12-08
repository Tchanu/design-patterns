import { User } from './User';

// mediator interface declares method used by components
export interface Mediator {
  add(user: User): void;

  send(sender: User, event: 'message' | 'poke', payload?: string): void;
}
