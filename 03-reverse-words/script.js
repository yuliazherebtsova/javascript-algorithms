/*
 * Задача 3: «Развернуть слова в предложении»
 *
 * Напишите функцию reverseWords(str), принимающую на вход строку.
 * Функция должна вернуть новую строку, расставив слова в обратном
 * порядке.Если в строке есть знаки препинания, их можно удалить
 * или оставить — на ваше усмотрение.
 *
*/

function reverseWords(str) {
  if (typeof str !== 'string')
    return console.error("error: string expected!");
  const separators = [' ', '\\.', ',', ';', ':', '-', '\\!', '\\?'];
  const words = str.split(new RegExp(separators.join('|'), 'g'));
  return words.filter(item => item).reduce((res, curr) => [curr, res].join(' '), '').trim();
}

// Протестируйте решение, вызывая функцию с разными аргументами:
// console.log(reverseWords(42)); // error: string expected!
console.log(reverseWords('всегда много путей достичь цель есть')); // "есть цель достичь путей много всегда"
console.log(reverseWords('испробовать их все должны вы')); // "вы должны все их испробовать"
console.log(reverseWords('Испробовать Их Все Должны Вы'));
console.log(reverseWords(''));
console.log(reverseWords('Испробовать  Их     Все  Должны    Вы'));