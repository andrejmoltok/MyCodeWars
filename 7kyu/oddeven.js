// https://www.codewars.com/kata/5949481f86420f59480000e7

function oddOrEven(array) {
    return array.reduce((p,c) => {return p+c},0) % 2 === 0 ? "even" : "odd";
}

console.log(oddOrEven([1023,1,2]));
console.log(oddOrEven([-1023,1,-2]));
console.log(oddOrEven([0,1,4]));