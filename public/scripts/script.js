"use strict";

// Logic for leaderboard on footer
const textLeaderboard = document.querySelector("#textLeaderboard");

for (let k = 0; k < localStorage.length; k++) {
  const user = localStorage.key(k);
  const getStorage = localStorage.getItem(user);
  const getStorageParse = JSON.parse(getStorage);
  const getScore = getStorageParse.game[k].score;
  const bestScore = Math.max(getScore);
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
