/*
 * Задача 6: «Уникальные числа»
 *
 * Напишите функцию uniq(arr), принимающую на вход массив целых чисел.
 * Функция должна возвращать массив уникальных чисел, которые содержатся
 * в переданном массиве. То есть, дубликаты должны быть удалены.
 * 
*/

function uniq(arr) {
  if (!Array.isArray(arr))
    return console.error('error: array expected!');
  else
    if (arr.length !== 0 && typeof arr[0] !== 'number')
      return console.error('error: array of numbers expected!');
    else
      return Array.from(new Set(arr));
}

// Протестируйте решение, вызывая функцию с разными аргументами:
console.log(uniq('test')); // error: array expected!
console.log(uniq(['a', 'b', 'c'])); // error: array of numbers expected!
console.log(uniq([1, 2, 5, 4, 2])); // [1, 2, 5, 4]
console.log(uniq([3, 3, 3, 5])); // [3, 5]
console.log(uniq([1, 4, 2, 2, 3, 4, 8])); // [1, 4, 2, 3, 8]