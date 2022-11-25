function invert(arr) {
    return arr.map(function(v) {return Math.sign(v) == -1 ? v*(-1) : v*(-1)});
}

console.log(invert([-1,2,-3,4,-5]));