
function convertToRoman(num) {
  
    var numStr = num.toString();
    var numArr = numStr.split("");
    var romanArr = [];
    
    for(var numItem in numArr) {
      switch(numArr[numItem]){
        case "1": 
          romanArr.push("I");
          break;
        case "2": 
          romanArr.push("II");
          break;
        case "3": 
          romanArr.push("III");
          break;
        case "4": 
          romanArr.push("IV");
          break;
        case "5": 
          romanArr.push("V");
          break;
        case "6": 
          romanArr.push("VI");
          break;   
        case "7": 
          romanArr.push("VII");
          break;
        case "8": 
          romanArr.push("VIII");
          break;
        case "9": 
          romanArr.push("IX");
          break;
      } 
    }
    var romanNum;
  //   console.log(romanArr,romanArr.length);
    if (romanArr.length === 1) {
      romanNum = romanArr.join('');
      return romanNum;
    }
    else if (romanArr.length === 2) {
      switch(romanArr[0]){
        case "I": 
          romanArr.splice(0,1,"X");
          break;
        case "II": 
          romanArr.splice(0,1,"XX");
          break;
        case "III": 
          romanArr.splice(0,1,"XXX");
          break;
        case "IV": 
          romanArr.splice(0,1,"XL");
          break;
        case "V": 
          romanArr.splice(0,1,"L");
          break;
        case "VI": 
          romanArr.splice(0,1,"LX");
          break;   
        case "VII": 
          romanArr.splice(0,1,"LXX");
          break;
        case "VIII": 
          romanArr.splice(0,1,"LXXX");
          break;
        case "IX": 
          romanArr.splice(0,1,"XC");
          break;
      }
      romanNum = romanArr.join('');
      return romanNum;    
    }
    else if (romanArr.length === 3) {
      
      switch(romanArr[0]){
        case "I": 
          romanArr.splice(0,1,"C");
          break;
        case "II": 
          romanArr.splice(0,1,"CC");
          break;
        case "III": 
          romanArr.splice(0,1,"CCC");
          break;
        case "IV": 
          romanArr.splice(0,1,"CD");
          break;
        case "V": 
          romanArr.splice(0,1,"D");
          break;
        case "VI": 
          romanArr.splice(0,1,"DC");
          break;   
        case "VII": 
          romanArr.splice(0,1,"DCC");
          break;
        case "VIII": 
          romanArr.splice(0,1,"DCCC");
          break;
        case "IX": 
          romanArr.splice(0,1,"CM");
          break;
      }
      romanNum = romanArr.join('');
      return romanNum; 
  //   console.log(romanArr);
    }
  }
  
  convertToRoman(500);
  