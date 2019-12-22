import {Product, ProductType} from "./Product";
import {Visitor} from "../Visitor";

export class JackDaniels implements Product {
  readonly type: ProductType = ProductType.JackDaniels;

  constructor(public price: number) {
  }

  accept(visitor: Visitor<Product>): number {
    return visitor.visit(this);
  }
}