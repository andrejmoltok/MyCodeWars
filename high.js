function high(x){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let container = [];
    let result = [];
    x.split(' ').forEach((v) => {container.push(v)});
    for (let i = 0; i < container.length; i++) {
        let sum = 0;
        for (let j = 0; j < container[i].length; j++) {
            sum += alphabet.indexOf(container[i][j]) + 1;
        }
        result.push(sum);
    }
    return container[result.indexOf(Math.max(0,...result))];
}

console.log(high('man i need a taxi up to ubud'));