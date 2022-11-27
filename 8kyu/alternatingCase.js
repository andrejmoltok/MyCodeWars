// https://www.codewars.com/kata/56efc695740d30f963000557

String.prototype.toAlternatingCase = function () {
    // Solution 1
    let str = "";
    for (let i = 0; i < this.length; i++) {
        this[i] == this[i].toLowerCase() ? str += this[i].toUpperCase() : str += this[i].toLowerCase();
    }
    return str;

    // Solution 2
    // return this.split('').map(v => v == v.toLowerCase() ? v.toUpperCase() : v.toLowerCase()).join('');
}

console.log("Hello World".toAlternatingCase());