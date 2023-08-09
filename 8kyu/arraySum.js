// https://www.codewars.com/kata/53dc54212259ed3d4f00071c

// Sum Numbers
function sum (numbers) {
    "use strict";
    
    return numbers.length > 0 ? numbers.reduce((p,c) => {return p+c}, 0) : 0;
};