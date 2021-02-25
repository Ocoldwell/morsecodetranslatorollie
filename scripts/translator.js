import {alphabet, invertObject} from './data.js'

 export const translator =(text)=> {
  const morse = /^[.-]{1,5}(?:[ \t]+[.-]{1,5})*(?:[ \t]+[.-]{1,5}(?:[ \t]+[.-]{1,5})*)*$/;
  const english = /^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/;
  if (text != null && _.isEmpty(!text) && !text.replace(/\s/g,"")== ""){
  if (morse.test(text) === true) {
    return translateMorseToEnglish(text);
  } else if (english.test(text) === true ) {
    return translateEnglishToMorse(text);
  }
 } else {
    return "Not a valid input"
  }
}

const translateEnglishToMorse= (text) => {
  // 1. Split the input from the user up into an array of uppercase letters
  let wordArr = text.toLowerCase().split("");
  // 2. Time to find the morse
  const translatedArray = wordArr.map((letter) => alphabet[letter]);
  // 3. Return the value
  return translatedArray.join(" ");
};
const translateMorseToEnglish= (text)=> {
  const invertedAlphabet = invertObject(alphabet)
  const translatedString= text.split('   ').map(word => word.split(' ').map(letter => invertedAlphabet[letter]).join('/')).join('//') 
  return translatedString.charAt(0).toUpperCase() + translatedString.slice(1);
};



