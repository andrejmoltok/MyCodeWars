function toCsvText(array) {
    // let output = "";
    // let carr = "\\n";
    // for (let i = 0; i < array.length; i++) {
    //     if (i == array.length-1) {
    //         output += array[i].toString();
    //     } else {
    //         output += array[i].toString() + carr;
    //     }
    // }
    // return output;
    return array.reduce(function(p,c,i,a) {i == a.length-1 ? p+=c.toString() : p+=c.toString() + "\\n";return p;},"");
}

console.log(toCsvText([[1,2,3,4,5],[7,8,9,10,11],[12,13,14,15,16]]));