// https://www.codewars.com/kata/5b853229cfde412a470000d0

function twiceAsOld(dadYearsOld, sonYearsOld) {
    let twice = sonYearsOld * 2;
    // if (twice >= dadYearsOld) {
    //     return twice - dadYearsOld;
    // } else {
    //     return dadYearsOld - twice;
    // }
    return twice >= dadYearsOld ? twice - dadYearsOld : dadYearsOld - twice;
}

console.log(twiceAsOld(36,7));
console.log(twiceAsOld(55,30));