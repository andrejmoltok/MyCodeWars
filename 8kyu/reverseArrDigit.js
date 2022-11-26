// https://www.codewars.com/kata/5583090cbe83f4fd8c000051

function digitize(n) {
    //convert input into array then reverse it with built-in function
    return Array.from(String(n),Number).reverse();
}