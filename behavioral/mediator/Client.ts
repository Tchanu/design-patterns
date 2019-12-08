import { User } from './User';
import { ChatMediator } from './ChatMediator';

/*
Create simple chat room where users can send messages and poke each other
 */
const sophia = new User('Sophia');
const john = new User('John');
const emma = new User('Emma');

new ChatMediator([sophia, john, emma]);

sophia.sendMessage('Hey');
/*
John received `Hey` from Sophia
Emma received `Hey` from Sophia
 */

john.poke('Sophia'); // Sophia, John poked you!
sophia.poke('John'); // John, Sophia poked you!
