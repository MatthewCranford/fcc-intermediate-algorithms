
function dropElements(arr, func) {
  // Drop them elements.
  
  for (var i=0; i < arr.length; i++) {
    if (func(arr[i]) !== true) {
      arr.shift();
      i--;
    }
    else {
      return arr;
    }
  }

  return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
