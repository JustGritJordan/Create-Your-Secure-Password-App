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
  //Step 3:
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  var passwordLength = prompt(
    "Enter a password length no less than 8 characters and no more than 128 characters"
  );
  if (passwordLength > 8 || passwordLength < 128) {
    alert("Recevied");
  } else {
    alert("Will not be included");
  }
  //Step 4:
  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

  var lowerPrompt = prompt("Do you want a lowercase character, yes or no?");
  if (lowerPrompt === "yes") {
    alert("Recieved");
  } else {
    alert("Will not be included");
  }

  var upperPrompt = prompt("Do you want a uppercase character, yes or no?");
  if (upperPrompt === "yes") {
    alert("Recieved");
  } else {
    alert("Will not be included");
  }
  var numberPrompt = prompt("Do you want a number character, yes or no?");
  if (numberPrompt === "yes") {
    alert("Recieved");
  } else {
    alert("Will not be included");
  }
  var specialPrompt = prompt("Do you want a special character, yes or no?");
  if (specialPrompt === "yes") {
    alert("Recieved");
  } else {
    alert("Will not be included");
  }

  //Step 5:
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected

  //Step 6:
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria

  var lowerPrompt = [
    "a",
    "b,",
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
  ];
  var upperPrompt = [
    "A",
    "B,",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var numberPrompt = [1232456789];
  var specialPrompt = ["!@#$%^&*"];

  var passwordSelections = [];
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

var passwordLength;

// created empty results to store usuer arrays
// const results[
// ]

// return false
