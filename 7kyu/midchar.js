// https://www.codewars.com/kata/56747fd5cb988479af000028/

function getMiddle(s)
{
  return s.length % 2 === 0 ? s.substring(Math.ceil(s.length / 2) - 1,Math.ceil(s.length / 2) + 1) : s[Math.ceil(s.length / 2) - 1];
}

console.log(getMiddle('hello'));
console.log(getMiddle('testing'));
console.log(getMiddle('test'));
console.log(getMiddle('middle'));