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

// Set timer to play
let time = 15;
function timer() {
  time--;
  if (time === 0) {
    clearInterval(intervalID);
    const setScore = new Storage(pseudo, score);
    setScore.setScore();
  }
}

// Logic for game

const holes = document.querySelectorAll("#hole");

const threeMole = "../assets/imgs/threeMole.svg";
const kingMole = "../assets/imgs/kingMole.svg";
const oneMole = "../assets/imgs/oneMole.svg";
const arrayHardMole = [threeMole, kingMole, oneMole];
const arrayMediumMole = [oneMole, threeMole];

let score = null;
const scoreTarget = document.querySelector("#score");
const timeTarget = document.querySelector("#time");

function clickOnMole() {
  const mole = document.querySelector("#mole");
  mole.addEventListener("click", () => {
    score += 1;
    mole.style.display = "none";
    scoreTarget.textContent = score;
    timeTarget.textContent = time;

    console.log(score);
  });
}
function random(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function gameNormal() {
  const img = document.createElement("img");
  img.classList.add("mole");
  img.src = oneMole;
  img.alt = "mole";
  img.id = "mole";
  random(holes).appendChild(img);
  clickOnMole();
  // const intervalID = setInterval(() => {
  //   timer();
  // }, 1000);
}

function gameMedium() {
  const img = document.createElement("img");
  img.classList.add("mole");
  img.src = random(arrayMediumMole);
  img.alt = "mole";
  img.id = "mole";
  random(holes).appendChild(img);
  clickOnMole();
}

function gameHard() {
  const img = document.createElement("img");
  img.classList.add("mole");
  img.src = random(arrayHardMole);
  img.alt = "mole";
  img.id = "mole";
  random(holes).appendChild(img);
  clickOnMole();
}

const buttonStart = document.querySelector("#buttonStart");

buttonStart.addEventListener("click", gameStart);

function gameStart() {
  const difficultValue = document.querySelector("#mode").value;
  if (difficultValue === "normal") {
    setInterval(() => {
      gameNormal();
    }, 5000);
  } else if (difficultValue === "medium") {
    setInterval(() => {
      gameMedium();
    }, 4000);
  } else if (difficultValue === "hard") {
    setInterval(() => {
      gameHard();
    }, 2000);
  }
}
