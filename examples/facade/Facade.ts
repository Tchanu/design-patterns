export class HotDrinkMachine{
    boilWater() {
        console.log('Boiling water,');
    }
    addSugar() {
        console.log('Adding sugar,');
    }
    addEspresso() {
        console.log('Adding Espresso,');
    }
    addTea() {
        console.log('Adding tea,');
    }
    serve() {
        console.log('Serving.');
    }

}

// base facade
export class MachineFacade {
    constructor(protected hotDrinkMachine: HotDrinkMachine){
    }

    makeEspresso() {
        this.hotDrinkMachine.boilWater();
        this.hotDrinkMachine.addEspresso();
        this.hotDrinkMachine.addSugar();
        this.hotDrinkMachine.serve();
    }

    makeTea() {
        this.hotDrinkMachine.boilWater();
        this.hotDrinkMachine.addTea();
        this.hotDrinkMachine.addSugar();
        this.hotDrinkMachine.serve();
    }
}