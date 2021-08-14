/*
* Задачи*
*
*
*/

function duplicateCount(text) {
  const lowerText = text.toLowerCase();
  const letters = lowerText.split('');
  const duplicates = letters.filter(item => (lowerText.match(new RegExp(item, 'g')) || []).length > 1);
  return new Set(duplicates).size;
}

// console.log(duplicateCount(""), 0);
// console.log(duplicateCount("abcde"), 0);
// console.log(duplicateCount("aabbcde"), 2);
// console.log(duplicateCount("aabBcde"), 2, "should ignore case");
// console.log(duplicateCount("Indivisibility"), 1);
// console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent");

String.prototype.isUpperCase = function () {
  return String(this) === this.toUpperCase();
}

// console.log(''.isUpperCase() !== undefined, 'Must define the prototype isUpperCase');
// console.log('c'.isUpperCase(), false, 'c is not upper case');
// console.log('C'.isUpperCase(), true, 'C is upper case');
// console.log('hello I AM DONALD'.isUpperCase(), false, 'hello I AM DONALD not is upper case');
// console.log('HELLO I AM DONALD'.isUpperCase(), true, 'HELLO I AM DONALD is upper case');
// console.log('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(), false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case');
// console.log('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(), true, 'ACSKLDFJSGSKLDFJSKLDFJ is upper case');

function findUniqNum(arr) {
  const sorted = arr.sort();
  return sorted[0] === sorted[1] ? sorted[arr.length - 1] : sorted[0];
}

// console.log(findUniq([0, 1, 0]), 1);
// console.log(findUniq([1, 1, 1, 2, 1, 1]), 2);
// console.log(findUniq([3, 10, 3, 3, 3]), 10);

function solution(number) {
  let res = 0;
  if (number < 0) return 0;
  for (let i = 1; i < number; i++) {
    if (i % 15 == 0) { res += i; continue; }
    if (i % 5 == 0) { res += i; continue; }
    if (i % 3 == 0) { res += i; continue; }
  }
  return res;
}

function findUniq(arr) {
  const sorted = arr.map(item => [...new Set(item.toLowerCase().split('').sort().join('').trim())].join('')).sort();
  const found = sorted.map((item, index, arr) => arr[0] === arr[1] ? arr[arr.length - 1] : arr[0])[0];
  const filtered = arr.map(item => {
    const str = [...new Set(item.toLowerCase().split('').sort().join('').trim())].join('');
    if (str === found)
      return item;
    else return '';
  }).filter(item => item);
  return filtered[0];
}

// console.log(findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']), 'BbBb');
// console.log(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']), 'foo');
// console.log(findUniq(['silvia', 'vasili', 'victor']), 'victor');
// console.log(findUniq(['Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter']), 'Harry Potter');
// console.log(findUniq(['    ', 'a', ' ']), 'a');

function sumIntervals(intervals) {
  const res = new Set();
  intervals.forEach(arr => {
    for (let i = arr[0]; i < arr[arr.length - 1]; i++) {
      res.add(i);
    }
  })

  return res.size;
}

// const test1 = [[1, 5]];
// const test2 = [[1, 5], [6, 10]];
// const test3 = [[1, 5], [1, 5]];
// const test4 = [[1, 4], [7, 10], [3, 5]];
// console.log(sumIntervals(test1), 4);
// console.log(sumIntervals(test2), 8);
// console.log(sumIntervals(test3), 4);
// console.log(sumIntervals(test4), 7);

// function sumStrings(a, b) {
//   return (BigInt(a) + BigInt(b)).toString();
// }

// console.log(sumStrings('123', '456'), '579');
// console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'));
// console.log(sumStrings('', '5'));


function multiply(a, b) {
  return (BigInt(a) * BigInt(b)).toString();
}

// console.log(multiply("2", "3"), "6");
// console.log(multiply("30", "69"), "2070");
// console.log(multiply("11", "85"), "935");
// console.log(multiply("2", "0"), "0");
// console.log(multiply("0", "30"), "0");
// console.log(multiply("0000001", "3"), "3");
// console.log(multiply("1009", "03"), "3027");
// console.log(multiply("98765", "56894"), "5619135910");
// console.log(multiply("1020303004875647366210", "2774537626200857473632627613"), "2830869077153280552556547081187254342445169156730");
// console.log(multiply("58608473622772837728372827", "7586374672263726736374"), "444625839871840560024489175424316205566214109298");
// console.log(multiply("9007199254740991", "9007199254740991"), "81129638414606663681390495662081");

function divideStrings(a, b) {
  return [Math.floor(BigInt(a) / BigInt(a)).toString(), (BigInt(a) % BigInt(a)).toString()];
}

function formatDuration(seconds) {
  if (seconds === 0) return 'now';
  let years = Math.floor(seconds / (3600 * 24 * 365));
  let days = Math.floor(seconds % (3600 * 24 * 365) / (3600 * 24));
  let hours = Math.floor(seconds % (3600 * 24) / 3600);
  let min = Math.floor(seconds % 3600 / 60);
  let sec = Math.floor(seconds % 60);
  let ans = [];

  if (years > 1)
    ans.push(years + ' years');
  else {
    if (years === 1)
      ans.push('1 year');
  }
  if (days > 1)
    ans.push(days + ' days');
  else {
    if (days === 1)
      ans.push('1 day');
  }
  if (hours > 1)
    ans.push(hours + ' hours');
  else {
    if (hours === 1)
      ans.push('1 hour');
  }
  if (min > 1)
    ans.push(min + ' minutes');
  else {
    if (min === 1)
      ans.push('1 minute');
  }
  if (sec > 1)
    ans.push(sec + ' seconds');
  else {
    if (sec === 1)
      ans.push('1 second');
  }

  if (ans.length > 1)
    return `${ans.slice(0, ans.length - 1).join(', ')} and ${ans[ans.length - 1]}`;
  else return ans[0];
}

// console.log(formatDuration(1), " | 1 second");
// console.log(formatDuration(62), "| 1 minute and 2 seconds");
// console.log(formatDuration(120), "| 2 minutes");
// console.log(formatDuration(3600), "| 1 hour");
// console.log(formatDuration(3662), "| 1 hour, 1 minute and 2 seconds");

function solution(input, markers) {
  const lines = input.split('\n');
  const words = lines.map(item => item.split(new RegExp(markers.map(item => `\\${item}`).join('|'), 'g')));
  return words.map(item => item[0].trim()).join('\n');
};

// console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"], "apples, plums\npears\noranges"));
// console.log(solution("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne"));
// console.log(solution("a\nc\nd $e f g", ["$"], "Q\nu\ne"));

function formatWords(words) {
  if (!words || words.length === 1 && words[0] === '' || words.length === 0)
    return '';
  const res = words.filter(item => item);
  if (res.length > 1)
    return `${res.slice(0, res.length - 1).join(', ')} and ${res[res.length - 1]}`;
  else
    return res[0];
}


// console.log(formatWords(['one']));
// console.log(formatWords(['one', '', 'three']));
// console.log(formatWords(['', '', 'three']));
// console.log(formatWords(['one', 'two', '']));
// console.log(formatWords(['']));
// console.log(formatWords([]));

function nextPermutation(array) {
  //https://www.nayuki.io/page/next-lexicographical-permutation-algorithm
  // Find non-increasing suffix
  let i = array.length - 1;
  while (i > 0 && array[i - 1] >= array[i])
    i--;
  if (i <= 0)
    return -1;

  // Find successor to pivot
  let j = array.length - 1;
  while (array[j] <= array[i - 1])
    j--;
  let temp = array[i - 1];
  array[i - 1] = array[j];
  array[j] = temp;

  // Reverse suffix
  j = array.length - 1;
  while (i < j) {
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    i++;
    j--;
  }
  return array;
}

function nextBigger(n) {
  const arr = n.toString().split('').map(item => parseInt(item));
  const permutations = nextPermutation(arr);
  return permutations === -1 ? -1 : parseInt(permutations.join(''));
}

// console.log(nextBigger(12), 21);
// console.log(nextBigger(513), 531);
// console.log(nextBigger(2017), 2071);
// console.log(nextBigger(414), 441);
// console.log(nextBigger(144), 414);
// console.log(nextBigger(1234567890), 1234567908);

function permutations(string) {
  if (!string || typeof string !== "string") {
    return "Please enter a string";
  } else if (string.length < 2) {
    return Array.from(string);
  }

  let permutationSet = new Set();

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (string.indexOf(char) != i)
      continue;

    let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length);


    for (let permutation of permutations(remainingChars)) {
      permutationSet.add(char + permutation);
    }
  }
  return Array.from(permutationSet);
}

console.log(permutations('a'), ['a']);
console.log(permutations('ab').sort(), ['ab', 'ba'].sort());
console.log(permutations('aabb').sort(), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort());