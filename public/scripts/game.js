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

// Logic for game

const hole1Target = document.querySelector("#hole1");
const hole2Target = document.querySelector("#hole2");
const hole3Target = document.querySelector("#hole3");
const hole4Target = document.querySelector("#hole4");
const hole5Target = document.querySelector("#hole5");
const hole6Target = document.querySelector("#hole6");
const hole7Target = document.querySelector("#hole7");
const hole8Target = document.querySelector("#hole8");
const hole9Target = document.querySelector("#hole9");

const arrayPositionHole = [
  hole1Target,
  hole2Target,
  hole3Target,
  hole4Target,
  hole5Target,
  hole6Target,
  hole7Target,
  hole8Target,
  hole9Target,
];
const threeMole = "../assets/imgs/threeMole.svg";
const kingMole = "../assets/imgs/kingMole.svg";
const oneMole = "../assets/imgs/oneMole.svg";
const arrayHardMole = [threeMole, kingMole, oneMole];
const arrayMediumMole = [oneMole, threeMole];

function positionRandom() {
  const randomIndex = Math.floor(Math.random() * arrayPositionHole.length);
  return arrayPositionHole[randomIndex];
}
function hardRandomMole() {
  const randomIndex = Math.floor(Math.random() * arrayHardMole.length);
  return arrayHardMole[randomIndex];
}

function mediumRandomMole() {
  const randomIndex = Math.floor(Math.random() * arrayMediumMole.length);
  return arrayMediumMole[randomIndex];
}

function game() {
  const img = document.createElement("img");
  img.style.position = "relative";
  img.src = mediumRandomMole();
  img.alt = "mole";
  positionRandom().appendChild(img);
}

// setInterval(() => {
//   game();
// }, 2000);
