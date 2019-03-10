export interface Theme {
  getBackground(): string;
}

export class DarkTheme implements Theme {
  getBackground(): string {
    return 'Dark Background';
  }
}

export class LighTheme implements Theme {
  getBackground(): string {
    return 'Light Background';
  }
}
