import { CharacterBuilder } from './CharacterBuilder';
import { Character } from './Character';

export class VillagerBuilder implements CharacterBuilder {
  private character: Character = new Character();

  constructor() {
    this.character = new Character();
  }

  build(): Character {
    if (!this.character.name || !this.character.family) {
      throw new Error('No character can be created without name and family!');
    }
    return this.character;
  }

  setArmor(armor: string): never {
    throw new Error("Villager can't carry any armor");
  }

  setHead(hairType: string, hairColor: string): this {
    this.character.hairType = hairType;
    this.character.hairColor = hairColor;
    return this;
  }

  setIdentity(name: string, family: string) {
    this.character.name = name;
    this.character.family = family;
    return this;
  }

  setWeapon(weapon: string): never {
    throw new Error("Villager don't know how to fight");
  }
}
