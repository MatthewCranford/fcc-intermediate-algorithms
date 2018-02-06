function fearNotLetter(str) {
  
  var strArr = str.split('');
    for(var letter in str) {
      console.log(str[letter]);
      if(letter > 0 && str.charCodeAt(letter) !== ((str.charCodeAt(letter -1)) +1)) {
         return String.fromCharCode(str.charCodeAt(letter -1) +1);
      }
     }
     return undefined;
  }
  
  fearNotLetter("abce");