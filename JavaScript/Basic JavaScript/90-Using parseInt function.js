/*
Explanation:
The parseInt() function parses a string and returns an integer. Here's an example:

const a = parseInt("007");
The above function converts the string 007 to the integer 7. If the first character in the string can't be converted into a number, then it returns NaN.

Exercise:
Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.

Tests:
Waiting:convertToInteger should use the parseInt() function
Waiting:convertToInteger("56") should return a number
Waiting:convertToInteger("56") should return 56
Waiting:convertToInteger("77") should return 77
Waiting:convertToInteger("JamesBond") should return NaN

*/
function convertToInteger(str) {
  return parseInt(str)
}

console.log(convertToInteger("56"));