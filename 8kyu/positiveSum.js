// https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
    return arr.filter((num) => Math.sign(num) !== -1).reduce((p,c) => p+c,0);
}