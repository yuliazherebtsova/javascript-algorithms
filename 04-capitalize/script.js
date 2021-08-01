/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
  if (typeof str !== 'string')
    return console.error("error: string expected!");
  const separators = [' ', '\\.', ',', ';', ':', '-', '\\!', '\\?'];
  const words = str.split(new RegExp(separators.join('|'), 'g'));
  return words.filter(item => item).map(item => item[0].toUpperCase() + item.slice(1)).join(' ');
}

// Протестируйте решение, вызывая функцию с разными аргументами:
// console.log(capitalize(42)); // error: string expected!
console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
console.log(capitalize(' '));
console.log(capitalize('слово '));
console.log(capitalize(''));
console.log(capitalize('молодость  всё     простит'));