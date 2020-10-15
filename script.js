// Assignment Code
let generateBtn = document.querySelector("#generate");

// Create new list arrays for the password criterias.
let specialChar = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
let uppercaseAlphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowercaseAlphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Generate password function.
function generatePassword() {

  // Ask the user for the password length.
  let passLength = prompt("Please enter how long would you like your password to be (Must be between 8-128 characters): ");
  
  // Conditions if the length is not in between 8-128 characters and if it's in between 8-128.
  if(passLength < 8 || passLength >= 128) {
    alert("Password length should be in between 8-128 characters long.");
  }else {

    // Ask the user for the password criteria that they want.
    let userSpecialChar = confirm("Would you like to include special characters in your password? Click OK(yes)/Cancel(no).");
    let userUppercase = confirm("Would you like to include uppercase letters in your password? Click OK(yes)/Cancel(no).");
    let userLowercase = confirm("Would you like to include lowercase letters in your password? Click OK(yes)/Cancel(no).");
    let userNumbers = confirm("Would you like to include numbers in your password? Click OK(yes)/Cancel(no).");
    
    // Create a new array to be filled with the characters from the user choices.
    let password = [];

    // if the user choice is true then get the characters that user want.
    if (userSpecialChar){
      password = password.concat(specialChar);
    }
    if (userUppercase){
      password = password.concat(uppercaseAlphabets);
    }
    if (userLowercase){
      password = password.concat(lowercaseAlphabets);
    }
    if (userNumbers){
      password = password.concat(numbers);
    }

    // Create a new variable for a place to the password result.
    let pass = "";

    // Looping the password array and get a random characters.
    for(let i=0; i < passLength; i++){
      pass += password[Math.floor(Math.random() * password.length)];
    }

    // return pass
    return pass;
  }
}
  
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
