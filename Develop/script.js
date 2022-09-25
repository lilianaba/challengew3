// Assignment Code
var generateBtn = document.querySelector("#generate");

//creating generatePassword function
function generatePassword(){
console.log("You clicked the botton!!!")

//1-presenting the prompts (the differents options)

//    a. Password length 8<120
  var length = parseFloat(prompt("Enter password lengh from 8 to 128",""));
      
      // passwordlength(length);
   
//    b. Lowercase, uppercase, number, special characters
var lowerCase = confirm("Do you want to include Lowercase characters","");
console.log("lowerCase: " + lowerCase);//verify user selection


var upperCase = confirm("Do you want to include Uppercase characters","");
console.log(`upperCase: ${upperCase}`);//verify user selection


var numbers = confirm("Do you want to include Numbers","");
console.log(`numbers: ${numbers}`);//verify user selection


var specialCharacters= confirm("Do you want to include Special characters","");
console.log(`special characters: ${specialCharacters}`);//verify user selection

// options(lowerCase,upperCase, numbers,specialCharacters);


//2-Validate input length is correct and at least 1 option has been selected
passwordlength(length);
var option = options(lowerCase,upperCase, numbers,specialCharacters);



//3-generate password
return passwordgeneration(length,option);//adding return to actually display the password 



//4-display generated password
// return "Generate password will be displayed here!";
// return password;

//3 AND 4 generate password and display it
var createdPassword ="";
  for (var i = 0; i<= length; i++){
    var randomNumber = Math.floor(Math.random()* option.length);
    createdPassword += option.substring(randomNumber,randomNumber+1);
    // console.log(password);
  }
  // password = document.getElementById("password").value ;
  console.log("Generated password: " + createdPassword);
return createdPassword;

// return;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;// this displays the password in the screen 

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//    a. Password length 8<120
function passwordlength(length){

  if(length >= 8 && length<= 120){
    length == length;

    //validate if my number is storaged
    console.log(length);
    return length;
      
  } else (prompt("Please select a valid number"));
    return;
};

function options(lowerCase, upperCase, numbers, specialCharacters){
  var option=[];

  switch(lowerCase){
    // case false:
     // option;
    case true:
      option = option.concat( "abcdefghijklmnopqrstuvwxyz".split(''));
  }

  switch(upperCase){
    // case false:
      //option;
    case true:
      option = option.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''));
  }

  switch(numbers){
    // case false:
      //option;
    case true:
      option = option.concat('0123456789'.split(''));
  }
  
  switch(specialCharacters){
    // case false:
      //option;
    case true:
      option = option.concat('"');
      option = option.concat(" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split(''))
      // try to change to array
  }

  
  
  if(
    option === 'undefined' || option === "" || option == null){
    
    //  lowerCase === false &&
    //  upperCase === false &&
    //  numbers === false &&
    //  specialCharacters === false) {
    //   option = false;
      alert("At least one option must be selected")
      console.log("password options: " + option );
    
    } else console.log(`password options: ${option}`);
    return option;
    

};

function passwordgeneration(length, option){
  var createdPassword ="";
  for (var i = 0; i< length; i++){
    var randomNumber = Math.floor(Math.random()* option.length);
    createdPassword +=option[randomNumber];
    // console.log(password);
  }
  // password = document.getElementById("password").value ;
  console.log("Generated password: " + createdPassword);
return createdPassword;

}


