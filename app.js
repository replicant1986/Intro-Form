
document.getElementById("form-btn").addEventListener("click", validateForm);
function validateForm() {
var fnameField = document.getElementById("fname");
var lnameField = document.getElementById("lname");
var emailField = document.getElementById("email");
var passwordField = document.getElementById("password"); 
var responseFname = document.getElementById("response-fname");
var responseLname = document.getElementById("response-lname");
var responseEmail = document.getElementById("response-email");
var responsePass = document.getElementById("response-password");

if (fnameField==null || fnameField==""){
    responseFname.innerHTML = "First Name cannot be empty";
    return false;
} else if (lnameField==null || lnameField==""){
    responseLname.innerHTML = "Last Name cannot be empty"; 
        return false;
    } else if (emailField==null || emailField==""){
        responseEmail.innerHTML = "Looks like this is not an email";
        return false;
    } else if (passwordField==null || passwordField==""){
        responsePass.innerHTML = "Password cannot be empty";
        return false; 
    } 
}
