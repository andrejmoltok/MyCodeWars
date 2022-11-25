function multiples(integer, limit){
    let result = [];
    for (let i = 1; i <= Math.floor(limit/integer); i++) {
        result.push(i*integer);
    }
    return result;
}

console.log(multiples(5,25));
console.log(multiples(5,7));
console.log(multiples(4,27));