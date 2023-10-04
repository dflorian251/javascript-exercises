const convertToCelsius = function(f) {
  celsius = ((f - 32) * (5/9));
  return Math.ceil(celsius * 10) / 10 ;
};

const convertToFahrenheit = function(c) {
  fahrenheit = (c * (9/5) + 32) ;
  return Math.ceil(fahrenheit * 10) / 10 ;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
