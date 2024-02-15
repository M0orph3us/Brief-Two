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
let bestPlayer = null;
let highestScore = 0;

for (let k = 0; k < localStorage.length; k++) {
  const user = localStorage.key(k);
  const getStorage = localStorage.getItem(user);
  const getStorageParse = JSON.parse(getStorage);

  if (getStorageParse.game.length > 0) {
    const scores = getStorageParse.game.map((game) => game.score);
    const maxScore = Math.max(...scores);

    if (maxScore > highestScore) {
      highestScore = maxScore;
      bestPlayer = user;
    }

    const bestScoreIndex = scores.indexOf(maxScore);
    const bestScoreDate = getStorageParse.game[bestScoreIndex].recordedAt;

    scoreTarget.innerHTML += `<tr><td>${user}</td><td>${maxScore}</td><td>${bestScoreDate}</td></tr>`;
  }
}
