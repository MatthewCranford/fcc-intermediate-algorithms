
function smallestCommons(arr) {
  
  var first,second;
  if (arr[0] < arr[1]) {
    first = arr[0];
    second = arr[1];
  }
  else {
    first = arr[1];
    second = arr[0];
  }
  
  console.log(first,second);
  
  var notFound = false;
  // while not found
  while (notFound) {
 
    // while number not equal
      // if first num is smaller
        // add itself to first
      // else second is smaller
        // add itself second
    }
    // when both numbers are equal
    // store multiple
    // for each number between first and second
      // if multiple is divisible by number
        // flag = true
      // else
        // flag = false
        // add first num to itself
        // break
  
    
    
  return arr;
  
 
}


smallestCommons([1,5]);
