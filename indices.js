// find the third largest elements index

let arr = [91, 2, 33, 51, 54, 39, 34, 61, 34, 91];

function indices(a) {
    let filter1 = a.filter((el) => el !== Math.max(...a));
    let filter2 = filter1.filter((el) => el !== Math.max(...filter1));
    let filter3 = filter2.filter((el) => el == Math.max(...filter2));
    return {[filter3] : a.indexOf(Number(filter3))};
}

console.log(indices(arr));