/*
  Scenario
  Lado drained his battery and lost his Type C charger.
  His friend Bazera has old Note 2 and borrowed old Type B usb charger
  which is of course incompatible with Pixel.
  Lado was still able to fully charge his phone and kept scrolling. How?
 */

import { TypeBAdapter } from './Adapter';

// Type C charger
export class TypeC {
  fastCharge(): void {
    console.log('charging fast');
  }
}

// Type B charger
export class TypeB {
  slowCharge(): void {
    console.log('charging slow');
  }
}

// Lado's phone
export class Pixel {
  charge(usb: TypeC) {
    usb.fastCharge();
  }
}

// Bazera's charger
const usbTypeB: TypeB = new TypeB();
// create adapter for pixel
const usbTypeBAdapter: TypeC = new TypeBAdapter(usbTypeB);

const ladosPhone: Pixel = new Pixel();
ladosPhone.charge(usbTypeBAdapter); // charging slow
