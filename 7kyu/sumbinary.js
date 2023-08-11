// https://www.codewars.com/kata/551f37452ff852b7bd000139

function addBinary(a,b) {
    return [a,b].reduce((p,c) => {return p+c},0).toString(2)
}

console.log(addBinary(25,16));