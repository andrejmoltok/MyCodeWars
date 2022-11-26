// https://www.codewars.com/kata/515e271a311df0350d00000f

function squareSum(numbers){
    let sum = 0;
    let sqr = 2;
     for (let i = 0; i < numbers.length; i += 1) {
       sum += Math.pow(numbers[i],sqr);
     }
    return sum;
}