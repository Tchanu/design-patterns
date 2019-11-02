import { ArrayIterator } from './ArrayIterator';
import { ObjectIterator } from './ObjectIterator';

const mammals: string[] = ['Dog', 'Cat', 'Horse'];
const fish = {
  goldFish: 'Goldfish',
  blueFish: 'Bluefish',
  carp: 'Carp',
};

const mammalsIterator = new ArrayIterator(mammals);
const fishIterator = new ObjectIterator(fish);

while (mammalsIterator.hasNext()) {
  console.log(mammalsIterator.next());
}
/*
  Dog
  Cat
  Horse
 */

while (fishIterator.hasNext()) {
  console.log(fishIterator.next());
}
/*
  Goldfish
  Bluefish
  Carp
 */
