"use strict";

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
