// // GIVEN I need a new, secure password
// // Assignment code here

// //Step 1:
// // WHEN I click the button to generate a password
// // THEN I am presented with a series of prompts for password criteria

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = prompt(
    "Enter a password length no less than 8 characters and no more than 128 characters"
  );
  if (passwordLength > 8 && passwordLength < 128) {
    alert("Recevied");
  } else {
    alert("Invalid Input");
  }
  var generatePasswordArray = [];
  var lowerPrompt = prompt("Do you want a lowercase character, yes or no?");

  if (lowerPrompt === "yes") {
    var lowerLetterChar = [
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
    ];
    generatePasswordArray = generatePasswordArray.concat(lowerLetterChar);
    // var randomLowerLetter = Math.floor(Math.random() * lowerLetterChar.length);
    // console.log(lowerLetterChar[randomLowerLetter]);

    // for (var i = 0; i < lowerLetterChar.length; i = i + 1) {
    //   // console.log(lowerLetterChar[i]);
    // }
    //
    alert("Recieved");
    // Place for randamization of lower letter charters array
  } else {
    alert("Will not be included");
  }

  var upperPrompt = prompt("Do you want a uppercase character, yes or no?");
  var upperCaseLetters = [
    "A",
    "B",
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
  if (upperPrompt === "yes") {
    generatePasswordArray = generatePasswordArray.concat(upperCaseLetters);
    alert("Recieved");
  } else {
    alert("Will not be included");
  }

  var numberPrompt = prompt("Do you want a number character, yes or no?");
  var numbers = ["0", "1", "2", "3", "2", "4", "5", "6", "7", "8", "9"];
  if (numberPrompt === "yes") {
    generatePasswordArray = generatePasswordArray.concat(numbers);
    alert("Recieved");
  } else {
    alert("Will not be included");
  }

  var specialPrompt = prompt("Do you want a special character, yes or no?");
  var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"];
  if (specialPrompt === "yes") {
    generatePasswordArray = generatePasswordArray.concat(specialChar);
    alert("Recieved");
  } else {
    alert("Will not be included");
  }
  var randompassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomLowerLetter = Math.floor(
      Math.random() * generatePasswordArray.length
    );
    randompassword += generatePasswordArray[randomLowerLetter];
  }
  return randompassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var passwordSelections = [];
// // created empty results to store usuer arrays
