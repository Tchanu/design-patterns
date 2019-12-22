import {Visitor} from "../Visitor";

// Product is element that defines accept method for visitor
// accept is used to let visitor to access element`s instance
export interface Product {
  type: ProductType;
  price: number;

  accept(visitor: Visitor<Product>): number;
}

export enum ProductType {
  JackDaniels = 'Jack Daniel\'s',
  MineralWater = 'Mineral Water',
  RedBull = 'Red Bull',
}
