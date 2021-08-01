/*
 * Задача 13: «Сумма двух»
 *
 * Напишите функцию sumOfTwo(arr, num). Её аргументы: массив целых чисел arr
 * и целое число num. Функция должна вернуть true, если в переданном массиве
 * есть какие-то два числа, чья сумма равна num. Если же такой пары чисел нет,
 * функция должна вернуть false.
 * 
*/

function binarySearch(arr, elem) {
  // O(n * log n)
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === elem) {
      return true;
    } else if (arr[middle] < elem) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return false;
}

function sumOfTwo(arr, sum) {
  // решение сложностью O(n * log n)
  if (!Array.isArray(arr) || typeof sum !== 'number')
    return console.error("error: array and number expected!");
  const sortedArr = arr.sort((a, b) => { return a - b; }); // O(n * log n)
  const res = sortedArr.filter((num, i, arr) => { return binarySearch(arr, sum - num); }); // O(n * log n)
  return res.length > 0 ? true : false;
}

// Протестируйте решение, вызывая функцию с разными аргументами:
//console.log(sumOfTwo([1, 2, 3, 4, 5], '42'));
//console.log(sumOfTwo('42', 100));
console.log(sumOfTwo([100, 55, 45, 33, 12, 0, 1, 2, 3, 4, 5], 4)); // true
console.log(sumOfTwo([1, 2, 3, 4, 5], 4)); // true (так как 1 + 3 === 4)
console.log(sumOfTwo([1, 2, 3, 4, 5], 100)); // false