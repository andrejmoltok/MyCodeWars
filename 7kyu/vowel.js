// https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
    let vowels = ['a','e','i','o','u'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str.split('')[i] === vowels[j]) {
                count++;
            }
        }
    }
    return count;

    //return str.split('').reduce((p,c) => {return vowels.reduce((prev,curr) => {c === curr ? p++ : p; return p},0)},0);
}

console.log(getCount('abracadabra'));