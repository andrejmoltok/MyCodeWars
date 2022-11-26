// https://www.codewars.com/kata/56b8903933dbe5831e000c76

function spoonerize(words) {
    let temp = words.split(' ')[0].charAt(0);
    let out = [];
    out.push(words.split(' ')[0].replace(temp,words.split(' ')[1].charAt(0)), 
            words.split(' ')[1].replace(words.split(' ')[1].charAt(0),temp));
    return out.join(' ');
}

console.log(spoonerize("nit picking"));