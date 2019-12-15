import { Observer } from './Observer';
import { Publisher } from './Publisher';

// concrete Publisher is responsible to store and send message to observers
export class Newspaper implements Publisher<string> {
  observers: Observer<string>[] = [];
  private message: string;

  subscribe(observer: Observer<string>): void {
    this.observers.push(observer);
  }

  unSubscribe(observer: Observer<string>): void {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(): void {
    this.observers.forEach(observer => observer.update(this.getMessage()));
  }

  pushMessage(message: string) {
    this.message = message;
  }

  getMessage(): string {
    return this.message;
  }
}
