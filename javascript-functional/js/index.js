'use strict';


function sayHello(name) { 
  console.log("Hello, "+name);
}

const myMessage = "hello world";

// const myFunction = function(person) {
//   console.log("Hello, "+person);
// }

// myFunction("literal function");

// function sayHello(name) { 
//   console.log("Hello, "+name);
// }

// const sayGoodbye = function(name) {
//   console.log("See you later, "+name);
// }

// function callWithWorld(aFunction) {
//   aFunction("world");
// }

// //call function and pass value
// callWithWorld(sayHello); //"Hello world"
// callWithWorld(function(name) {
//   console.log("See you later, "+name);
// });

// function getHello() {
//   return "Hello";
// }

// console.log( getHello );

// console.log( Math.sqrt );

// function doTogether(firstCallback, secondCallback){
//   console.log(firstCallback)
//   firstCallback();  //execute the first function
//   secondCallback();  //execute the second function
//   console.log('at the "same time"!');
// }

// function patHead() {
//   console.log('pat your head');
//   // const anotherFunction = function() {
//   //   console.log("something")
//   // }
//   // return anotherFunction;
// }

// function rubBelly() {
//   console.log('rub your belly');
// }

// //pass in the callbacks to do them together
// doTogether(patHead, rubBelly);

//an array of objects to work with
const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156},
  {name: 'Chris', height: 69, weight: 139, pronouns: 'they/them'},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152}
]
console.log(peopleArray);

// for(const person of peopleArray){
//   console.log(person);
// }

const printName = function(person){
  console.log(person.name);
}

peopleArray.forEach(function(person){
  console.log(person.name);
});

//TEMPLATE
/*
const newArray = oldArray.map(function(item){
  const transformed = ...
  return transformed;
});
*/

const nameArray = peopleArray.map(function(person){
  const transformed = person.name;
  return transformed
});
console.log(nameArray);

const peopleGreetings = nameArray.map(function(nameStr){
  const transformed = "Hi, "+nameStr;
  return transformed;
});
console.log(peopleGreetings);

const tallPeopleArray = peopleArray.filter(function(person){
  return person.height >= 70;
})
console.log(tallPeopleArray);

const totalHeight = peopleArray.reduce(
  function(accumulation, currentPerson) {
    const newTotal = accumulation + currentPerson.height;
    return newTotal;
  },
  0 //starting value
)
console.log(totalHeight);





