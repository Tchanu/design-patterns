/**
 * Basically Flyweight patter is caching(reusing immutable objects) to save some space
 **/
import { Zoo } from './Zoo';
import { AnimalFlyWeightFactory } from './AnimalFlyWeightFactory';

// we are developing a game Zoo Simulator
// in this game user is faced to take care of many animals
// we don't want to waste RAM so we gonna cache all the unique animals
const zoo = new Zoo();

// animal flyweight factory will cache unique animals to save extra space
const animalFactory = new AnimalFlyWeightFactory();

const rubberDuck = animalFactory.create('duck', 'mammals'); // new object created
const doge = animalFactory.create('dog', 'mammals'); // new object created
const duckyDuck = animalFactory.create('duck', 'mammals'); // using existing object
const cate = animalFactory.create('cat', 'mammals'); // new object created
const flyingDuck = animalFactory.create('duck', 'mammals'); // using existing object

// add animals into zoo with their unique cage
zoo.addAnimal(rubberDuck, 1);
zoo.addAnimal(doge, 2);
zoo.addAnimal(duckyDuck, 3);
zoo.addAnimal(cate, 4);
zoo.addAnimal(flyingDuck, 5);

// instead of creating new instance we reused cached duck object
if (rubberDuck === duckyDuck && duckyDuck === flyingDuck) {
  console.log('they are the same');
}

zoo.render();
/**
 duck is in cage N1
 dog is in cage N2
 duck is in cage N3
 cat is in cage N4
 duck is in cage N5
 */
