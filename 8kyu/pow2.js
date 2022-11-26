// https://www.codewars.com/kata/57a083a57cb1f31db7000028

function powersOfTwo(n){
    let result = [];
    for (let exp = 0; exp <= n; exp++) {
      result.push(Math.pow(2,exp));
    }
    return result;
}