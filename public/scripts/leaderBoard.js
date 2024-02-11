const logoutButton = document.querySelector("#logoutButton");
logoutButton.addEventListener(
  "click",
  () => (window.location.href = "../index.html")
);
const logoutButtonIcon = document.querySelector("#logoutButtonIcon");
logoutButtonIcon.addEventListener(
  "click",
  () => (window.location.href = "../index.html")
);

const scoreTarget = document.querySelector("#usersScore");
const localStorageData = localStorage;
for (let k = 0; k < localStorageData.length; k++) {
  const user = localStorage.key(k);
  const value = localStorage.getItem(user);
  const valueParse = JSON.parse(value);
  const score = valueParse.score;
  const date = valueParse.createdAt;
  scoreTarget.innerHTML += `<tr><td>${user}</td><td>${score}</td><td>${date}</td></tr>`;
}
