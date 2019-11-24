import { MachineFacade } from './MachineFacade';
import { HotDrinkMachine } from './HotDrinkMachine';

// create facade for very smart customer
const userFriendlyFacade = new MachineFacade(new HotDrinkMachine());

userFriendlyFacade.makeEspresso(); // Boiling water,Adding sugar,Adding Espresso, Serving.
userFriendlyFacade.makeTea(); // Boiling water,Adding sugar,Adding tea, Serving.
