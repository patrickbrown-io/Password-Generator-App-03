// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/// Variables - Arrays for Password
var numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~",];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

var passwordString = [];

////user inputs
var userLength = "";
var confirmSpecialChar;
var confirmLowerChar;
var confirmUpperChar;
var confirmNumbers;


function generatePassword() {
//////////MY CODE/////////////////
///Prompt user for password length. Must be a number between 8 and 128 characters. Refuse if <8 or >128.

//resets the arrays between uses
var passwordString = [];
var passwordArray = [];

var userLength = (prompt("How many characters would you like your password to contain?"));
//Runs the userLength
userLength;
//Doesn't meet length requirements
  while(userLength < 8 || userLength > 128) {
      alert("Password length must be between 8-128 characters Try again");
      var userLength = (prompt("How many characters would you like your password to contain?"));
      } 
///user length console log
// console.log(userLength);

///////ASK USER TO CONFIRM lower, upper, numbers, special char

///Prompts user for Lower case
var confirmLowerChar= confirm("Would you like your new password to contain lower case characters?");
//confirmLowerChar console log
// console.log(confirmLowerChar);

//prompts user for UPPER CASE
var confirmUpperChar = confirm("Would you like your new password to contain UPPER CASE CHARACTERS");
//confirm UPPER CASE
// console.log(confirmUpperChar);

//prompts user for numbers
var confirmNumberChar = confirm("Would you like your new password to contain numbers?")

///Prompts user for specialChar allotment
var confirmSpecialChar = confirm("Would you like your new password to contain special characters?");
//User Special Char console log
// console.log(confirmSpecialChar);

//////IF USER SELECTS NONE OF THE ABOVE
    while(confirmLowerChar === false && confirmUpperChar === false && confirmSpecialChar === false && confirmNumberChar === false) {
        alert("You must choose at least one parameter for your new password. Please choose AT LEAST one character type");
      var confirmLowerChar= confirm("Would you like your new password to contain lower case characters?");
      var confirmUpperChar = confirm("Would you like your new password to contain UPPER CASE CHARACTERS?");
      var confirmNumbers = confirm("Would you like your new password to contain numbers?");
      var confirmSpecialChar = confirm("Would you like your new password to contain special characters?");
    };

///USER SELECTIONS CREATE NEW STRING
// console.log(passwordString);

if (confirmLowerChar){
passwordString += lowerChar;
};

if (confirmUpperChar){
  passwordString+= upperChar;
};

if(confirmNumberChar){
  passwordString+=numberChar;
}

if(confirmSpecialChar){
  passwordString+=specialChar;
}

//New created string becomes an Array
passwordArray =passwordString.split(",");
console.log(passwordArray);

var password = "";

//pull random elements from the passwordArray until you hit the character limit
      for (var i = 0; i < userLength; i++) {
        password = password + passwordArray[Math.floor(Math.random() * passwordArray.length)];}

return password;
}