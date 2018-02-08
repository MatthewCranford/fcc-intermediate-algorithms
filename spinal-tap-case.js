
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.replace(/\s|_|(?<=[a-z])[A-Z]/g, function(match) {
    if (match === " " || match === "_") {
      return "-";
    }
    else {
      return "-" + match.toLowerCase();  
    }
});
  return str.toLowerCase();
}

spinalCase('This Is Spinal Tap');
