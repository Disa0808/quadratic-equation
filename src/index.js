module.exports = function solveEquation(equation) {
  let coefficients = equation.replace(/ /g,'').match(/(-?[^\^]{1}[\d]+)/g);
  let a = coefficients[0];
  for(var i = 0; i < coefficients.length; i++) {
   if (a < 0) {
     coefficients[i] = -1 * coefficients[i];
   } else {
     coefficients[i] = parseInt(coefficients[i]);
   }
  }
  var D = coefficients[1] * coefficients[1] - 4 * coefficients[0] * coefficients[2];
  console.log(D);
  if (D >= 0) {
    return  [Math.round((-coefficients[1] - Math.sqrt(D))/2/coefficients[0]),Math.round((-coefficients[1] + Math.sqrt(D))/2/coefficients[0])];
  }
}
