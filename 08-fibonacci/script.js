/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 * 
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
*/

function fibonacci(n) {
  if (typeof n !== 'number')
    return console.error("error: non-negative number expected!");
  if (n <= 1)
    return 0;
  let previous = 0;
  let current = 1;
  while (n - 2) {
    let next = previous + current;
    previous = current;
    current = next;
    n--;
  }
  return current;
}

// Протестируйте решение, вызывая функцию с разными аргументами:
// console.log(fibonacci('42')); /// error: non-negative number expected!
console.log(fibonacci(4)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)
console.log(fibonacci(6)); // 5
console.log(fibonacci(10)); // 34