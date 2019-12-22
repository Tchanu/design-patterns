import {TaxVisitor} from "./TaxtVisitor";
import {JackDaniels, MineralWater, RedBull} from "./products";

// create simple visitor for products(elements) to calculate price with tax
const taxVisitor = new TaxVisitor();

const jackDaniels = new JackDaniels(20);
const redBull = new RedBull(3);
const mineralWater = new MineralWater(1);

const jackDanielsPrice = jackDaniels.accept(taxVisitor);
const redBullPrice = redBull.accept(taxVisitor);
const mineralWaterPrice = mineralWater.accept(taxVisitor);

console.log(`$${jackDanielsPrice}`); // $29
console.log(`$${redBullPrice}`); // $4
console.log(`$${mineralWaterPrice}`); // $1.2
