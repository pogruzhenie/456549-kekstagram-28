const checkStringLength = (string, maxLength) => string.length <= maxLength;

const isPalindrome = (string) => {
  const stringEdited = string
    .replaceAll(' ', '')
    .toLowerCase();
  let stringReversed = '';
  for(let i = stringEdited.length - 1; i >= 0; i--){
    stringReversed += stringEdited.at(i);
  }
  return stringEdited === stringReversed;
};

const getNumbers = (string) => {
  if(Number.isInteger(string) === false || string < 0){
    string = String(string);
    string = string.replaceAll(' ', '');
    let stringNew = '';
    for(let i = 0; i < string.length; i++){
      if (Number.isInteger(Number(string[i]))){
        stringNew += String(Number(string[i]));
      }
    }
    string = (stringNew !== '') ? stringNew : string;
  }
  return Number(string);
};

const addSymbols = (string, lengthMin, stringAdd) => {

  const lenghtString = string.length;
  const lengthStringAdd = stringAdd.length;
  const lengthAdd = lengthMin - lenghtString;
  const iterations = lengthAdd / lengthStringAdd;
  const lenghtSlice = lengthAdd % lengthStringAdd;
  let stringAddNew = '';
  let stringSliced = '';

  if(lenghtString < lengthMin){
    if (Math.trunc(iterations) > 0){
      for(let i = 0; i < Math.trunc(iterations); i++){
        stringAddNew += stringAdd;
      }
      stringAdd = stringAddNew;
    }
    if(Number.isInteger(iterations) === false){
      stringSliced = stringAdd.slice(0, lenghtSlice);
    }
    string = stringSliced + stringAddNew + string;
  }

  return string;
};
