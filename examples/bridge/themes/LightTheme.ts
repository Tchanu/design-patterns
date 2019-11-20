import { Theme } from './Theme';

export class LightTheme implements Theme {
  getBackground(): string {
    return 'Light Background';
  }
}
