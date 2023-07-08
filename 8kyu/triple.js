// https://www.codewars.com/kata/5704aea738428f4d30000914

function tripleTrouble(one, two, three){
    //Solution
    let output = '';
    for (let i = 0; i < ((one.length + two.length + three.length)/3); i++) {
        output += one[i] + two[i] + three[i];
    }
    return output;
}

console.log(tripleTrouble('aa','bb','cc'));