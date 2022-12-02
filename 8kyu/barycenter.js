// https://www.codewars.com/kata/5601c5f6ba804403c7000004

function barTriang(p1, p2, p3){
    return [Number(((p1[0]+p2[0]+p3[0])/3).toPrecision(5)),Number(((p1[1]+p2[1]+p3[1])/3).toPrecision(5))];
}

console.log(barTriang([4,6],[12,4],[10,10])); 
console.log(barTriang([49,25], [35,29], [24,29]));