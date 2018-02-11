
function checkSubArr(subArr) {
  if (Array.isArray(arr[i])) {
      flatArr.push(arr[i][0]);
    }
}

function steamrollArray(arr) {
  // I'm a steamroller, baby
  
  // store flat array
  var flatArr = [];
  
  // for each item in arr
  for(var i = 0; i < arr.length; i++) {
    //if item is an array
    if (Array.isArray(arr[i]) && checkSubArr(arr[i]) === false) {
      flatArr.push(arr[i][0]);
    }
    console.log(arr,Array.isArray(arr[i]));
  }
  return flatArr;
}

// steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([[["a"]], [["b"]]]);
