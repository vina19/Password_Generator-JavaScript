// Assignment Code
let generateBtn = document.querySelector("#generate");

// Create new list arrays for the password criterias.
let specialChar = "!\"#$%&'()*+\,-./:;<=>?@[\\]^_`{|}~";
let uppercaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseAlphabets = "abcdefghijklmnopqrstuvwxyz";
let numbers = ["hello"];
  //"0123456789";

let userPasswordChoice = "";
console.log(userPasswordChoice);

// Generate password function.
function generatePassword() {

  // Ask the user for the password length.
  let userPassLengthInput = prompt("Please enter how long would you like your password to be (Must be between 8-128 characters): ");

  // Conditions if the length is not in between 8-128 characters and if it's in between 8-128.
  if (userPassLengthInput < 8 || userPassLengthInput > 128) {
    alert("Password length should be in between 8-128 characters long.");
  }
  else {
    // Ask the user to confirm which password criteria that they want to have in their password.
    let userSpecialCharConfirm = confirm("Would you like to include special characters in your password? Click OK(yes)/Cancel(no).");
    let userUppercaseConfirm = confirm("Would you like to include uppercase letters in your password? Click OK(yes)/Cancel(no).");
    let userLowercaseConfirm = confirm("Would you like to include lowercase letters in your password? Click OK(yes)/Cancel(no).");
    let userNumbersConfirm = confirm("Would you like to include numbers in your password? Click OK(yes)/Cancel(no).");

    // Condition if the user decided to not choose any of the password criteria
    if (userSpecialCharConfirm === false && userUppercaseConfirm === false && userLowercaseConfirm === false && userNumbersConfirm === false) {
      alert("Your password must contain at least one of the uppercase letters, lowercase letters, special characters, or numbers.");
      generatePassword();
    }

    // if the user choice is true then add the characters that user want to the userPasswordChoice variable.
    if (userSpecialCharConfirm) {
      userPasswordChoice += specialChar;
    }
    if (userUppercaseConfirm) {
      userPasswordChoice += uppercaseAlphabets;
    }
    if (userLowercaseConfirm) {
      userPasswordChoice += lowercaseAlphabets;
    }
    if (userNumbersConfirm) {
      userPasswordChoice += numbers;
    }
  }

  // Create a new variable for a place to the password result.
  let resultUserPassword = "";
  console.log(resultUserPassword);

  // Looping the password array and get a random characters.
  for (let i=0; i < userPassLengthInput; i++) {
    resultUserPassword += userPasswordChoice.charAt(Math.floor(Math.random() * userPasswordChoice.length));
  }

  // return password result to the user
  return resultUserPassword;

}
  
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
