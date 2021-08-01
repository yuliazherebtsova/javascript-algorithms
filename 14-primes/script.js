/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/
function isPrime(n) {
  if (typeof n !== 'number' || !Number.isInteger(n))
    return console.error("error: integer expected!");
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function primes(num) {
  if (typeof num !== 'number' || !Number.isInteger(num))
    return console.error("error: integer expected!");
  if (num <= 1) return [];
  const res = [];
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) res.push(i);
  }
  return res;
}

// Протестируйте решение, вызывая функцию с разными аргументами:
//console.log(primes('42')); // error: integer expected!
console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]