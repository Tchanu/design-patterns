import { Theme } from '../themes';
import { Page } from './Page';

export class InfoPage implements Page {
  constructor(private theme: Theme) {
  }

  render(): void {
    console.log(`This is the info page with ${this.theme.getBackground()}`);
  }
}
