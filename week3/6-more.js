'use strict';

function vehicleType(color, code, age) {

    const condition = age <= 1 ? ' new'  : ' used';
    if (code === 1){
        console.log('a ' + color + condition + ' car');
    } else if (code === 2) {
        console.log('a ' + color + condition + ' motorbike');
    } else {
        console.log('unknown vehicle');
    }
}

vehicleType('blue', 2, 5);
