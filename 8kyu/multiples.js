// https://www.codewars.com/kata/58ca658cc0d6401f2700045f
// 
function multiples(integer, limit){
    let result = [];
    for (let i = 1; i <= Math.floor(limit/integer); i++) {
        result.push(i*integer);
    }
    return result;
    //return [...Array(Math.floor(limit/integer)).fill(1)].map((v,i) => integer*(i+1));
}

console.log(multiples(5,25));
console.log(multiples(5,7));
console.log(multiples(4,27));