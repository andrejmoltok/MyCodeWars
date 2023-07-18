// https://www.codewars.com/kata/56445cc2e5747d513c000033

function validate(message){
    let pattern = /^MDZHB\s(\d{2})\s(\d{3})\s([A-Z]+)\s(\d{2})\s(\d{2})\s(\d{2})\s(\d{2})$/;
    return pattern.test(message);
}

console.log(validate('MDZHB 01 213 SKIF 38 87 23 95'));
console.log(validate('MDZHB 80 516 GANOMATIT 21 23 86 25'));