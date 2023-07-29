// https://www.codewars.com/kata/55908aad6620c066bc00002a

function XO(str) {
    return str.toLowerCase().split('').reduce((p,c) => {c === 'x' ? p++ : p; return p;},0) === str.toLowerCase().split('').reduce((p,c) => {c === 'o' ? p++ : p; return p;},0);
}

console.log(XO('xooxx'));
console.log(XO('xooOxx'));