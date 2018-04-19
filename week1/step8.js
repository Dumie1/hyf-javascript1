"use strict";

let manager = true;
console.log( "John is a manager:" + manager);
console.log("The variable type is a boolean");
console.log(typeof manager);

let salary = null;
console.log("The salary of manager is :" + salary);
console.log("The variable type is an object");
console.log(typeof salary);

let managerName = "John";
console.log("The name of the manager is : " + managerName);
console.log("The variable type is a string");
console.log(typeof managerName);

let age = 40;
console.log("The manager is aged :" + age);
console.log("The variable type is a number");
console.log(typeof age);

if ( typeof managerName == typeof age) {
        console.log("Same type");
}
else{
  console.log("Different types");
}


if ( typeof manager == typeof salary) {
    console.log("Same type");
}
else{
    console.log("Different types");
}
