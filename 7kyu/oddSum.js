// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064

function rowSumOddNumbers(n) {
	const oddPyramid = [];
    let currentNumber = 1;

    for (let i = 1; i <= n; i++) {
        const currentArray = [];
        for (let j = 0; j < i; j++) {
            while (currentNumber % 2 === 0) {
                currentNumber++; // Skip even numbers
            }
        currentArray.push(currentNumber);
        currentNumber += 2; // Move to the next odd number
        }
    oddPyramid.push(currentArray);
    }
    
    return oddPyramid[n-1].reduce((p,c) => {return p+c},0);
}

console.log(rowSumOddNumbers(42));