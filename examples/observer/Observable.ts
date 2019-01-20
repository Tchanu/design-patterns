import {Observer} from './Observer';

// base publisher
interface Observable {
    observers: Observer[];

    subscribe(observer: Observer): void;

    unSubscribe(observer: Observer): void;

    notify(): void;
}

// concrete observable
export class Zoo implements Observable {
    observers: Observer[] = [];
    private message: string;

    subscribe(observer: Observer): void {
        this.observers.push(observer);
    }

    unSubscribe(observer: Observer): void {
        this.observers = this.observers.filter(__observer => __observer != observer);
    }

    notify(): void {
        this.observers.forEach((observer) => observer.update());
    }

    pushMessage(message: string) {
        this.message = message;
    }

    getMessage() {
        return this.message;
    }
}
