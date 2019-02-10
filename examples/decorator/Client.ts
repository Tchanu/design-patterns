import { MilkCoffee, VanillaCoffee } from './Decorator';
import { SimpleCoffee } from './Component';

// simple milk
const simpleCoffee = new SimpleCoffee();
console.log(simpleCoffee.getCost()); // 5
console.log(simpleCoffee.getDescription()); // Simple Coffee

// coffee with milk
const milkCoffee = new MilkCoffee(simpleCoffee);
console.log(milkCoffee.getCost()); // 7
console.log(milkCoffee.getDescription()); // Simple Coffee, milk

// coffee with vanilla
const vanillaCoffee = new VanillaCoffee(simpleCoffee);
console.log(vanillaCoffee.getCost()); // 6
console.log(vanillaCoffee.getDescription()); // Simple Coffee, vanilla

// coffee with milk and vanilla
const milkVanillaCoffee = new VanillaCoffee(milkCoffee);
console.log(milkVanillaCoffee.getCost()); // 8
console.log(milkVanillaCoffee.getDescription()); // Simple Coffee, milk, vanilla
