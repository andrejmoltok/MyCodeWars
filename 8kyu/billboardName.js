// https://www.codewars.com/kata/570e8ec4127ad143660001fd

function billboard(name, price = 30){
    return [...name].map((el,idx) => idx).reduce((sum) => sum+=price,0);
}