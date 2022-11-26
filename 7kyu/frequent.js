// https://www.codewars.com/kata/56582133c932d8239900002e

function mostFrequentItemCount(collection) {
    if (collection.length == 0) return 0;
    let myObj = collection.reduce(function(p,v) {
        const count = p[v] ?? 0;
        return {...p,[v] : count + 1};
      },{});
      const myMax = Math.max.apply(null, Object.values(myObj));
      return myMax;
}

console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]));