const d = document;

const form = d.querySelector("form");
const formInputs = d.querySelectorAll(".form-input");

const fullName = d.getElementById('fullName');
const phoneNumber = d.getElementById('phoneNumber');
const email = d.getElementById('email');
const password = d.getElementById('password');

const toggleShowPass = d.querySelector("#toggleShowPass");

function validator(regexPattern, input) {
  regexPattern.test(input.value)? input.classList.remove('is-invalid'): input.classList.add('is-invalid');
}

fullName.addEventListener('blur', validateFullName);
function validateFullName() {
  const fullName_regex = /^[a-zA-Z\u00C0-\u017F]{1,26}[a-z A-Z\u00C0-\u017F]{1,26}(\s+[^\s]+)$/;
  validator(fullName_regex, fullName);
}

phoneNumber.addEventListener('blur', validatePhoneNumber);
function validatePhoneNumber() {
  const phoneNumber_regex = /^\+?[\d]{7,15}$/;
  validator(phoneNumber_regex, phoneNumber);
}

email.addEventListener('blur', validateEmail);
function validateEmail() {
  const email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  validator(email_regex, email);
}

password.addEventListener('blur', validatePassword);
function validatePassword() {
  const password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  validator(password_regex, password);
}

// Show/Hide Password Function clicking eye icon
toggleShowPass.addEventListener("click", function () {
  // toggle the type attribute
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  
  // toggle the eye icon
  this.classList.toggle("bi-eye");


  let isFilled = Array.from(formInputs).map(el => el.value === "" ? false: true);
  if (isFilled.includes(false)) { console.log("disable submit btn")};

});


// const formInput = d.getElementsByClassName("form-input");
// const formIn= d.querySelectorAll("input");