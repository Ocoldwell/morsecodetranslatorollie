const alphabet = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
};
export const translateEnglishToMorse = (text) => {
  // 1. Split the input from the user up into an array of uppercase letters
  let wordArr = text.toUpperCase().split("");
  // 2. Time to find the morse
  const translatedArray = wordArr.map((letter) => alphabet[letter]);
  // 3. Return the value
  return translatedArray.join(" ");
};

export const translateMorseToEnglish = (text) => {
  let morseArr = text.split(" ")
  const alphabetKeys = Object.keys(alphabet)
  console.log(morseArr);
const translatedArray = alphabetKeys.includes(key => alphabet[key] === morseArr);
console.log(translatedArray)
return translatedArray;
};

// 1. Input #1 - Morse (this makes english the output),
// 2.            OR .... it will be english(letters) which amkes morse the output
// 3. Validate the input (Is this valid morse? Is this valid english?)
// 4. Validate the input (Empty inputs, what else?)
// 5. We need to translate this input to the output language
//    Option #1 - Store Two Arrays of 26 values, find the index of one, and you can then find the other
//    Option #2 - Have an object of keyvalues, letters are keys, morse are values
//    Option #3 - Third option - ASCII lookup
//    Option #4 - Two switch cases of 26 cases
// 6. Display this translate on the page
// 000 between each letter
// 0000000 between each word
