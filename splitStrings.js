function solution(str) {
    const len = str.length;
    if (len % 2 !== 0) {
        let arr = str.match(/.{1,2}/g);
        arr.push(arr.pop() + '_');
        return arr;
    }
    return str.match(/.{1,2}/g);
}

console.log(solution('abcdefghi'));