'use strict';

console.log("Hello world");
// console.log("It is so very Monday today");

// const xString = "hello";

// console.log(xString);

// // const hoursSleptNum;
// // console.log(hoursSlept);

// console.log("40" + 2);
// console.log("40" - 4);

// const numTen = 10;
// const strTen = '10';
// //console.log("are they the same: ", numTen === strTen);

// console.log("are they the same: ", '' == 0);

// const lettersArray = ['a', 'b', 'c'];
// console.log(lettersArray);

// console.log(lettersArray[4]);
// lettersArray[5] = 'f';
// console.log(lettersArray);

// lettersArray.push('z');
// console.log(lettersArray);

// const namesArray = ["Joel", "Tameem", "James"];
// console.log(namesArray);

// const agesObj = {
//   sarah:42, 
//   amit:35, 
//   zhang:13
// };

// const numWordsObj = {1:'one', 2:'two', 3:'three'}
// const keyArray = Object.keys(numWordsObj)
// console.log(keyArray);

// console.log(agesObj.fred);

// agesObj.sarah = 43;
// agesObj.fred = 18;
// agesObj['newSarah'] = 42;

// console.log(agesObj);

// const dailySleep = {day: "Sunday", hcoursSlept: 8};
// console.log(dailySleep);


// const person = {
//   firstName: 'Alice',
//   lastName: 'Wong',
//   age: 40,
//   favorites: {
//     music: 'jazz',
//     food: 'pizza',
//     numbers: [12, 42]
//   }
// };
// console.log(person);

// const chosenValue = "food" //e.g., from user input
// const favFood = person.favorites.chosenValue; //object in the object
// console.log(favFood);


const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156},
  {name: 'Chris', height: 69, weight: 139},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152}
]

console.log(peopleArray);

// for(let i=0; i<peopleArray.length; i++) {
//   console.log(peopleArray[i]);
// }

//Java: for(String myString : myArray) {}
//Python: for myString in myArray:

//JavaScript
for(const aPerson of peopleArray) {
  console.log(aPerson);
}