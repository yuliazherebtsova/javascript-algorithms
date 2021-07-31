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
  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();
  if (lowerStr1.localeCompare(lowerStr2) === 0) return false;
  const sortedStr1 = Array.from(lowerStr1).sort().join('');
  const sortedStr2 = Array.from(lowerStr2).sort().join('');
  const res = sortedStr1.localeCompare(sortedStr2);
  return !Boolean(res);
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
console.log(anagram('up', 'Up')); // false