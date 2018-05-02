
'use strict';
const x = [1, 2, 3];
const y = [1, 2, 3];
const z = y;
const array1 = [4, 8, 9, 10];
const array2 = [4, 8, 9, 10];

function equal(a, b) {
  let same = a.length === b.length;
  if (same) {
    const len = a.length;
    for (let i = 0; same && i < len; i++) {
      if (a[i] !== b[i]) {
        same = false;
      }
    }
  }

  return same;
}

console.log(equal(array1, array2));
