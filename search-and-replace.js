
function myReplace(str, before, after) {
 
    // Check both before and after share same capitilization
    var tempArr;
    if (before[0] === before[0].toUpperCase()) {
      if (after[0] === after[0].toLowerCase()) {
        tempArr = after.split('');
        tempArr[0] = tempArr[0].toUpperCase();
        after = tempArr.join('');
      }
    }
    
    var strArr = str.split(' ');
    for (var word in strArr) {
      if (strArr[word] === before) {
        strArr.splice(word,1,after);
        console.log(strArr);
        str = strArr.join(' ');
      }
    }
    return str;
  }
  
  myReplace("His name is Tom", "Tom", "john");