// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  var length=prompt('Enter password length');
  while(length<8 || length>128){
    length=prompt('Password must have length between 8 and 128. Enter password length');  
  }

  var valid=false;
  var lowercase, uppercase, digits, special;
  while(!valid){
    lowercase=prompt('Include lower case letters?');
    uppercase=prompt('Include upper case letters?');
    digits=prompt('Include digits?');
    special=prompt('Include special characters?');

    if(lowercase=='y' || uppercase=='y' || digits=='y' || special=='y'){
      valid=true;
    }
    else{
      alert('Password must include at least one of lowercase letters, uppercase letters, digits, special characters');
    }
  }

  var allChars='';
  if(lowercase=='y'){
    allChars+='abcdefghijklmnopqrstuvwxyz';
  }
  if(uppercase=='y'){
    allChars+='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if(digits=='y'){
    allChars+='0123456789';
  }
  if(special=='y'){
    allChars+='!#$%&()*+,-./:;<=>?@[\]^_`{|}~';
  }

  var password='';
  for(var i=0; i<length; i++){
    var index=Math.floor(Math.random()*allChars.length);
    password+=allChars[index];
  }

  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
