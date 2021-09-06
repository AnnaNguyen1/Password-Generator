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

// Assigning Password options
var specialCharacters = [];
var numbers = [];
var lowerCase = [];
var upperCase =[];
var characterOption = "";

// Assigning generated password
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
  if (characterOption === "") {  // User leaves field blank, display alert and run function again
    alert("This field cannot be blank");
    generatePassword();
  } else if (characterOption < 8 || characterOption > 128) {  //User enters number outside of range
    characterOption = alert("Your value needs to be between 8 and 128!");
    generatePassword();
  } else if (characterOption === null) {
      return; // Exit out of the function
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


  
  // Possible char values with 4 conditionals
  var passwordText = []
  
  if (specialCharacters) {
    passwordText.concat(specialCharacterSet);
    console.log(passwordText);
  } 
  
  if (numbers) {
    passwordText.concat(numericCharacters);
    console.log(passwordText);
  }
  
  if (lowerCase) {
    passwordText.concat(lowerCasedCharacters);
    console.log(passwordText);
  }
  
  if (upperCase) {
    passwordText.concat(upperCasedCharacters);
    console.log(passwordText);
  }


  // Use a for loop until it reaches the number entered & convert to string
  for (var i = 0; i < characterOption; i++) {
    var randomise = passwordText[Math.floor(Math.random() * passwordText.length)];
    passwordText.push(randomise);
  }

  console.log(passwordText + passwordText.type)
};











