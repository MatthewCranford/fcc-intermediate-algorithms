
function sumPrimes(num) {
  var numArr = [];
  var count = 0;
  
  // for each number up to number
  for (var i=1; i<=num; i++) {   
    count = 0;
    // check if prime
    for (var j=1; j<=i; j++) {
      if ( i % j === 0) {
        count++;
      }
    }
    if (count === 2) {
      numArr.push(i);
    }
  }
  var total =0;
  for(var k=0; k<=numArr.length -1 ; k++) {
    total += numArr[k];
  }
  return total;
}

sumPrimes(977);