'use strict';

function vehicleType(color, code, age) {


    if (code === 1){
        console.log('a ' + color + ' new' + ' car');
    } else if (code === 2) {
        console.log('a ' + color + ' motorbike');
    } else {
        console.log('unknown vehicle');
    }
}

vehicleType('blue', 1, 5);
