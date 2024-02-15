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

// Set timer to play
let time = 15;
let intervalID;
function timer() {
  time--;
  if (time === 0) {
    clearInterval(intervalID);
  }
}

// Logic for game

const holes = document.querySelectorAll("#hole");

const threeMole = "../assets/imgs/threeMole.svg";
const kingMole = "../assets/imgs/kingMole.svg";
const oneMole = "../assets/imgs/oneMole.svg";
const arrayHardMole = [threeMole, kingMole, oneMole];
const arrayMediumMole = [oneMole, threeMole];

function random(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function gameNormal() {
  const img = document.createElement("img");
  img.style.position = "absolute";
  img.src = oneMole;
  img.alt = "mole";
  random(holes).appendChild(img);
}

function gameMedium() {
  const img = document.createElement("img");
  img.style.position = "absolute";
  img.src = random(arrayMediumMole);
  img.alt = "mole";
  random(holes).appendChild(img);
}

function gameHard() {
  const img = document.createElement("img");
  img.style.position = "absolute";
  img.src = random(arrayHardMole);
  img.alt = "mole";
  random(holes).appendChild(img);
}

const buttonStart = document.querySelector("#buttonStart");

buttonStart.addEventListener("click", gameStart);

function gameStart() {
  const difficultValue = document.querySelector("#mode").value;
  if (difficultValue === "normal") {
    setInterval(() => {
      gameNormal();
    }, 2000);
  } else if (difficultValue === "medium") {
    setInterval(() => {
      gameMedium();
    }, 2000);
  } else if (difficultValue === "hard") {
    setInterval(() => {
      gameHard();
    }, 1000);
  }
}
