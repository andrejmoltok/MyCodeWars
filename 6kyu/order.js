// https://www.codewars.com/kata/55c45be3b2079eccff00010f

function order(words){
    let wordarr = words.split(' ');
    let myObj = {};
    for (let i = 0; i < wordarr.length; i++) {
        for (let j = 0; j < wordarr[i].length; j++) {
            if (!isNaN(wordarr[i][j])) {
                myObj[wordarr[i]] = wordarr[i][j]
            }
        }
    }
    const sorted = Object.entries(myObj).sort((a, b) => a[1].localeCompare(b[1]));
    const final = {};
    sorted.forEach(([key, value]) => {
        final[key] = value;
    });
    return Object.keys(final).join(' ');
}

console.log(order('is2 Thi1s T4est 3a'));