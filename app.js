// Selectors
const form = document.querySelector("#form"); // entire form
const username = document.querySelector("#username"); // input field
const email = document.querySelector("#email"); // input field
const password = document.querySelector("#password"); // input field
const password2 = document.querySelector("#password2"); // input field

// Event Listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

// Functions
function checkInputs() {
  // get values from the inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  // trim() removes all the whitespace or spaces on a string

  if (usernameValue === "") {
    // show error
    // add error class
    setErrorFor(username, "Username cannot be blank");
  } else {
    // add success class
    setSuccessFor(username);
  }

  if (emailValue === "") {
    // show error
    // add error class
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    // add success class
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    // show error
    // add error class
    setErrorFor(password, "Password cannot be blank");
  } else {
    // add success class
    setSuccessFor(password);
  }

  if (password2Value === "") {
    // show error
    // add error class
    setErrorFor(password2, "Re-Password cannot be blank");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Passwords do not match");
  } else {
    // add success class
    setSuccessFor(password2);
  }

  if (
    usernameValue &&
    passwordValue &&
    emailValue &&
    password2Value &&
    passwordValue === password2Value &&
    isEmail(emailValue)
  ) {
    alert("SUBMISSION SUCCESS!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; // .form-control (have to check for every input field)
  const small = formControl.querySelector("small"); // <small> (have to check for every input field)

  // add error message
  small.innerText = message;

  // add error class
  formControl.className = "form-control error"; // use className instead of .classList so that we can reassign the class when the function is called
}

function setSuccessFor(input) {
  const formControl = input.parentElement; // .form-control (have to check for every input field)

  // add success message
  formControl.className = "form-control success"; // only override className when you want to push submit. (make sure to style in css first so that it is positioned correctly)
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  ); // returns true or false whether the email is valid or not
}
