"use strict";

// Logic for leaderboard on footer
const textLeaderboard = document.querySelector("#textLeaderboard");

// for (let k = 0; k < localStorage.length; k++) {
//   const value = localStorage.getItem("score");
//   const valueParse = JSON.parse(value);
//   const score = valueParse.score;
//   const pseudo = valueParse.pseudo;
//   const bestScore = Math.max(...score);
//   textLeaderboard.textContent += `${pseudo} : ${bestScore}pts; `;
// }
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
