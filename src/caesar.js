// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  // helper function: shift that goes beyond alphabet index range
  function wrapValue(toWrap) {
    let exitValue = 0;
    if (toWrap > 25) exitValue = toWrap - 26;
    if (toWrap < 0) exitValue = 26 + toWrap;
    return exitValue;
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function caesar(input, shift, encode = true) {
    //error at shift input
    if (shift === 0 || shift < -25 || shift > 25 || !shift) return false;
    const toCaesarize = input.toLowerCase();
    let result = "";
    //looping through lowercase input
    for (let i = 0; i < toCaesarize.length; i++) {
      let character = toCaesarize[i];
      //encoding only letters
      if (alphabet.includes(character)) {
        let letterValue = alphabet.indexOf(character);
        let newValue;
        //checks for encode vs decode
        encode === false
          ? (newValue = letterValue + shift * -1)
          : (newValue = letterValue + shift);
        //checks for wrap
        if (newValue > 25 || newValue < 0) {
          let altValue = wrapValue(newValue);
          result += alphabet[altValue];
        } else {
          result += alphabet[newValue];
        }
      } else {
        result += character;
      }
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
