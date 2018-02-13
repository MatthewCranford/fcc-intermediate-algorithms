
function addTogether() {
  
  // check if args are valid numbers
  for (var arg in arguments) {
    if (!(Number.isInteger(arguments[arg]))) {
//       console.log(arguments[arg]);
      return undefined;   
    } 
  }
  // if args length === 2
  // return added args
  
  // else
  
}

addTogether(2,3);
