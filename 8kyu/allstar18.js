// https://www.codewars.com/kata/5865918c6b569962950002a1

function strCount(str, letter){  
    //code here
    return str.split("").reduce((p,c) => {c===letter ? p++ : p; return p},0);
}

console.log(strCount("Hello","l"));