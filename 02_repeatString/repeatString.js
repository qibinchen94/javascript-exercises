const repeatString = function(string, repeatedTimes) {
  if (repeatedTimes < 0) return 'ERROR';
  
  return string.repeat(repeatedTimes);
};

// Do not edit below this line
module.exports = repeatString;
