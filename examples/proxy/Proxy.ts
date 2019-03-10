import { Door } from './Client';

// Door lock with face recognition
export class FaceLockDoor {
  constructor(protected door: Door) {
  }

  // wrap Door's open method to make it accessible for only dummy managers
  open(face: string): void {
    if (this.isAuthorized(face)) {
      this.door.open();
    } else {
      console.error('access denied');
    }
  }

  isAuthorized(face: string): boolean {
    return face === 'dummyManagersFace';
  }

  // everyone can close the door
  close(): void {
    this.door.close();
  }
}
