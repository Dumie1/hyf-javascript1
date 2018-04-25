"use strict";

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


/*References - Using splice() 
https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/splice 
https://www.lynda.com/JavaScript-tutorials/Properties-methods-arrays/574716/612037-4.html?autoplay=true*/
