// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];



// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompt user to input a number between 8 - 128
var generatePassword = function() {
  var characterOption = prompt("Between 8 to 128, how many characters do you want your password to be?");
  if (!characterOption) {  // User leaves field blank, display alert and run function again
    alert("This field cannot be blank");
    generatePassword();
  } else if (characterOption < 8 || characterOption > 128) {  //User enters number outside of range
    characterOption = alert("Your value needs to be between 8 and 128!");
    generatePassword();
  } else if (characterOption === null) {
      return; // Exit out of the function
  } else {     // Display and save prompt responses
      var specialCharacters = confirm("Click OK to include special characters.");
      var numbers = confirm("Click OK to include numbers.");
      var lowerCase = confirm("Click OK to include lowercase letters.");
      var upperCase = confirm("Click OK to include uppercase letters.");
  };

// Assign variables as an object? 
};




// Concatenate the variables using a new variable



// Use a for loop until it reaches the number entered



// Covert variable to a string