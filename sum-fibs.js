
function sumFibs(num) {
  var a = 1, b = 0, temp, sum=0, count=num;
  
  while (count >= 0) {
    if (a % 2 !== 0 && a <= num) {
      sum += a;
    }
    temp = a;
    a = a + b;
    b = temp;
    count--;
    
  }
  return sum;
}

sumFibs(4);
