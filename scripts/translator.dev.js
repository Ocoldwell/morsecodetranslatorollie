"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translator = void 0;

var _data = require("./data.js");

var translator = function translator(text) {
  var morse = /^[.-]{1,5}(?:[ \t]+[.-]{1,5})*(?:[ \t]+[.-]{1,5}(?:[ \t]+[.-]{1,5})*)*$/;
  var english = /^[a-zA-Z0-9,\)\(:=/"%$@$!%*?&#^-_. +]+$/;

  if (text != null && _.isEmpty(!text) && !text.replace(/\s/g, "") == "") {
    if (morse.test(text) === true) {
      return translateMorseToEnglish(text);
    } else if (english.test(text) === true) {
      return translateEnglishToMorse(text);
    }
  } else {
    return 'invalid or no input';
  }
};

exports.translator = translator;

var translateEnglishToMorse = function translateEnglishToMorse(text) {
  // 1. Split the input from the user up into an array of uppercase letters
  var wordArr = text.toLowerCase().split(""); // 2. Time to find the morse

  var translatedArray = wordArr.map(function (letter) {
    return _data.alphabet[letter];
  }); // 3. Return the value

  return translatedArray.join(" ");
};

var translateMorseToEnglish = function translateMorseToEnglish(text) {
  var invertedAlphabet = (0, _data.invertObject)(_data.alphabet);
  var translatedString = text.split('   ').map(function (word) {
    return word.split(' ').map(function (letter) {
      return invertedAlphabet[letter];
    }).join("");
  }).join("  ");
  return translatedString.charAt(0).toUpperCase() + translatedString.slice(1);
};