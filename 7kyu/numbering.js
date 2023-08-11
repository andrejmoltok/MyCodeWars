// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9

var number=function(array){
  return array.map((val,idx) => {return (idx+1) + ": " + val})
}

console.log(number(["a","b","c"]));