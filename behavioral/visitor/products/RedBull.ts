import {Product, ProductType} from "./Product";
import {Visitor} from "../Visitor";

export class RedBull implements Product {
  readonly type: ProductType = ProductType.RedBull;

  constructor(public price: number) {
  }

  accept(visitor: Visitor<Product>): number {
    return visitor.visit(this);
  }

}