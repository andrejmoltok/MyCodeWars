// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b

String.prototype.isUpperCase = function() {
    let count = 0;
    for (let i = 0; i < this.length; i++) {
      if (this[i] === this[i].toUpperCase()) {
        count++;
      }
    }
    if (count === this.length) {
      return true;
    }
    return false;
}