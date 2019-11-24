import { Coffee } from './Coffee';
import { VanillaCoffee } from './VanillaCoffee';
import { MilkCoffee } from './MilkCoffe';
import { SimpleCoffee } from './SimpleCoffee';

// simple milk
const simpleCoffee: Coffee = new SimpleCoffee();
console.log(simpleCoffee.getCost()); // 5
console.log(simpleCoffee.getDescription()); // Simple Coffee

// decorate simple coffee (base) with milk coffee (decorator)
const milkCoffee: Coffee = new MilkCoffee(simpleCoffee);
console.log(milkCoffee.getCost()); // 7
console.log(milkCoffee.getDescription()); // Simple Coffee, milk

// decorate simple coffee (base) with vanilla coffee(decorator)
const vanillaCoffee: Coffee = new VanillaCoffee(simpleCoffee);
console.log(vanillaCoffee.getCost()); // 6
console.log(vanillaCoffee.getDescription()); // Simple Coffee, vanilla

// we can decorate milk coffee(decorator) with vanilla coffee(another decorator)
const milkVanillaCoffee: Coffee = new VanillaCoffee(milkCoffee);
console.log(milkVanillaCoffee.getCost()); // 8
console.log(milkVanillaCoffee.getDescription()); // Simple Coffee, milk, vanilla
