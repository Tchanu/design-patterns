/*
  Scenario
  There was office with only one door to get inside. One day somebody stole notebook.
  Managers were arguing how to secure the office when one of them come up with a great idea,
  add face recognition system to the door. Of course, developers didn't approve that, but
  what else they've got to do?
 */

import { FaceLockDoor } from './Proxy';

// Simple Door, you know what it does
export interface Door {
  open(): void;

  close(): void;
}

// Office's unsecured door
export class OfficesDoor implements Door {
  open(): void {
    console.log('closing office\'s door');
  }

  close(): void {
    console.log('opening office\'s door');
  }
}

// use FaceLockDoor proxy for OfficesDoor to make it secured
const officesSecuredDoor = new FaceLockDoor(new OfficesDoor());

officesSecuredDoor.open('thiefsFace'); // access denied
officesSecuredDoor.open('dummyManagersFace'); // opening office's door
officesSecuredDoor.close(); // closing office's door
