
function binaryAgent(str) {
  
  var strArr = str.split(" ");
  var convertedArr = [];
  var binArr = [128,64,32,16,8,4,2,1];
  
  // for each binary num in array
    for (var num in strArr) {  
//       console.log("num:", strArr[num]);
      // init total = 0
      var total = 0;
    // for each binary digit in binary number
      for (var digit in strArr[num]) {
//         console.log("digit", strArr[num][digit]);
        // if digit === 1
        if (strArr[num][digit] === "1") {
          // add value of binArr at digit index to total
          total += binArr[digit];
        }
            
      
        
    // convert total to string
        
    // add string to converted array
      }
      convertedArr.push(String.fromCharCode(total));
      console.log("num:",strArr[num],"total:",total,"converted arr:",convertedArr);
    }
  // join and return converted arry
  console.log(strArr);
  return convertedArr.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
