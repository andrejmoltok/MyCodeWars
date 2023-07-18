// https://www.codewars.com/kata/54d418bd099d650fa000032d
// NOT SOLVED YET

var vampire_test = function(a, b){
    var pattern = new RegExp(
        '^'
        + a.toString().split('').map(digit => `(?=.*${digit})`).join('')
        + b.toString().split('').map(digit => `(?=.*${digit})`).join('')
      );
    
      return pattern.test((a*b).toString());
}

console.log(vampire_test(6, 21));