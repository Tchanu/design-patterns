import { HotDrinkMachine } from './HotDrinkMachine';

// facade for hot drink machine provides simplified methods for client
export class MachineFacade {
  constructor(protected hotDrinkMachine: HotDrinkMachine) {
  }

  makeEspresso(): void {
    this.hotDrinkMachine.boilWater();
    this.hotDrinkMachine.addEspresso();
    this.hotDrinkMachine.addSugar();
    this.hotDrinkMachine.serve();
  }

  makeTea(): void {
    this.hotDrinkMachine.boilWater();
    this.hotDrinkMachine.addTea();
    this.hotDrinkMachine.addSugar();
    this.hotDrinkMachine.serve();
  }
}
