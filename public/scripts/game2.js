import { Storage } from "./class/Storage.js";

// Action on logout button
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

// Action on click & mouseUp
const gameContainer = document.querySelector("#gameContainer");

gameContainer.addEventListener("mousedown", clickHammer);

function clickHammer() {
  gameContainer.style.cursor =
    "url(/public/assets/imgs/hammerCursorOnClick.svg), pointer";
}

gameContainer.addEventListener("mouseup", defaultCursor);

function defaultCursor() {
  gameContainer.style.cursor =
    "url(/public/assets/imgs/hammerCursor.svg), pointer";
}

window.onload = () => {
  setGame();
};

function setGame() {
  for (let k = 0; k < 9; k++) {
    let hole = document.createElement("div");
    hole.id = k;
    document.querySelector("#gameContainer").append(hole);
  }
}
