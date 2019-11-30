/*
  Protection Proxy
 */

import { ClientType, FaceLockDoor } from './FaceLockDoor';
import { StandardDoor } from './StandardDoor';

const standardDoor = new StandardDoor();

// anyone can open and close standard door
standardDoor.open(); // opening the door
standardDoor.close(); // closing the door

// so let's add some security. create secure door where only employees are authorized
const secureDoor = new FaceLockDoor(standardDoor, ClientType.Employee);

// try to open without face scan
secureDoor.open(); // access denied for Unknown

// try to open door as guest
secureDoor.fakeFaceScan(ClientType.Guest);
secureDoor.open(); // access denied for Guest

// try to open door as employee
secureDoor.fakeFaceScan(ClientType.Employee);
secureDoor.open(); // opening the door
secureDoor.close(); // closing the door
// try to reopen door
secureDoor.open(); // access denied for Unknown
// after closing the door face scan is required to reopen
