'use strict';

function vehicleType(color, code) {

  if (code === 1) {
    console.log('a ' + color + ' car');
  } else if (code === 2) {
    console.log('a ' + color + ' motorbike');
  } else {
    console.log('unknown vehicle');
  }
}
vehicleType('blue', 2);

/*"use strict";

function vehicleType(color, code) {
  if (code === 1) {
    return "a " + color + " car";
  } else if (code === 2) {
    return "a " + color + " motorbike";
  } else {
    return "unknown vehicle";
  }
}

console.log(vehicleType("blue", 1));*/
