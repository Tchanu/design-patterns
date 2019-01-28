import {God} from "./Singleton";

const god1 = God.getInstance();
const god2 = God.getInstance();

console.log(god1 === god2); // true, so there is only one God
