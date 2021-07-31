/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/
function fizzBuzz(num) {
  if (typeof (num) !== 'number') return 'error: number expected!';
  if (num <= 0) return 0;
  for (let i = 1; i <= num; i++) {
    if (i % 15 == 0) { console.log('fizzbuzz'); continue; }
    if (i % 5 == 0) { console.log('buzz'); continue; }
    if (i % 3 == 0) { console.log('fizz'); continue; }
    console.log(i);
  }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

fizzBuzz(15);