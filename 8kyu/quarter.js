// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/

const quarterOf = (month) => {
    // Your code here
    return Math.ceil(4 * month / 12);
}

console.log(quarterOf(3));
console.log(quarterOf(8));
console.log(quarterOf(11));