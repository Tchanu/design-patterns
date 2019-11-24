import { UIFactory } from './UIFactory';
import { AndroidUIFactory } from './AndroidUIFactory';
import { IOSUIFactory } from './IOSUIFactory';

class NativeApp {
  constructor(private uiFactory: UIFactory) {
  }

  render(): void {
    // simple view with two inputs and one button
    this.uiFactory.input('email').render();
    this.uiFactory.input('password').render();
    this.uiFactory.button('login').render();
  }
}

const androidApp = new NativeApp(new AndroidUIFactory());
const iosApp = new NativeApp(new IOSUIFactory());

androidApp.render();
/**
 Android input: email
 Android input: password
 Android Button: login
 */

iosApp.render();
/**
 IOS input: email
 IOS input: password
 IOS Button: login
 */
