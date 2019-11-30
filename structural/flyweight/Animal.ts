export class Animal {
  constructor(private name: string, private type: string) {
  }

  getName(): string {
    return this.name;
  }

  getType(): string {
    return this.type;
  }
}
