import { User } from "./class/User.js";

const submitRegister = document.querySelector("#submitRegister");
const pTarget = document.querySelector("#returnRegister");
const csrfTarget = document.querySelector("#csrf");

const pseudoRegisterValue = document.querySelector("#pseudoRegister").value;

const passwordRegister = document.querySelector("#passwordRegister");
const eyeCloseRegister = document.querySelector("#eyeCloseRegister");
const eyeOpenRegister = document.querySelector("#eyeOpenRegister");

const verifyPasswordRegister = document.querySelector(
  "#verifyPasswordRegister"
);
const eyeCloseRegisterVerify = document.querySelector(
  "#eyeCloseRegisterVerify"
);

const eyeOpenRegisterVerify = document.querySelector("#eyeOpenRegisterVerify");

// Function to show or hidden password
// eyeCloseRegister.addEventListener("click", () => {
//   passwordRegister.type = "text";
//   eyeCloseRegister.style.display = "none";
//   eyeOpenRegister.style.display = "block";
// });
// eyeOpenRegister.addEventListener("click", () => {
//   passwordRegister.type = "password";
//   eyeCloseRegister.style.display = "block";
//   eyeOpenRegister.style.display = "none";
// });

// eyeCloseRegisterVerify.addEventListener("click", () => {
//   verifyPasswordRegister.type = "text";
//   eyeCloseRegisterVerify.style.display = "none";
//   eyeOpenRegisterVerify.style.display = "block";
// });
// eyeOpenRegisterVerify.addEventListener("click", () => {
//   verifyPasswordRegister.type = "password";
//   eyeCloseRegisterVerify.style.display = "block";
//   eyeOpenRegisterVerify.style.display = "none";
// });

// CSRF Token
const randomValue = Math.random().toString(36).substring(2);
csrfTarget.value = randomValue;

// Function to register new user
submitRegister.addEventListener("click", register);

let time = 6;
let interID;
function timer() {
  time--;
  pTarget.textContent = ` Welcome ${pseudoRegisterValue} you're registered, you will be redirected to the login page in ${time} seconds`;
  if (time === 0) {
    window.location.href = "../index.html";
    clearInterval(interID);
  }
}

function register(e) {
  e.preventDefault();
  const pseudoRegisterValue = document.querySelector("#pseudoRegister").value;
  const passwordRegisterValue = passwordRegister.value;
  const verifyPasswordRegisterValue = verifyPasswordRegister.value;
  const csrfVerif = document.querySelector("#csrf").value;
  let password = "";

  if (csrfVerif === randomValue) {
    if (pseudoRegisterValue === "") {
      pTarget.textContent = "";
      pTarget.classList.remove("valid");
      pTarget.classList.add("alert");
      pTarget.textContent = "Your pseudo can't be empty";
      return;
    } else if (
      passwordRegisterValue.length < 3 ||
      verifyPasswordRegisterValue.length < 3
    ) {
      pTarget.textContent = "";
      pTarget.classList.remove("valid");
      pTarget.classList.add("alert");
      pTarget.textContent = "Your password must have more than 3 characters";
      return;
    } else if (passwordRegisterValue !== verifyPasswordRegisterValue) {
      pTarget.textContent = "";
      pTarget.classList.remove("valid");
      pTarget.classList.add("alert");
      pTarget.textContent =
        "Your second password does not match with the first, try again please";
      return;
    } else if (passwordRegisterValue === verifyPasswordRegisterValue) {
      password = passwordRegisterValue;

      pTarget.textContent = "";
      pTarget.classList.remove("alert");
      pTarget.classList.add("valid");

      const newUser = new User(pseudoRegisterValue, password);
      newUser.register();
      interID = setInterval(timer, 1000);
    }
  } else {
    console.log("Dont try to hack my game !!!!");
  }
}
