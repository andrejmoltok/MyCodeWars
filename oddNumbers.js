function oddCount(n){
    return [...Array(n).keys()].filter((v) => v%2!=0).length; // return Math.trunc(n/2);
}

console.log(oddCount(15));