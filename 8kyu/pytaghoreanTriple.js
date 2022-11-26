// https://www.codewars.com/kata/5951d30ce99cf2467e000013

function isPythagoreanTriple(integers) {
    let sorted = integers.sort((a,b) => a-b);
    if (sorted[0]**2 + sorted[1]**2 == sorted[2]**2) {
      return true;
    } else {
      return false;
    }
}