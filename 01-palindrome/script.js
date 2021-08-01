/*
 * Задача 1: «Палиндром»
 *
 * Палиндром — это слово, предложение или последовательность символов,
 * которая читается слева направо так же, как и справа налево. Например,
 * «топот» и «Анна» — палиндромы, а «привет» и «Витя» — нет.
 *
 * Напишите функцию palindrome(str), принимающую как аргумент строку.
 * Функция должна вернуть true, если строка — палиндром, и false, если нет.
 * 
 * Считайте, что на вход всегда передаётся слово: то есть знаков препинания
 * и пробелов в аргументе быть не может.
 * 
*/

function palindrome(str) {
  if (typeof str !== 'string')
    return console.error("error: string expected!");
  const separators = [' ', ',', ';', ':', '-', '!', '\\?'];
  const letters = str.toLowerCase().split('').filter(item => !separators.includes(item));
  return letters.reduce((res, curr, i, arr) => res && arr[i] === arr[arr.length - 1 - i], true);
}

// Протестируйте решение, вызывая функцию с разными аргументами:
// console.log(palindrome(42)); // error: string expected!
console.log(palindrome('топот')); // должно быть true
console.log(palindrome('Saippuakivikauppias')); // true
console.log(palindrome('привет')); // false
console.log(palindrome('тоПоТ'));
console.log(palindrome(''));
console.log(palindrome('фунКция'));

/*
* Бонус. Задача для любознательных. Пусть функция принимает на вход любую строку,
* но пробелы и знаки препинания не учитывает. Например:
*
* palindrome('О, лета тело!'); // true
*
*/

console.log(palindrome('О, лета тело!')); // true