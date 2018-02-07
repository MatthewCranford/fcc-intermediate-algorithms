
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
 
 
  var newStr = str.replace(/\s|_|[A-Z]/g, function(replace) {
    console.log(replace);
    if(replace.match(/[A-Z]/) && replace !== str[0]) {
       return "-" + replace.toLowerCase();
       }
    else if (replace === str[0]) {
      return replace.toLowerCase();
    }
    else {
      return "-"
    }
      
  });
   console.log(newStr);
  return newStr;
}

spinalCase('This Is Spinal Tap');

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
 
 
  var newStr = str.replace(/\s|_|[A-Z]/g, function(replace) {
    console.log(replace);
    if(replace.match(/[A-Z]/) && replace !== str[0]) {
       return "-" + replace.toLowerCase();
       }
    else if (replace === str[0]) {
      return replace.toLowerCase();
    }
    else {
      return "-"
    }
      
  });
   console.log(newStr);
  return newStr;
}

spinalCase('This Is Spinal Tap');
