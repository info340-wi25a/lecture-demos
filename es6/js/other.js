'use strict';

console.log("executing other.js");

//const peopleArray = ['John', 'Jacob', 'Smith']

export default function getPersonName(personObj){
  return personObj.name;
}

export function sayHello(name) {
  console.log("Hello, ", name);
}


console.log(getPersonName({name: 'example'}))