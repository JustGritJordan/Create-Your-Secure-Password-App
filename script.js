// GIVEN I need a new, secure password
// Assignment code here

//Step 1:
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// Get references to the #generate element
// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

//Step 2:
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

function generatePassword() {
  var passwordLength = prompt(
    "Enter a password no less than 8 characters and no more than 128 characters"
  );

  //Step 3:
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters

  var lowerPrompt = prompt("Do you want a lowercase character?");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("invalid");
  }

  //Step 4:
  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

  var upperPrompt = prompt("Do you want a uppercase character, yes or no?");
  if (upperPrompt === "yes") {
    // Select and uppercase character from an array
  }
  var numberPrompt = prompt("Do you want a number character, yes or no?");
  if (numberPrompt === "yes") {
    // Select and number character from an array
  }
  var specialPrompt = prompt("Do you want a special character, yes or no?");
  if (specialPrompt === "yes") {
    // Select and uppercase character from an array
  }

  //Step 5:
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected

  //Step 6:
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
}

//Step 7:
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// created empty results to store usuer arrays
// const results[
// ]

// return false
