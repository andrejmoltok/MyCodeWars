// https://www.codewars.com/kata/576757b1df89ecf5bd00073b

function towerBuilder(nFloors) {
    let pyramid = [];
    for (let i = nFloors-1, j = 1; i >= 0, j <= (nFloors*2)-1; i--, j+=2) {
        pyramid.push(' '.repeat(i) + '*'.repeat(j) + ' '.repeat(i))
    }
    return pyramid;
}

console.log(towerBuilder(6));
console.log(towerBuilder(3));