const convertToCelsius = function(FahrenheitTemp) {
  let celsiusTemp = (FahrenheitTemp - 32) * (5 / 9);
  return +celsiusTemp.toFixed(1);
};

const convertToFahrenheit = function(celsiusTemp) {
  let fahrenheitTemp = celsiusTemp * (9 / 5) + 32;
  return +fahrenheitTemp.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
