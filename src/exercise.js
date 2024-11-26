/*
 * Capitalize the first letter of a string
 * @param str The string to capitalize
 * @returns {string} The string with the first letter capitalized
 */
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.substring(1, str.length);
};

/*
 * Reverse a string
 * @param str The string to reverse
 * @returns {string} The reversed string
 */
const reverseString = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

/**
 * Calculator object with methods to add, subtract, multiply, and divide
 * @param a The first number
 * @param b The second number
 * @returns {number} The result of the operation
 * */
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};

/*
 * Get the average, min, max, and length of an array and return it as an object.
 * @param arr The array to analyze
 * @returns {Object} Object with the average, min, max, and length
 */
const analyzeArray = (arr) => {
  const average = arr.reduce((acc, num) => acc + num, 0) / arr.length;
  let min = 999999;
  let max = -Infinity;
  arr.forEach((num) => {
    if (num > max) {
      max = num;
    }
    if (num < min) {
      min = num;
    }
  });
  const length = arr.length;

  return { average, min, max, length };
};

/**
 * For each string, get the ascii value, add the shift value,
 * if the value is greater than the length of the array,
 * subtract the length of the array from the value,
 * get the character from the alphabet array and add it to the encrypted string
 * @param str The string to encrypt
 * @param shift The shift value
 * @returns {string} The encrypted string
 */
const caesarCipher = (str, shift) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphabetArr = alphabet.split("");
  let stringToEncrypt = str.toLowerCase();
  let res = "";

  // Loop through length of string
  for (let i = 0; i < str.length; i++) {
    if (alphabetArr.includes(stringToEncrypt[i])) {
      // Get the ascii value of the character and shift it
      let asciiValShifted = stringToEncrypt.charCodeAt(i) - 97 + shift;

      // If the ascii value is greater than or equal to the length of the array,
      // Subtract the length of the array to start the loop again
      if (asciiValShifted >= alphabetArr.length) {
        asciiValShifted -= alphabetArr.length;
      }

      // Get the ascii value in the str parameter to determine if
      // the character should be uppercase
      let asciiValStr = str.charCodeAt(i);
      if (asciiValStr >= 65 && asciiValStr <= 90) {
        res += alphabetArr[asciiValShifted].toUpperCase();
      } else {
        res += alphabetArr[asciiValShifted];
      }
    } else {
      res += str[i];
    }
  }

  return res;
};

export { capitalize, reverseString, calculator, analyzeArray, caesarCipher };
