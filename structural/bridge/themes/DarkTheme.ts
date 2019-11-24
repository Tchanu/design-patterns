import { Theme } from './Theme';

export class DarkTheme implements Theme {
  getBackground(): string {
    return 'Dark Background';
  }
}
