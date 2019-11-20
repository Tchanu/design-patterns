import { Theme } from '../themes';
import { Page } from './Page';

export class HomePage implements Page {
  constructor(private theme: Theme) {
  }

  render(): void {
    console.log(`This is the home page with ${this.theme.getBackground()}`);
  }
}
