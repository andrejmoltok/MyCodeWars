// https://www.codewars.com/kata/57eaeb9578748ff92a000009

function sumMix(x){

    //Solution 1

    let sum = 0;
    for (let i = 0; i < x.length; i += 1) {
        if (typeof x[i] !== 'number') {
            x.splice(i,1,Number(x[i]));
        }
        sum += x[i];
    }
    return sum;

    //Solution 2

    return x.reduce((a,b) => Number(a) + Number(b));
    
  }

  console.log(sumMix([9,3,'7','3']));
  console.log(sumMix([5,'5','5',5]));