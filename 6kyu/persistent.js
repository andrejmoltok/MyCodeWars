// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

function solution(num) {
    let arr = Array.from(String(num),Number);
    let count = 0;
    if (arr.length > 1) {
        let prod = arr.reduce((a,b) => a*b,1);
        count += 1;
        return count + solution(prod);
    } else {
        return 0;
    }
}

console.log(solution(25));
console.log(solution(39));
console.log(solution(4));
console.log(solution(999));