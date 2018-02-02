function sumAll(arr) {
    var sum = 0;
    
    // Use .apply to use min/max on array.
    // Pass null to avoid infinity.
    for(var i=Math.min.apply(null,arr); i<= Math.max.apply(null,arr); i++) {
      sum += i;
    }
    return sum;
  }
  sumAll([1, 4]);
  