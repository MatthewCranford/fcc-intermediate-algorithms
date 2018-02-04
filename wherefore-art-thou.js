
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var sourceKeys = Object.keys(source);
  var tempArr = [];
  
  // Check each object in collection for the value of each of its keys 
  for (var object in collection) {
    for (var key in sourceKeys) {
      if (collection[object][sourceKeys[key]] === source[Object.keys(source)[key]]) {
        tempArr.push(collection[object]);
      }
      else {
        tempArr = [];
        break;
      } 
    }
    if (tempArr.length === 0) {
      continue; 
    }
    else {
      arr.push(tempArr[0]);
      tempArr = [];
    }
  }

  
  // Only change code above this line
  return arr;
}
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });