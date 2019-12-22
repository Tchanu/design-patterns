import {Product, ProductType} from "./Product";
import {Visitor} from "../Visitor";

export class MineralWater implements Product {
  readonly type: ProductType = ProductType.MineralWater;

  constructor(public price: number) {
  }

  accept(visitor: Visitor<Product>): number {
    return visitor.visit(this);
  }

}