/*
 * Задача 10: «Факториал»
 *
 * Напишите функцию factorial(n), возвращающую факториал неотрицательного
 * целого числа. Факториал — это произведение всех натуральных чисел
 * от 1 до n включительно. Факториал 0 равен 1.
 * 
*/

function factorial(n) {
  if (typeof n !== 'number')
    return console.error("error: non-negative number expected!");
  if (n <= 1) return 1;
  let res = 1
  while (n) {
    res *= n;
    n--;
  }
  return res;
}

// Протестируйте решение, вызывая функцию с разными аргументами:
console.log(factorial('42')); /// error: non-negative number expected!
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(6)); // 720