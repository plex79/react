//import './utils.js';

import substract, {square, add} from './utils.js';

console.log('app.js is running!!');

console.log(square(4));
console.log(add(100,100));

console.log(substract(100, 79));

console.log('----------------');

import isSenior, {isAdult, canDrink} from './person.js';

console.log(isAdult(16));
console.log(isAdult(19));

console.log(canDrink(20));
console.log(canDrink(24));
console.log(isSenior(64));
console.log(isSenior(65));