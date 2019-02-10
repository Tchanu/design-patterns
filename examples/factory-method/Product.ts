// abstract product
export interface Toy {
  build(): void;
}

// concrete product
export class CarToy implements Toy {
  build(): string {
    return 'building car';
  }
}

// concrete product
export class HelicopterToy implements Toy {
  build(): string {
    return 'building helicopter';
  }
}
