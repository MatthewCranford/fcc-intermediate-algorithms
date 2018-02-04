
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
//   console.log(collection,source);
//   console.log(collection[0].hasOwnProperty("first"));
  
  // Check each object in collection for the value of each of its keys 
  for (var object in collection) {
    console.log(collection[object]);
    console.log(Object.keys(source));
    var tempArr = [];
    for (var key in Object.keys(source)) {
      
      console.log(Object.keys(source)[key]);
      if (collection[object].hasOwnProperty(Object.keys(source)[key]) && collection[object][Object.keys(source)[key]] === source[Object.keys(source)[key]]  ) {
        console.log(collection[object][Object.keys(source)[key]]);
        console.log(source[Object.keys(source)[key]]);
        tempArr.push(collection[object]);
        console.log(arr);
      }
      else {
        tempArr = [];
        break;
      }
      
    }
    if (tempArr[0] === null) {
      arr.push(tempArr[0]);  
    }
//     else {
//       arr.push(tempArr[0]);
//     }
    
//     console.log(collection[object].hasOwnProperty(Object.keys(source)[0]));
//     if (collection[object].hasOwnProperty(Object.keys(source)) && collection[object][Object.keys(source)] === source[Object.keys(source)]) {
//       arr.push(collection[object]);
//     }
   
  }
  // If key/value pair is equal, add to array
  
  // Only change code above this line
  return arr;
}
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });