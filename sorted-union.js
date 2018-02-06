
function uniteUnique(arr) {
  var uniqueArr = [];
  for (var arg in arguments) {
    for (var number in arguments[arg]) {
      if (uniqueArr.includes(arguments[arg][number])) {
        continue;
      }
      else {
        uniqueArr.push(arguments[arg][number]);
      }
    }
  }
  return uniqueArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
