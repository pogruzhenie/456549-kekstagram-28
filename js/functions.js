function checkStringLenght(string, maxLength) {
  return string.length <= maxLength;
}

function isPalindrome(string){
  string = string.replaceAll(' ', '');
  string = string.toLowerCase();
  let stringReversed = '';
  for(let i = string.length - 1; i >= 0; i--){
    stringReversed = stringReversed + string[i];
  }
  return string === stringReversed;
}

function getNumbers(string){
  if(Number.isInteger(string) === false || string < 0){
    string = String(string);
    string = string.replaceAll(' ', '');
    let stringNew = '';
    for(let i = 0; i < string.length; i++){
      if (Number.isInteger(Number(string[i]))){
        stringNew = stringNew + String(Number(string[i]));
      }
    }
    string = (stringNew !== '') ? stringNew : string;
  }
  return Number(string);
}

function addSymbols(string, lengthMin, stringAdd){
  const lenghtString = string.length;
  const lengthStringAdd = stringAdd.length;
  if(lenghtString < lengthMin){
    const lengthAdd = lengthMin - lenghtString;
    let stringSliced = '';
    const iterations = lengthAdd / lengthStringAdd;
    let stringAddNew = '';
    if (Math.trunc(iterations) > 0){
      for(let i = 0; i < Math.trunc(iterations); i++){
        stringAddNew = stringAddNew + stringAdd;
      }
      stringAdd = stringAddNew;
    }
    if(Number.isInteger(iterations) === false){
      const lenghtSlice = lengthAdd % lengthStringAdd;
      stringSliced = stringAdd.slice(0, lenghtSlice);
    }
    string = stringSliced + stringAddNew + string;
  }

  return string;
}
addSymbols('0', 8, 'st');
