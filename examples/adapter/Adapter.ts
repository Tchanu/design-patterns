import { TypeB, TypeC } from './Client';

// Type B adapter for Pixel
export class TypeBAdapter implements TypeC {
  constructor(protected usb: TypeB) {
  }

  // Pixel calls fastCharge and Type B's slowCharge will be invoked respectively
  fastCharge(): void {
    this.usb.slowCharge();
  }
}
