"use strict";

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
const maurosFavoriteAnimal = "turtle";
favoriteAnimals.push(maurosFavoriteAnimal);
console.log(favoriteAnimals);

const jimsFavoriteAnimal = "meerkat";
favoriteAnimals.splice(1, 0, jimsFavoriteAnimal); 
console.log(
    "I thing the new value of favoriteAnimals is: blowfish, meerkat, capricorn, giraffe, turtle."
);
console.log(favoriteAnimals);

console.log("The array has a length of: " + favoriteAnimals.length);

favoriteAnimals.splice(3, 1); // no giraffe
console.log(favoriteAnimals);

const indexOfMeerkat = favoriteAnimals.indexOf("meerkat");
favoriteAnimals.splice(indexOfMeerkat, 1);
console.log(favoriteAnimals);
console.log("The item you are looking for is at index: " + indexOfMeerkat);



//My original code below before corrections.

/*"use strict";

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
console.log(favoriteAnimals);

favoriteAnimals.push("turtle");
console.log(favoriteAnimals);

favoriteAnimals.splice(1, 0, "meerkat");
console.log("List of favorite animals will be as follows -:" + ["blowfish", "meerkat", "capricorn", "giraffe", "turtle"]);
console.log(favoriteAnimals);

console.log("The total number of animals in the list is "+ favoriteAnimals.length);
favoriteAnimals.splice(3, 1);
console.log("'giraffe' will be removed from the list");
console.log(favoriteAnimals);

console.log("Item to be deleted is at index :" + favoriteAnimals.indexOf("meerkat"));
favoriteAnimals.splice(1, 1);
console.log(favoriteAnimals);
*/

/*References - Using splice() 
https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/splice 
https://www.lynda.com/JavaScript-tutorials/Properties-methods-arrays/574716/612037-4.html?autoplay=true
w3schools https://www.w3schools.com/js/js_array_methods.asp
youtube https://www.youtube.com/watch?v=H4Sf4suR3C4
http://www.hostingadvice.com/how-to/javascript-remove-element-array/
*/
