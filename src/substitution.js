// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function checkForDuplication(alphaIn) {
    let obj = {};
    for (let i = 0; i < alphaIn.length; i++) {
      let letter = alphaIn[i];
      if (obj[letter]) return false;
      obj[letter] = true;
    }
    return true;
  }

  let alphaKey = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    " ",
  ];

  function mapAlphabet (realAlpha, codedAlpha) {
    let result = [];
    for (let i = 0; i < realAlpha.length; i++) {
      let letter = realAlpha[i];
      let codedLetter = codedAlpha[i];
      let newLetter = "";
      if (codedLetter === undefined) {
        newLetter = " ";
      } else {
        newLetter = codedLetter;
      }
      result += realAlpha[letter] = newLetter;
    }
    console.log(result)
    return result
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet || alphabet.length !== 26 || !checkForDuplication(alphabet)) return false;
    
    let cipher = input.toLowerCase()
    mapAlphabet(alphaKey, alphabet)

    if (encode === true) {
      return cipher
        .split("")
        .map((letter) => {
          return alphaKey[letter];
        })
        .join("");
    } else {
      const swapAlphaKey = Object.keys(alphaKey).reduce((char, value) => {
        char[alphaKey[value]] = value;
        return char
      }, {});
      return cipher
        .split("")
        .map((letter) => {
          return swapAlphaKey[letter];
        })
        .join("");
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };