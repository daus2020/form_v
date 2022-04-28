const d = document;

const form = d.querySelector("form");
const formInputs = d.querySelectorAll(".form-input");
const formInput = d.getElementsByClassName("form-input");
const formIn= d.querySelectorAll("input");

const fullName = d.getElementById('fullName');
const phoneNumber = d.getElementById('phoneNumber');
const email = d.getElementById('email');
const password = d.getElementById('password');

const toggleShowPass = d.querySelector("#toggleShowPass");
// const regexPhoneNumber = /^[0-9]{10}$/;
// console.log(formInputs);
// console.log(formInputs.values());
// console.log(formIn);
// console.log(formIn.values());
// console.log(formInput);

function validator(regexPattern, input) {
  regexPattern.test(input.value)? input.classList.remove('is-invalid'): input.classList.add('is-invalid');
}


fullName.addEventListener('blur', validateFullName);
function validateFullName() {
  const fullName_regex = /^[a-zA-Z\u00C0-\u017F]{1,26}[a-z A-Z\u00C0-\u017F]{1,26}(\s+[^\s]+)$/;
  // const fullNameTrimmed = fullName.value.trim();

  validator(fullName_regex, fullName);
  // validator(fullName_regex, fullNameTrimmed);
  // fullName_regex.test(fullNameTrimmed)? fullName.classList.remove('is-invalid'): fullName.classList.add('is-invalid');

  // console.log(formInputs);
  // console.log(formInput);
}

phoneNumber.addEventListener('blur', validatePhoneNumber);
function validatePhoneNumber() {
  const phoneNumber_regex = /^\+?[\d]{7,15}$/;
  // const phoneNumberTrimmed = phoneNumber.value.trim();

  validator(phoneNumber_regex, phoneNumber);
  // phoneNumber_regex.test(phoneNumberTrimmed)? phoneNumber.classList.remove('is-invalid'): phoneNumber.classList.add('is-invalid');
}

email.addEventListener('blur', validateEmail);
function validateEmail() {
  const email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // const emailTrimmed = email.value.trim();

  validator(email_regex, email);
  // email_regex.test(email)? email.classList.remove('is-invalid'): email.classList.add('is-invalid');
  // email_regex.test(emailTrimmed)? email.classList.remove('is-invalid'): email.classList.add('is-invalid');
}

password.addEventListener('blur', validatePassword);
function validatePassword() {
  const password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  validator(password_regex, password);
  // password_regex.test(password.value)? password.classList.remove('is-invalid'): password.classList.add('is-invalid');
}

// Show/Hide Password Function clicking eye icon
toggleShowPass.addEventListener("click", function () {
  // toggle the type attribute
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  
  // toggle the eye icon
  this.classList.toggle("bi-eye");


  let isFilled = Array.from(formIn).map(el => el.value === "" ? false: true);
  if (isFilled.includes(false)) { console.log("disable submit btn")};
  
    // if (el.value === "") return false;
    // el.value === "" ? console.log("not full") : console.log("full & ok");
    // console.log(el.value);

  // console.log(d.querySelector('.form-input').classList.contains('is-invalid'));
  // console.log(formInput.classList.values());
  // console.log(formInputs);
  // console.log(formIn);
  // console.log(formIn.values());
  // formInputs.classList.contains('is-invalid')? console.log('yes there are errors'): console.log('no errors,submit now!');
  
  // console.log(first)

// prevent form submit
// form.addEventListener('submit', function (e) {
//     e.preventDefault();
// });


















  // if (!fullName_regex.test(fullNameTrimmed)) {
  //   fullName.classList.add('is-invalid');
  //   console.log(fullName)
  //   // setErrorFor(fullName, 'Nombre(s) y apellido(s) no válido(s)');
  // } else {
  //   fullName.classList.remove('is-invalid');
  //   console.log(fullName)}}
});