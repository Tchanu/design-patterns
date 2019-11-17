import { Button, Input, UIFactory } from './UIFactory';

export class IOSButton implements Button {
  constructor(private name: string) {
  }

  render(): void {
    console.log(`IOS Button: ${this.name}`);
  }
}

export class IOSInput implements Input {
  constructor(private name: string) {
  }

  render(): void {
    console.log(`IOS input: ${this.name}`);
  }
}

export class IOSUIFactory implements UIFactory {
  button(name: string): Button {
    return new IOSButton(name);
  }

  input(name: string): Input {
    return new IOSInput(name);
  }
}
