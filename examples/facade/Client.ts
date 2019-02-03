import {HotDrinkMachine, MachineFacade} from "./Facade";

// initiate machine facade
const machineFacade = new MachineFacade(new HotDrinkMachine());

// simple interface to make drinks
machineFacade.makeEspresso(); // Boiling water,Adding sugar,Adding Espresso, Serving.
machineFacade.makeTea(); // Boiling water,Adding sugar,Adding tea, Serving.
