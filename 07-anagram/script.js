/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
  if (typeof str1 !== 'string' || typeof str2 !== 'string')
    return console.error("error: two strings expected!");
  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();
  if (lowerStr1.localeCompare(lowerStr2) === 0)
    return false;  // слово не является анагнаммой самого себя
  const sortedStr1 = Array.from(lowerStr1).sort().join('');
  const sortedStr2 = Array.from(lowerStr2).sort().join('');
  return !Boolean(sortedStr1.localeCompare(sortedStr2));
}

// Протестируйте решение, вызывая функцию с разными аргументами:
// console.log(anagram('test', 42)); // error: two strings expected!
console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
console.log(anagram('up', 'Up')); // false