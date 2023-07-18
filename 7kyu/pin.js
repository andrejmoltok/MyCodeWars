// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

function validatePIN (pin) {
    return /^\d{4}(?:\d{2})?$/.test(pin);
}

console.log(validatePIN('1234'));
console.log(validatePIN('123456'));
console.log(validatePIN('12345'));