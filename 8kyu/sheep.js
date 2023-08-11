// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

var countSheep = function (num){
    return Array.from({length: num}, (_,idx) => idx + 1).map((v) => {return v + " sheep..."}).join('');
}

console.log(countSheep(5));