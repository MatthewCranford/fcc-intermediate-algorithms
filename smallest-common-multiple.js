
function smallestCommons(arr) {
  
  // find numerical order
  var first,second;
  if (arr[0] < arr[1]) {
    first = arr[0];
    second = arr[1];
  }
  else {
    first = arr[1];
    second = arr[0];
  }

  var notFound = true; // flag
  var multiple = 0;
  var tempFirst = first;
  var tempSecond = second;
 
  while (notFound) {
    // prevent second from be least common multiple
    tempSecond += second;
    while (tempFirst !== tempSecond) {
      if (tempFirst < tempSecond) {
        tempFirst += first;
      }
      else {
        tempSecond += second;
      }   
    }
    // when both numbers are equal
    // store multiple
    multiple = tempFirst;
    // for each number between first and second
    for(var i = first; i < second; i++) {
      // if multiple is divisible by number
      if (multiple % i === 0) {
        // flag = false
        notFound=false;
      }
      else {
        notFound=true;
        break;
      }
    }
  }  
  return multiple;
}


smallestCommons([1, 13]);
