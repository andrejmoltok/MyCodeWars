// https://www.codewars.com/kata/57a429e253ba3381850000fb

function bmi(w, h) {
    return (w/(Math.pow(h,2))) <= 18.5 ? "Underweight" : (w/(Math.pow(h,2))) <= 25.0 ? "Normal" : (w/(Math.pow(h,2))) <= 30.0 ? "Overweight" : (w/(Math.pow(h,2))) > 30 ? "Obese" : "";
}

console.log(bmi(80,1.80));
console.log(bmi(110,1.90));