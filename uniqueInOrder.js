var uniqueInOrder=function(iterable){
    return (typeof iterable === 'string')
    ? iterable
                .split('')
                .filter((el,idx,arr) => el === arr[idx+1])
    : [...new Set(iterable)];
  }

  console.log(uniqueInOrder([1,2,2,3,3]));
  console.log(uniqueInOrder('AAAABBBCCDAABBB'));