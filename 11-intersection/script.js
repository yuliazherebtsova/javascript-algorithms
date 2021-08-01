/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/

function intersection(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2))
    return console.error('error: two arrays expected!');
  else
    if (arr1.length !== 0 && typeof arr1[0] !== 'number' ||
      arr2.length !== 0 && typeof arr2[0] !== 'number')
      return console.error('error: two arrays of numbers expected!');
    else
      return [...new Set(arr1)].filter(item => new Set(arr2).has(item));
}

// Протестируйте решение, вызывая функцию с разными аргументами:
// console.log(intersection([1, 5, 4, 2], 'test')); // error: two arrays expected!
// console.log(intersection([1, 5, 4, 2], ['a', 'b', 'c'])); // error: two arrays of numbers expected!
console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []