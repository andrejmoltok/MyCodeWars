function solution(string) {
    let arr = string.split(' ');
    let result = [];
  if (arr.length === 1) {
    let word = arr.toString();
    let output = '';
    for (let i = 0; i < word.length; i += 1) {
      if (i%2==0) {
        output += word.charAt(i).toUpperCase();
      } else {
        output += word.charAt(i).toLowerCase();
      }
    }
    result.push(output);
    } else if (arr.length > 1){
    for (let j = 0; j < arr.length; j += 1) {
        let output = '';
        for (let k = 0; k < arr[j].length; k += 1) {
            let word = arr[j].toString();
            if (k%2==0) {
                output += word.charAt(k).toUpperCase();
                //console.log(output);
            } else {
                output += word.charAt(k).toLowerCase();
                //console.log(output);
            }
        }
        result.push(output);
    }
    }
    return result.join(' ');
}

console.log(solution('This'));
console.log(solution('is'));
console.log(solution('This is a test'));

// for (let i = 0; i < 5; i += 1){
//     if (i%2 == 0) {
//         console.log(i + ' % 2 = ' + i%2);
//     } else {
//         console.log(i + ' % 2 = ' + i%2);
//     }
// }