// function high(x){
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     let container = [];
//     let result = [];
//     x.split(' ').forEach((v) => {container.push(v)});
//     for (let i = 0; i < container.length; i++) {
//         let sum = 0;
//         for (let j = 0; j < container[i].length; j++) {
//             sum += alphabet.indexOf(container[i][j]) + 1;
            
//         }
//         result.push(sum);
//         console.log(result);
//     }
//     return container[result.indexOf(Math.max(0,...result))];
// }

// console.log(high('man i need a taxi up to ubud'));

// function high(entry){
//     let word = entry.split(' ').reduce((p,v,i) =>
//     p = (p[1] >=  v.split('').reduce((t,e) => t+=e.charCodeAt(0), 0)? p:
//     [i, v.split('').reduce((t,e) => t+=e.charCodeAt(0), 0)]), [0,0]);
//     return entry.split(' ')[word[0]];
// }

// console.log(high('man i need a taxi up to ubud'));

function high(entry){
    return entry.split(' ')[
    entry.split(' ').reduce(function(p,v,i) {
    let tmp = v.split('').reduce((t,e) => t+=e.charCodeAt(0), 0);
    p = (p[1] >=  tmp? p: [i, tmp]);
    console.log(p,v,i);
    return p}, [0,0])
    [0]];
}

console.log(high('man i need a taxi up to ubud'));