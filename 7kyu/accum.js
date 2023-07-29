// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(s) {
	return s.split('').map((v, i) => {
        return v.toUpperCase() + v.toLowerCase().repeat(i);
      }).join('-');
}

console.log(accum('abcd'));