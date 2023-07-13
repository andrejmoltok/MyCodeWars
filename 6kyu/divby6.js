// https://www.codewars.com/kata/5911385598dcd432ae000004

function isDivisibleBy6(s) {
    //coding and coding..
    return Array(10).fill(s).map((v,i) => {return +v.replace('*',i)}).filter((v,i) => {return v % 6 === 0}).map((v,i) => {return v.toString()});
}

console.log(isDivisibleBy6('1*0'));
console.log(isDivisibleBy6('*'));