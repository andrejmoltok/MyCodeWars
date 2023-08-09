// https://www.codewars.com/kata/587309155cfd6b9fb60000a0

function money_value(s) { 
    let inNumberFormat = parseFloat(s.replace(/\s*\$\s*|,/g, ''));
    //console.log(inNumberFormat);
    return isNaN(inNumberFormat) ? (0).toPrecision(2) : inNumberFormat;
}

console.log(money_value('   .11'));
console.log(money_value(' $ 89'));
console.log(money_value('$-2.3456'));
console.log(money_value('-0.89'));
console.log(money_value("-.34"));
console.log(money_value("$.2"));
console.log(money_value("007"));
console.log(money_value("$-2.3456"));
console.log(money_value("-$ 0.1"));
console.log(money_value('$$$'));