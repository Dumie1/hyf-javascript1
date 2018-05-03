
'use strict';

function vehicleType(color, code, age) {

    const vehicle = ['car', 'motorbike', 'caravan', 'bike'];
    const condition = age <= 1 ? ' new ' : ' used ';
    
  if (code === 1) {
      console.log('a ' + color + condition + vehicle[0]);
  } else if (code === 2) {
      console.log('a ' + color + condition + vehicle[1]);
  } else if (code === 3) {
      console.log('a ' + color + condition + vehicle[2]);
  } else if (code === 4) {
      console.log('a ' + color + condition + vehicle[3]);
  } else {
    console.log('unknown vehicle');
  }
}

vehicleType('green', 3, 1);
