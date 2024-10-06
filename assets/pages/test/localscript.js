// var firstNameInput = document.querySelector("#first-name");
var userNameInput = document.querySelector("#user-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  var user = {
    // firstName: firstNameInput.value.trim(),
    userName: userNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim()
  };

  // set new submission to local storage 
  localStorage.setItem("user", JSON.stringify(user));

   // alert user that the sign up was successful
   alert("Sign-up successful for user: " + user.userName);

   window.location.href = "./assets/pages/test/index.html";
});
