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

const fullName_regex = /^[a-zA-Z\u00C0-\u017F]{1,26}[a-z A-Z\u00C0-\u017F]{1,26}(\s+[^\s]+)$/;
fullName.addEventListener('blur', validator(fullName_regex, fullName));

const phoneNumber_regex = /^\+?[\d]{7,15}$/;
phoneNumber.addEventListener('blur', validator(phoneNumber_regex, phoneNumber));

const email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
email.addEventListener('blur', validator(email_regex, email));

const password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
password.addEventListener('blur', validator(password_regex, password));

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