// https://www.codewars.com/kata/568d0dd208ee69389d000016

function rentalCarCost(d) {
    return d >= 3 && d <= 6 ? (d * 40) - 20 : d >= 7 ? (d * 40) - 50 : d < 3 ? (d * 40) : null; 
}

console.log(rentalCarCost(3));
console.log(rentalCarCost(7));