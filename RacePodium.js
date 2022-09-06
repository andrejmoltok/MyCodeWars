//find the lowest numbers to sum up to `blocks`

//third > 0

const blocks = 100000; 

// 6 =  [2,3,1]; basecase
// 7 =  [2,4,1]; 
// 8 =  [3,4,1]; 
//--------------

// 9 =  [3,5,1];
// 10 = [4,5,1];
// 11 = [4,5,2]; 6 => [2+second,second+first,third+1]
//---------------


function podium(n) {
  let base = [2,3,1];
  if (n%2!==0) {
    
  }
}

console.log(podium(9));
console.log(podium(10));