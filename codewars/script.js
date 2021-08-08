/*
* Задачи*
*
*
*/

function duplicateCount(text) {
  const lowerText = text.toLowerCase();
  const letters = lowerText.split('');
  const duplicates = letters.filter(item => (lowerText.match(new RegExp(item, 'g')) || []).length > 1);
  return new Set(duplicates).size;
}

// console.log(duplicateCount(""), 0);
// console.log(duplicateCount("abcde"), 0);
// console.log(duplicateCount("aabbcde"), 2);
// console.log(duplicateCount("aabBcde"), 2, "should ignore case");
// console.log(duplicateCount("Indivisibility"), 1);
// console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent");

String.prototype.isUpperCase = function () {
  return String(this) === this.toUpperCase();
}

// console.log(''.isUpperCase() !== undefined, 'Must define the prototype isUpperCase');
// console.log('c'.isUpperCase(), false, 'c is not upper case');
// console.log('C'.isUpperCase(), true, 'C is upper case');
// console.log('hello I AM DONALD'.isUpperCase(), false, 'hello I AM DONALD not is upper case');
// console.log('HELLO I AM DONALD'.isUpperCase(), true, 'HELLO I AM DONALD is upper case');
// console.log('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(), false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case');
// console.log('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(), true, 'ACSKLDFJSGSKLDFJSKLDFJ is upper case');

function findUniq(arr) {
  return arr.filter((item, index, arr) => (arr.toString().match(new RegExp(item.toString(), 'g')) || []).length === 1)[0];
}

console.log(findUniq([0, 1, 0]), 1);
console.log(findUniq([1, 1, 1, 2, 1, 1]), 2);
console.log(findUniq([3, 10, 3, 3, 3]), 10);