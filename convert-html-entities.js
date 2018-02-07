function convertHTML(str) {
  // &colon;&rpar;
  var newStr;
  
  newStr = str.replace(/&|<|>|'|"/g, function($0) {
    if($0 === "&") {
      return "&amp;";
    }
    else if ($0 ==="<") {
      return "&lt;";
    }
    else if ($0 ===">") {
      return "&gt;";
    }
    else if ($0 ==='"') {
      return "&quot;";
    }
    else if ($0 ==="'") {
      return "&apos;";
    }
  });
  return newStr;
}

convertHTML("Dolce & Gabbana");
