
function convertHTML(str) {
  // &colon;&rpar;
  var re = /"&"/;
  var newStr = str.replace(/&/, 'test');
  return newstr;
}

convertHTML("Dolce & Gabbana");
