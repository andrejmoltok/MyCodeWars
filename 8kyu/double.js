// https://www.codewars.com/kata/56b1f01c247c01db92000076

function doubleChar(str) {
    return str.split('').map((v,i) => {return v.repeat(2)}).join('');
}

console.log(doubleChar('Hello World!'));