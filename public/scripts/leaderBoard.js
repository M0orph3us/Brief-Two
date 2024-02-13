// Redirection for button logout Desktop
const logoutButton = document.querySelector("#logoutButton");
logoutButton.addEventListener(
  "click",
  () => (window.location.href = "../index.html")
);

// Redirection for button logout Tab
const logoutButtonIcon = document.querySelector("#logoutButtonIcon");
logoutButtonIcon.addEventListener(
  "click",
  () => (window.location.href = "../index.html")
);

// Logic for leaderBoard
const scoreTarget = document.querySelector("#usersScore");
const localStorageData = localStorage;
for (let k = 0; k < localStorageData.length; k++) {
  const user = localStorage.key(k);
  const value = localStorage.getItem(user);
  const valueParse = JSON.parse(value);
  const score = valueParse.score;
  const bestScore = Math.max(...score);
  const date = valueParse.createdAt;
  scoreTarget.innerHTML += `<tr><td>${user}</td><td>${bestScore}</td><td>${date}</td></tr>`;
}
