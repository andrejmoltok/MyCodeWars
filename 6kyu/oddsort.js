// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

function sortArray(array) {
    let odds = array.filter((v) => {return (v % 2)}).sort((a,b) => a-b)
    //return array.reduce((p,c) => {return },0)
}

console.log(sortArray([5, 8, 6, 3, 4]));