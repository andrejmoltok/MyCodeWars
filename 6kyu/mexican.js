// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

function wave(str){
    let form = Array.from({ length: str.length }, () => str);
    let result = [];
    for (let i = 0; i < form.length; i++) {
        if (form[i][i] === ' ') {
            continue;
        } else {
            result.push(form[i].replace(form[i][i],form[i][i].toUpperCase()));
        }
    }
    return result;
}

console.log(wave('hello'));
console.log(wave('codewars'));
console.log(wave('two words'));