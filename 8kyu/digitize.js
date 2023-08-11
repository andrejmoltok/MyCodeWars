// https://www.codewars.com/kata/577bd026df78c19bca0002c0

function correct(string)
{
	return string.replace(/[0]/g,'O').replace(/[1]/g,'I').replace(/[5]/g,'S');
}

console.log(correct("L0ND0N"));
console.log(correct("51NGAP0RE"));
console.log(correct("BUDAPE5T"));