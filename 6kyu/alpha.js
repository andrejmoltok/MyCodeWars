// https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(input) {
    return input
            .split('')
            .map((v) => {return v.toLowerCase()})
            .filter((v) => {return v.charCodeAt(0) >= 97 && v.charCodeAt(0) <= 122})
            .map((v) => {return v.charCodeAt(0) - 96})
            .join(' ')
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));