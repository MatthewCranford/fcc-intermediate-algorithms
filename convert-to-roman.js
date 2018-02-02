function convertToRoman(num) {
    var numStr = num.toString();
    var numArr = numStr.split("");
    var romanArr = [];
    var romanNum;
    
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
        case "2": 
          romanArr.splice(0,1,"XX");
          break;
        case "3": 
          romanArr.splice(0,1,"XXX");
          break;
        case "4": 
          romanArr.splice(0,1,"XL");
          break;
        case "5": 
          romanArr.splice(0,1,"L");
          break;
        case "6": 
          romanArr.splice(0,1,"LX");
          break;   
        case "7": 
          romanArr.splice(0,1,"LX");
          break;
        case "8": 
          romanArr.splice(0,1,"X");
          break;
        case "9": 
          romanArr.splice(0,1,"X");
          break;
      }
      romanNum = romanArr.join('');
      return romanNum; 
    }
  //   console.log(romanArr);
  
  
  }
  
  convertToRoman(36);
  