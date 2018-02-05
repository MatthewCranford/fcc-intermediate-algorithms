
function translatePigLatin(str) {
    var strArr = str.split('');
    var vowelsArr = ['a','e','i','o','u'];
    switch(strArr[0]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        strArr.push('way');
        break;
      default:
        var firstLetter = strArr.shift(strArr[0]);
        if (vowelsArr.indexOf(strArr[0]) === -1) {
          var secondLetter = strArr.shift(strArr[0]);
          strArr.push(firstLetter + secondLetter + 'ay');
        }
        else {
          strArr.push(firstLetter + 'ay');
        }
    }
    str= strArr.join('');
    return str;
  }
  
  translatePigLatin("consonant");
  