import { VillagerBuilder } from './VillagerBuilder';
import { SoldierBuilder } from './SoldierBuilder';

const villager = new VillagerBuilder()
  .setIdentity('Aisha', 'Peace')
  .setHead('Straight', 'Dark Brown')
  .build();

const soldier = new SoldierBuilder()
  .setIdentity('Ryan', 'Eagles')
  .setArmor('heavy')
  .setWeapon('knife')
  .build();

console.log(villager);
/**
 Character {
  name: 'Aisha',
  family: 'Peace',
  hairType: 'Straight',
  hairColor: 'Dark Brown',
  armor: undefined,
  weapon: undefined
 }
 */

console.log(soldier);
/**
 Character {
  name: 'Ryan',
  family: 'Eagles',
  hairType: undefined,
  hairColor: undefined,
  armor: 'heavy',
  weapon: 'knife'
 }
 */
