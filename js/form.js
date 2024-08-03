const username=document.getElementById('username');
      email = document.querySelector("#email"),
      password = document.querySelector("#password"),
      repassword = document.querySelector("#repassword"),
      sendBtn = document.querySelector("#sendBtn"),


      eventListeners();
function eventListeners() {
    
  document.addEventListener("DOMContentLoaded", appInit);

  email.addEventListener("blur", validateField);
  username.addEventListener("blur", validateField);
  password.addEventListener("blur", validateField);
  repassword.addEventListener("blur", validateField);
  form.addEventListener("submit", submitForm);
  sendBtn.addEventListener("click" ,sendIt)
}
function appInit() {
  
  sendBtn.disabled = true;

}
function submitForm(e) {
  e.preventDefault();
}

function validateField(){

  sendIt(this)
  if(username.value === ''){
      document.getElementById('name-error').innerHTML = 'Username is required';
     username.style.borderColor = "red";
     username.style.borderWidth = "medium";
      return false;
      }
  else{
      document.getElementById('name-error').innerHTML = '';
      username.style.borderColor = "green";
      username.style.borderWidth = "medium";
  }
   if(email.value === '' ){
    document.getElementById('email-error').innerHTML = 'Email is required';
    email.style.borderColor = "red";
    email.style.borderWidth = "medium";
    return false;
    }
    var pattern = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");
  var regexResult = pattern.test(email.value);
  if (!regexResult) {
    email.style.borderColor = "red";
    email.style.borderWidth = "medium";
      document.getElementById('email-error').innerHTML = 'Email adress is invalid';
    }
else{
    document.getElementById('email-error').innerHTML = '';
    email.style.borderColor = "green";
    email.style.borderWidth = "medium";
}

  if(password.value === ''){
    document.getElementById('pass-error').innerHTML = 'Password is required';
    password.style.borderColor = "red";
    password.style.borderWidth = "medium";
    return false;
    }
    else if(password.value.length < 8){
      document.getElementById('pass-error').innerHTML = 'Password should be at least 8 characters long ';
      password.style.borderColor = "red";
      password.style.borderWidth = "medium";
      return false;
    }
else{
    document.getElementById('pass-error').innerHTML = '';
    password.style.borderColor = "green";
    password.style.borderWidth = "medium";
}
if(repassword.value === ''){
        document.getElementById('repass-error').innerHTML = 'Confirm the password';
        repassword.style.borderColor = "red";
        repassword.style.borderWidth = "medium";
        return false;
        }
      
        else if(password.value != repassword.value){
          document.getElementById('repass-error').innerHTML = 'Password does not match';
          repassword.style.borderColor = "red";
          repassword.style.borderWidth = "medium";
          return false;
        }
    else{
        document.getElementById('repass-error').innerHTML = '';
        repassword.style.borderColor = "green";
        repassword.style.borderWidth = "medium";
    }
  return true;
 


 
}

function sendIt(){
  let error = document.querySelectorAll(".error");
  if (email.value !== "" && username.value !== "" && password.value !== "" && repassword.value !== "") {
    if (error.length === 0) {
      sendBtn.disabled = true;
    }
  }
  else{
    sendBtn.disabled = false;
  }
}