/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 * 
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
*/

const vowels = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'];

function findVowels(str) {
  if (typeof str !== 'string')
    return console.error("error: string expected!");
  return str.toLowerCase().split('').reduce((res, item) => (vowels.includes(item) ? res + 1 : res), 0);
}

// Протестируйте решение, вызывая функцию с разными аргументами:
// console.log(findVowels(42)); // error: string expected!
console.log(findVowels('здрАвстВуй')); // 2
console.log(findVowels('здравствуй')); // 2
console.log(findVowels('привет')); // 2
console.log(findVowels('хеллоу')); // 3