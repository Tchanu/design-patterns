import { Sheep } from './Sheep';

const billy = new Sheep('Billy');

// create clone
const dolly = billy.clone();
// give poor Dolly a real name
dolly.name = 'Dolly';

// if Billy`s name changed too then is not a clone obviously
if (billy.name === dolly.name) {
  console.log("it's not a clone :(");
} else {
  console.log('Dolly is a clone');
}
