// https://www.codewars.com/kata/54da539698b8a2ad76000228

function isValidWalk(walk) {
    
  if (walk.length !== 10) {
    return false;
  }

  let x = 0;
  let y = 0;

  for (let direction of walk) {
    switch (direction) {
      case 'n':
        y++;
        break;
      case 's':
        y--;
        break;
      case 'e':
        x++;
        break;
      case 'w':
        x--;
        break;
      default:
        return false;
    }
  }

  return x === 0 && y === 0;
}

console.log(isValidWalk(['n','s']));