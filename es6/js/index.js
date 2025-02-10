'use strict';

import { sayHello } from './other.js';
import getPersonName from './other.js';


console.log("executing index.js");

//an array of objects to work with
const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156},
  {name: 'Chris', height: 69, weight: 139, pronouns: 'they/them'},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152}
]
console.log(peopleArray);



console.log(getName(peopleArray[0]));

sayHello();



//function foo() {}

const foo = (params) => {
  return 'foo '+params;
}

const foo2 = (params) => 'foo2 '+params;

//const sayHello = () => 'hello';

// console.log(foo2('world'));

// const myArray = [1, 2];
// // const x = myArray[0];
// // const y = myArray[1];
// // const z = myArray[2];
// const [x, y, z] = myArray;
// console.log(x);
// console.log(y);
// console.log(z);

const myObject = {a: 1, b: 2, c: 3, d: 4};
const {a, c, b, z} = myObject;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(z);

function getFullName( personObj ) {
  const {first, last} = personObj;

  return first + " " + last;
}

getFullName({height: 100, weight: 100});


const originalArray = ['a', 'b', 'c', 'd'];
const newArray = [...originalArray, 'e', 'f']
// console.log(newArray);

const person = {name: 'Ada', height: 64, weight: 135}
const clone = {...person};
// console.log(clone);