import {Toy, CarToy, HelicopterToy} from "./Product";

// base factory
export function createToy(type: string): Toy | null {
    switch (type) {
        case 'car':
            return new CarToy();
        case 'helicopterToy':
            return new HelicopterToy();
        default:
            return null;
    }
}
