function convertOnes(numToConvert){
  switch(numToConvert){
    case "1": 
      return "I";
    case "2": 
      return "II";
    case "3": 
      return "III";
    case "4": 
      return "IV";
    case "5": 
     return "V";
    case "6": 
      return "VI";   
    case "7": 
      return "VII";
    case "8": 
      return "VIII";
    case "9": 
      return "IX";
  } 
}

function convertTens(numToConvert) {
    switch(numToConvert){
      case "1": 
        return "X";
      case "2": 
        return "XX";
      case "3": 
        return "XXX";
      case "4": 
        return "XL";
      case "5": 
       return "L";
      case "6": 
        return "LX";   
      case "7": 
        return "LXX";
      case "8": 
        return "LXXX";
      case "9": 
        return "XC";
    } 
  } 

function convertHundreds(numToConvert) {
    switch(numToConvert){
      case "1": 
        return "C";
      case "2": 
        return "CC";
      case "3": 
        return "CCC";
      case "4": 
        return "CD";
      case "5": 
       return "D";
      case "6": 
        return "DC";   
      case "7": 
        return "DCC";
      case "8": 
        return "DCCC";
      case "9": 
        return "CM";
    } 
  } 

function convertThousands(numToConvert) {
    switch(numToConvert){
      case "1": 
        return "M";
      case "2": 
        return "MM";
      case "3": 
        return "MMM";
    } 
  } 

function convertToRoman(num) {
  var numStr = num.toString();
  var numArr = numStr.split("");
  
  if (numArr.length === 1) {
    numArr.splice(0,1,convertOnes(numArr[0])) ;
    return numArr.join('');
  }
  else if (numArr.length === 2) {
    numArr.splice(0,1,convertTens(numArr[0]));
    numArr.splice(1,1,convertOnes(numArr[1]));
    return numArr.join('');  
  }
  else if (numArr.length === 3) {
    numArr.splice(0,1,convertHundreds(numArr[0]));
    numArr.splice(1,1,convertTens(numArr[1]));
    numArr.splice(2,1,convertOnes(numArr[2]));
    return numArr.join(''); 
  }
  else if (numArr.length === 4) {
    numArr.splice(0,1,convertThousands(numArr[0]));
    numArr.splice(1,1,convertHundreds(numArr[1]));
    numArr.splice(2,1,convertTens(numArr[2]));
    numArr.splice(3,1,convertOnes(numArr[3]));
    return numArr.join(''); 
  }
}
convertToRoman(500);
