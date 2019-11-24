import { Zoo } from './Observable';
import { Animal } from './Observer';

// zoo is publisher/observable
const zoo$ = new Zoo();

// create animals to observe
const duck = new Animal(zoo$, 'duck');
const human = new Animal(zoo$, 'human');
const cat = new Animal(zoo$, 'cat');

// subscribe to observable
zoo$.subscribe(duck);
zoo$.subscribe(human);
zoo$.subscribe(cat);

// push and notify observers
zoo$.pushMessage('I am from Earth');
zoo$.notify();
// duck: I am from Earth
// human: I am from Earth
// cat: I am from Earth

// unsubscribe human from observable
zoo$.unSubscribe(human);
zoo$.pushMessage('I can\'t talk');
zoo$.notify();
// duck: I can't talk
// cat: I can't talk
