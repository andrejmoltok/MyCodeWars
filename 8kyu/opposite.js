// https://www.codewars.com/kata/56dec885c54a926dcd001095

function opposite(number) {
  return number === 0 ? 0 : Math.sign(number) === 1 ? (number * -1) : Math.abs(number);
}

console.log(opposite(0));
console.log(opposite(6));
console.log(opposite(-4));