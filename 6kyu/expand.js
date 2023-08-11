// https://www.codewars.com/kata/5842df8ccbd22792a4000245

function expandedForm(num) {
    let result = [];
    let toExpand = num.toString().split('');
    for (let i = 0; i < toExpand.length; i++ ) {
        let expanded = '';
        if (toExpand[i] === '0') {
            continue;
        } else {
            expanded += toExpand[i] + '0'.repeat(num.toString().length-(i+1));
        }
        result.push(expanded);
    }
    return result.join(' + ');
}

console.log(expandedForm(70304));
console.log(expandedForm(9000000));
console.log(expandedForm(80833660));