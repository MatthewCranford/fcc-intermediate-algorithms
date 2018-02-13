
function truthCheck(collection, pre) {
  // Is everyone being true?
  
  // for each item in collection
  for (var item in collection) {
    // if item's pre === false
    if (!(collection[item][pre])) {
//        console.log(collection[item][pre], "false!");
       return false;
    } 
  } 
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
