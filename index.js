const passwordBox = document.getElementById("password");
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefjhijklmnopqrstuvwxyz";
let number = "0123456789";
let specialChars = "@#$%~&*(){}[]";
const allChars = upperCase + lowerCase + number + specialChars ;
let length = 12;
function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += specialChars[Math.floor(Math.random()*specialChars.length)];

    while (length>password.length) {
    password += allChars[Math.floor(Math.random()*allChars.length)];
        
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}