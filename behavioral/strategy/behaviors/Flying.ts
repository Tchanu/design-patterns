export interface Flying {
  fly(): void;
}

export class FastFly implements Flying {
  fly(): void {
    console.log('fast fly');
  }
}

export class NoFly implements Flying {
  fly(): void {
    console.log('can\'t fly');
  }
}
