// Array of special characters to be included in password
var specialCharacterSet = [
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

// Assigning Password options as arrays
var specialCharacters = [];
var numbers = [];
var lowerCase = [];
var upperCase = [];
var characterOption = [];

// Assigning generated password as a string
var genPassword = "";

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
  characterOption = prompt("Between 8 to 128, how many characters do you want your password to be?");
  
  // "null" is returned when user cancels therefore need to kill the process.
  if (characterOption === null) return;
  
  // User enters a string, so need to return as an integer
  characterOption = parseInt(characterOption, 10)
  
  // Number.isNan = determine whether it is a number that is passed. If not then display alert.
  if (Number.isNaN(characterOption)) {  
    alert("A number needs to be entered and cannot be left blank!");
    generatePassword();
  } else if (characterOption < 8 || characterOption > 128) {  // User enters number outside of range
    characterOption = alert("Your value needs to be between 8 and 128!");
    generatePassword();
  } else {     // Display and save prompt responses
      specialCharacters = confirm("Click OK to include special characters.");
      numbers = confirm("Click OK to include numbers.");
      lowerCase = confirm("Click OK to include lowercase letters.");
      upperCase = confirm("Click OK to include uppercase letters.");
  };

  // No criteria was chosen, display message and exit
  if (!specialCharacters && !numbers && !lowerCase && !upperCase) {
    alert("You must choose at least one criteria!");
    return;
  }

  // Randomise arrays that are to be included
  var passwordTextArray = []
  
  if (specialCharacters) {
    passwordTextArray = passwordTextArray.concat(specialCharacterSet)
  } 
  
  if (numbers) {
    passwordTextArray = passwordTextArray.concat(numericCharacters)
  }
  
  if (lowerCase) {
    passwordTextArray = passwordTextArray.concat(lowerCasedCharacters)
  }
  
  if (upperCase) {
    passwordTextArray = passwordTextArray.concat(upperCasedCharacters)
  }

  // Use a for loop until it reaches the number entered
  for (var i = 0; i < characterOption; i++) {
    genPassword = genPassword + passwordTextArray[Math.floor(Math.random() * passwordTextArray.length)];
  }
  console.log(genPassword);
  
  // Return password that was generated
  return genPassword;
};










