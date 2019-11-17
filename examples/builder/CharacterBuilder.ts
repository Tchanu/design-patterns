export interface CharacterBuilder {
  setIdentity(name: string, family: string);

  setHead(hairType: string, hairColor: string);

  setArmor(armor: string);

  setWeapon(weapon: string);
}
