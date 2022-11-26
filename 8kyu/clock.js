// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a

function past(h, m, s){
    //#Happy Coding! ^_^
    let ms = 1000;
    let sec = s*ms;
    let min = m*60*ms;
    let hour = h*60*60*ms;
    return hour + min + sec;
}