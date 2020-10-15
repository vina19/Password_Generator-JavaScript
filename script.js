// Assignment Code
let generateBtn = document.querySelector("#generate");

let specialChar = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
let uppercaseAlphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowercaseAlphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function generatePassword() {

  let passLength = prompt("Please enter how long would you like your password to be (Must be between 8-128 characters): ");
  
  if(passLength < 8 || passLength >= 128) {
    alert("Password length should be in between 8-128 characters long.");
  }else {
    let userSpecialChar = confirm("Would you like to include special characters in your password? Click OK(yes)/Cancel(no).");
    let userUppercase = confirm("Would you like to include uppercase letters in your password? Click OK(yes)/Cancel(no).");
    let userLowercase = confirm("Would you like to include lowercase letters in your password? Click OK(yes)/Cancel(no).");
    let userNumbers = confirm("WOuld you like to include numbers in your password? Click OK(yes)/Cancel(no).");
}
  
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
