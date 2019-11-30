import { Animal } from './Animal';

/**
 * @description
 * Flyweight factory caches all animals and it decides whether create new object
 */
export class AnimalFlyWeightFactory {
  constructor(private uniqueAnimals: Animal[] = []) {
  }

  create(name: string, type: string): Animal {
    const cachedAnimal = this.findAnimal(name, type);

    // if same animal is already created return cached animal instead
    if (cachedAnimal != null) {
      console.log('using existing object');
      return cachedAnimal;
    }

    console.log('new object created');

    const animal = new Animal(name, type);
    this.uniqueAnimals.push(animal); // cache newly created animal for future
    return animal;
  }

  private findAnimal(name: string, type: string): Animal | null {
    return this.uniqueAnimals.find(a => a.getName() === name && a.getType() === type);
  }
}
