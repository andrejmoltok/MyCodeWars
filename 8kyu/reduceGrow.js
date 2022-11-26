// https://www.codewars.com/kata/57f780909f7e8e3183000078

function grow(x){
    if (x.length == 1) {
      return Number(x);
    } else if (x.length > 1) {
      return x.reduce((p,c) => p*c,1);
    } else {
      return false;
    }
}