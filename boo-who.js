
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  var boolObj = Boolean(bool); 
  if(bool === true || bool === false) {
    return true;
  }
  else {
    return false;
  }
}

booWho(null);
