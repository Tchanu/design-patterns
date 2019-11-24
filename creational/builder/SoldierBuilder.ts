import { CharacterBuilder } from './CharacterBuilder';
import { Character } from './Character';

export class SoldierBuilder implements CharacterBuilder {
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

  setArmor(armor: string): this {
    this.character.armor = armor;
    return this;
  }

  setHead(hairType: string, hairColor: string): never {
    throw new Error('Soldier head is hidden by armor');
  }

  setIdentity(name: string, family: string) {
    this.character.name = name;
    this.character.family = family;
    return this;
  }

  setWeapon(weapon: string): this {
    this.character.weapon = weapon;
    return this;
  }
}
