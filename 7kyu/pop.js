// https://www.codewars.com/kata/563b662a59afc2b5120000c6

function nbYear(p0, percent, aug, p) {
    //p0 + p0 * percent + aug
    let n = 0;
    while (!(p0 >= p)) {
        p0 += (Math.ceil(p0) * (percent/100)) + aug;
        //console.log(Math.floor(p0));
        n++;
    }
    return n;
}

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1000, 2.0, 50, 1214));