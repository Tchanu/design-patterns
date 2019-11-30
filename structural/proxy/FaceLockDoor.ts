import { Door } from './Door';

export class FaceLockDoor implements Door {
  private currentClientType: ClientType = ClientType.Unknown;

  constructor(protected door: Door, private authorizedClientType: ClientType) {
  }

  fakeFaceScan(clientType: ClientType): void {
    this.currentClientType = clientType;
  }

  open(): void {
    if (!this.isAuthorized(this.currentClientType)) {
      console.error(`access denied for ${this.currentClientType}`);
      return;
    }

    this.door.open();
  }

  // everyone can close the door
  close(): void {
    this.door.close();
    // when door is closed current client should be reset
    this.currentClientType = ClientType.Unknown;
  }

  private isAuthorized(clientType: ClientType): boolean {
    return clientType === this.authorizedClientType;
  }
}

export enum ClientType {
  Employee = 'Employee',
  Guest = 'Guest',
  Unknown = 'Unknown',
}
