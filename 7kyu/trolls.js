// https://www.codewars.com/kata/52fba66badcd10859f00097e

function disemvowel(str) {
    const vowels = ['a','e','i','o','u'];
    return str.split('').filter((v) => {return !vowels.includes(v.toLowerCase())}).join('');
}

console.log(disemvowel('This website is for losers LOL!'));