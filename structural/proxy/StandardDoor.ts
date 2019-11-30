import { Door } from './Door';

export class StandardDoor implements Door {
  open(): void {
    console.log('opening the door');
  }

  close(): void {
    console.log('closing the door');
  }
}
