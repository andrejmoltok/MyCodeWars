// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

function longest(s1, s2) {
    return s1.split('').sort((a,b) => {return a[0].localeCompare(b[0])})
}

let a = "xyaabbbccccdefww";
let b = "xxxxyyyyabklmopq";

console.log(longest(a,b));