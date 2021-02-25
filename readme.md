# Morse Code Translator

This project was designed in 2 days as a challenge for my Nology course, and to practice test driven development as well as good file structure and modular javascript that is easily testable. It translates English to Morse Code and Morse Code to English, this was achieved using an object, and key-value pairs, and then using underscore.js invert function for the Morse Code.

![Screenshot of translator](./hidden/Screenshot%202021-02-25%20at%2022.38.54.png)

![Screenshot of translated text](./hidden/Screenshot%202021-02-25%20at%2022.41.24.png)

***

## Dependencies

_underscore.js, everything else should work out of the box.

## Motivation

I made this for a daily challenge on the Nology.io web development course.
We had two days to work on it, whilst practicing test driven development using Jest and ensuring a good file structure and a clean responsive design.

## Build Status

The translator is functionally complete but has some issues I need to implement tests for, including the returning of undefined in the HTML due to the event listener.

## Built with

- Javascript
- Underscore.js
- Jest
- SASS
- HTML

## Features

This should work for most ASCII characters as well as numbers, characters and words. I used the ._invert() function. The main functionality is determined by three functions, translate() which provides checks using regex for valid characters and then calls the translation functions:

```js
const translateEnglishToMorse= (text) => {
  let wordArr = text.toLowerCase().split("");
  const translatedArray = wordArr.map((letter) => alphabet[letter]);
  return translatedArray.join(" ");
};
const translateMorseToEnglish= (text)=> {
  const invertedAlphabet = invertObject(alphabet)
  const translatedString= text.split('   ').map(word => word.split(' ').map(letter => invertedAlphabet[letter]).join("")).join  ("  ") 
  return translatedString.charAt(0).toUpperCase() + translatedString.slice(1);
};
```

## Testing

 Jest tests have been written for current functionality and it passes all tests, I will be developing further tests and potentially implementing e2e.

## How to Use

Type in the box provided and it should detect the language used and output the translation. To create a new word in morse use 3 spaces between them.

## Extensions

- Web Audio API integration for morse.
- Bug fixes on document.
- Restyling, not set on current style.

## Contributions

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

The code in this project is licensed under MIT license.
