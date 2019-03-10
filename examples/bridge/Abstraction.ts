import { Theme } from './Implementor';

export interface Page {
  render(): void;
}

export class HomePage implements Page {
  constructor(private theme: Theme) {
  }

  render(): void {
    console.log(`This is the home page with ${this.theme.getBackground()}`);
  }
}

export class InfoPage implements Page {
  constructor(private theme: Theme) {
  }

  render(): void {
    console.log(`This is the info page with ${this.theme.getBackground()}`);
  }
}
