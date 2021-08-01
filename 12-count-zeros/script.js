/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход целое неотрицательное
 * число n. Возвращать функция должна количество нулей, содержащихся в аргументе.
 * 
*/

function countZeros(n) {
  if (typeof n !== 'number')
    return console.error("error: non-negative number expected!");
  if (n <= 0) return 0;
  let res = 0;
  while (n % 10 == 0) {
    n /= 10;
    res++;
  }
  return res;
}

// Протестируйте решение, вызывая функцию с разными аргументами:
// console.log(countZeros('42')); /// error: non-negative number expected!
console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 
console.log(countZeros(342)); // 13