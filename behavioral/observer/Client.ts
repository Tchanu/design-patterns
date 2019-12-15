import { Newspaper } from './Newspaper';
import { Subscriber } from './Subscriber';

// create simple publish/subscribe example with newspaper and subscribes

// create publishers and subscribers
const theTimes = new Newspaper();
const forbes = new Newspaper();

const jack = new Subscriber('Jack');
const olivia = new Subscriber('Olivia');
const harry = new Subscriber('Harry');
const amelia = new Subscriber('Amelia');

theTimes.subscribe(jack);
theTimes.subscribe(harry);
forbes.subscribe(olivia);
forbes.subscribe(harry);
forbes.subscribe(amelia);

// push message and notify all subscribed observers
theTimes.pushMessage('checkout our new website: www.thetimes.co.uk');
theTimes.notify();
/*
Hello Jack, checkout our new website: www.thetimes.co.uk
Hello Harry, checkout our new website: www.thetimes.co.uk
 */

forbes.pushMessage('new iPhone has been released!');
forbes.notify();
/*
Hello Olivia, new Iphone has been released!
Hello Harry, new Iphone has been released!
Hello Amelia, new Iphone has been released!
 */

// Amelia decided she is not interested into Forbes and unsubscribes
forbes.unSubscribe(amelia);

// let's dispatch another news
forbes.pushMessage('Apple decides to stop supporting old iPhones');
forbes.notify();
/*
Hello Olivia, Apple decides to stop supporting old iPhones
Hello Harry, Apple decides to stop supporting old iPhones
 */
