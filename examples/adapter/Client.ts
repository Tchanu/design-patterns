import { Duck } from './Duck';
import { TurkeyAdapter } from './TurkeyAdapter';
import { Turkey } from './Turkey';

const duck = new Duck();
const turkey = new Turkey();

// wrap our turkey to behave like a duck
const duckAdapter = new TurkeyAdapter(turkey);

// is `duck` duck?
duck.quack(); // quack!
duck.walk(); // walk
// definitely!

// is `duckAdapter` duck?
duckAdapter.quack(); // gobble!
duckAdapter.walk(); // walk
// it can quack and walk so it must be duck!
