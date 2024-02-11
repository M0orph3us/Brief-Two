const submitLogin = document.querySelector("#submitLogin");
const paraTarget = document.querySelector("#loginAlert");
let isConnected = false;

const eyeCloseIndex = document.querySelector("#eyeCloseIndex");
const eyeOpenIndex = document.querySelector("#eyeOpenIndex");
const passwordLogin = document.querySelector("#passwordLogin");

eyeCloseIndex.addEventListener("click", () => {
  passwordLogin.type = "text";
  eyeCloseIndex.style.display = "none";
  eyeOpenIndex.style.display = "block";
});

eyeOpenIndex.addEventListener("click", () => {
  passwordLogin.type = "password";
  eyeCloseIndex.style.display = "block";
  eyeOpenIndex.style.display = "none";
});

submitLogin.addEventListener("click", login);

function login() {
  const pseudologinValue = document.querySelector("#pseudoLogin").value;
  const passwordLoginValue = passwordLogin.value;

  const storageGet = localStorage.getItem(pseudologinValue);
  const storageGetParse = JSON.parse(storageGet);
  const passwordStorage = storageGetParse.password;
  if (passwordLoginValue === passwordStorage && pseudologinValue !== "") {
    isConnected = true;
    paraTarget.textContent = "";
    paraTarget.classList.remove("alert");
    paraTarget.classList.add("valid");
    paraTarget.textContent = `Hello ${pseudologinValue}, you are connected`;
  } else {
    isConnected = false;
    paraTarget.textContent = "";
    paraTarget.classList.remove("valid");
    paraTarget.classList.add("alert");
    paraTarget.textContent = ` ${pseudologinValue} your password does not match the one recorded `;
  }

  if (isConnected) {
    setTimeout(() => {
      window.location.href = "./pages/game.html";
    }, 2000);
  }
}
