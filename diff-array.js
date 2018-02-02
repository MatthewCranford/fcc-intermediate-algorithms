
function diffArray(arr1, arr2) {
    var newArr,check1,check2;

    check1 = arr1.filter(function(element) {
        console.log(element);
        return !(arr2.includes(element));
      });
    check2 = arr2.filter(function(element) {
        console.log(element);
        return !(arr1.includes(element));
      });
    newArr = check1.concat(check2);
    return newArr;
  }
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  