
function sumPrimes(num) {
  var numArr = [];
  var count = 0;
  // Loop up to num
  for (var i=2; i<=num; i++) {
    console.log(i);
    // Check if prime
    for (var j=1; j<=i; j++) {
      if ( i % j === 0) {
        count++;
      }
    if (count === 1) {
      numArr.push(i);
    }
    }
   
      // push to array
  
  // loop and sum each num in array
  }
  
  console.log(numArr);
  return num;
}

sumPrimes(10);
