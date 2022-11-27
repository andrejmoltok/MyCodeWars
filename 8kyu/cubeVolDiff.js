// https://www.codewars.com/kata/58cb43f4256836ed95000f97

function findDifference(a, b) {
    return Math.abs(a.reduce((p,c) => p*c,1) - b.reduce((p,c) => p*c,1));
}

console.log(findDifference([2,2,3],[5,4,1]));