const convertToCelsius = function(far) {

  let number = (far - 32) * 5/9;
  let rounded = Math.round(number * 10) / 10;
  return rounded

};

const convertToFahrenheit = function(cels) {

  let num = (cels * 9/5) + 32;
  let round = Math.round(num * 10) / 10
  return round

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
