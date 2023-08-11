// https://www.codewars.com/kata/576bb71bbbcf0951d5000044

function countPositivesSumNegatives(input) {
    let count = 0;
    let sum = 0;
    let result = [];
    if (input.length > 0) {
        for (let i = 0; i < input.length; i++) {
            if (Math.sign(input[i]) === 1) {
                count++
            } else {
                sum += input[i]
            }
        }
    } else {
        return [];
    }
    result.push(count, sum)
    return result;
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));