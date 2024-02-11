"use strict";

const textLeaderboard = document.querySelector("#textLeaderboard");
const localStorageData = localStorage;
for (let k = 0; k < localStorageData.length; k++) {
  const user = localStorage.key(k);
  const value = localStorage.getItem(user);
  const valueParse = JSON.parse(value);
  const score = valueParse.score;
  const bestScore = Math.max(...score);
  textLeaderboard.textContent += `${user} : ${bestScore}pts; `;
}
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname;

  if (currentPage === "/public/index.html") {
    import("./login.js");
  } else if (currentPage === "/public/pages/game.html") {
    import("./game.js");
  } else if (currentPage === "/public/pages/leaderBoard.html") {
    import("./leaderBoard.js");
  } else if (currentPage === "/public/pages/register.html") {
    import("./register.js");
  }
});
