const removeFromArray = function(originalArray, ...restParams) {
  // for (let item of restParams) {
  //   index = originalArray.indexOf(item);

  //   if (index > -1) originalArray.splice(index, 1);
  
  // }

  // return originalArray;

  return originalArray.filter(item => !restParams.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
