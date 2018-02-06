function pairElement(str) {
  var strArr = str.split('');
  var pairArr = [];
  console.log(strArr);
  for(var element in strArr) {
    switch(strArr[element]) {
      case "G":
        pairArr.push([strArr[element], "C"]);
        break;
      case "C":
        pairArr.push([strArr[element], "G"]);
        break;
      case "A":
        pairArr.push([strArr[element], "T"]);
        break;
      case "T":
        pairArr.push([strArr[element], "A"]);
        break; 
    }
  }
  return pairArr;
}

pairElement("GCG");