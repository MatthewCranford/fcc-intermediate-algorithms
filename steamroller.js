


// function checkSubArr(subArr) {
//   console.log("entering subArr", subArr);
//    var tempFlatArr = [];

//   for(var subItem=0; subItem<subArr.length; subItem++) {
//     console.log(subArr,subArr[subItem],Array.isArray(subArr[subItem]));
//     if (Array.isArray(subArr[subItem])) {
//       checkSubArr(subArr[subItem]);
//         }
//     else {
//       tempFlatArr.push(subArr[subItem]);
//     }
//     console.log("tempFlatArr:",tempFlatArr);
//     return tempFlatArr;
//   }
// }

function steamrollArray(arr) {
  // I'm a steamroller, baby
  
  var flatArr = [];
  
//   console.log("Entering Loop for:", arr);  
  for(var arrItem = 0; arrItem < arr.length; arrItem++) {
//     console.log("arr loop item:",arr[arrItem],"array?:",Array.isArray(arr[arrItem]));
    // if item is an array
    if (Array.isArray(arr[arrItem])) {
      var subArr = arr[arrItem];
      for (var subItem = 0; subItem < subArr.length; subItem++) {
//         console.log("sub loop item:",subArr[subItem]);
        if (Array.isArray(subArr[subItem])) {
          var subSubArr = subArr[subItem];
          for (var subSubItem = 0; subSubItem < subSubArr.length; subSubItem++) {
            if (Array.isArray(subSubArr[subSubItem])) {
              var subSubSubArr = subSubArr[subSubItem];
              for (var subSubSubItem = 0; subSubSubItem < subSubSubArr.length; subSubSubItem++) {
                flatArr.push(subSubSubArr[subSubSubItem]);
              }
            }
            else {
              flatArr.push(subSubArr[subSubItem]);
            }
          }
        }
        else {
          flatArr.push(subArr[subItem]);
        }
      }
    }
    else {
      flatArr.push(arr[arrItem]);
    }
  }
//   console.log("flatArr =" ,flatArr);
  return flatArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
// steamrollArray([[["a"]], [["b"]]]);
