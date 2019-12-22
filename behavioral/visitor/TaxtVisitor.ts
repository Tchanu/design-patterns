import {Visitor} from "./Visitor";
import {Product, ProductType} from "./products/Product";

export class TaxVisitor implements Visitor<Product> {

  visit(product: Product): number {
    // as long typescript doesn't allow typical method overloading
    // we can utilise product type to handle products separately
    switch (product.type) {
      case ProductType.JackDaniels:
        return product.price + 9;
      case ProductType.MineralWater:
        return product.price + 0.2;
      case ProductType.RedBull:
        return product.price + 1;
    }
  }
}
