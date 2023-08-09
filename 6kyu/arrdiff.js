// https://www.codewars.com/kata/523f5d21c841566fde000009

function arrayDiff(a, b) {
  return a.filter((v) => !b.includes(v));
}

console.log(arrayDiff([1,2],[1]));
console.log(arrayDiff([1,2,2,2,3],[2]));