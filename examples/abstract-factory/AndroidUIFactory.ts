import { Button, Input, UIFactory } from './UIFactory';

export class AndroidButton implements Button {
  constructor(private name: string) {
  }

  render(): void {
    console.log(`Android Button: ${this.name}`);
  }
}

export class AndroidInput implements Input {
  constructor(private name: string) {
  }

  render(): void {
    console.log(`Android input: ${this.name}`);
  }
}

export class AndroidUIFactory implements UIFactory {
  button(name: string): Button {
    return new AndroidButton(name);
  }

  input(name: string): Input {
    return new AndroidInput(name);
  }
}
