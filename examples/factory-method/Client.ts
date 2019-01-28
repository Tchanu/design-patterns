import {Toy} from './Product'
import {createToy} from './Factory';

// create car
const car: Toy = createToy('car');
console.log(car.build()); // building car

// create helicopter
const helicopter: Toy = createToy('helicopter');
console.log(helicopter.build()); // building helicopter