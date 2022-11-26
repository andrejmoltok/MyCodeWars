// https://www.codewars.com/kata/51fc12de24a9d8cb0e000001

function validISBN10(isbn) {
    // TODO: return true if (and only if) isbn is a valid 10-digit ISBN.
    let isbnSplit = isbn.split('');

    if (isbnSplit.length !== 10) {return false;}

    if (isbnSplit.includes('X') && isbnSplit.indexOf('X') != isbnSplit.length-1) {return false;}

    isbnSplit.forEach(function(v,i,a) {a[a.length-1] == 'X' ? a[i] = 10 : a[i] = Number(a[i])});

    if (isbnSplit.some((v) => isNaN(v))) {
        return false;
    }
    
    return isbnSplit.reduce(function(p,c,i,a){p += (i+1)*c;return p;},0) % 11 == 0;
}


console.log(validISBN10('048665088X'));
console.log(validISBN10('1293'));
console.log(validISBN10('ABCDEFGHIJ'));
console.log(validISBN10('X123456788'));
console.log(validISBN10('XXXXXXXXXX'));
console.log(validISBN10('1112223339'));