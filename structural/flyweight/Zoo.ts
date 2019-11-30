import { Animal } from './Animal';
import { Cage } from './Cage';

export class Zoo {
  private cages: Cage[] = [];

  addAnimal(animal: Animal, cageId: number): void {
    this.cages.push({animal, cageId});
  }

  render(): void {
    for (const cage of this.cages) {
      console.log(`${cage.animal.getName()} is in cage N${cage.cageId}`);
    }
  }
}
