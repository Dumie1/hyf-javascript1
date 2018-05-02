'use strict';

function printObject(obj) {
    
    console.log('firstName = ' + obj.firstName);
    console.log('lastName = ' + obj.lastName);
    console.log('city = ' + obj.city);
}

const person = {
    firstName: 'Maartje',
    lastName: 'Kruijt',
    city: 'Amsterdam'
};

printObject(person);
