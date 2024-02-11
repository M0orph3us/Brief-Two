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
  console.log("down");
  gameContainer.style.cursor =
    "url(/public/assets/imgs/hammerCursorOnClick.svg), pointer";
}

gameContainer.addEventListener("mouseup", defaultCursor);

function defaultCursor() {
  console.log("up");
  gameContainer.style.cursor =
    "url(/public/assets/imgs/hammerCursor.svg), pointer";
}

// gameContainer.removeEventListener("mouseup", clickHammer);

const date = new Date();
console.log(date.getDay());
