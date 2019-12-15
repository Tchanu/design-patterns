import { FastFly, NoFly, NoTalk, SimpleTalk } from './behaviors';
import { Animal } from './Animal';

// duck can fly but can't talk
const duck = new Animal(new FastFly(), new NoTalk());
duck.doFly(); // fast fly
duck.doTalk(); // can't talk

// human can't fly but can talk
const human = new Animal(new NoFly(), new SimpleTalk());
human.doFly(); // can't fly
human.doTalk(); // simple talk

// cat can't fly and can't talk
const cat = new Animal(new NoFly(), new NoTalk());
cat.doFly(); // can't fly
cat.doTalk(); // can't talk
