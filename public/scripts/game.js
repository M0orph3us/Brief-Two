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
// To have the current date
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const currentDay = `${day}/${month}/${year}`;
// Set timer to play
let time = 10;
let intervalID;
let newScore = 600;

const pseudo = "test";
const getStorage = localStorage.getItem(pseudo);
const getStorageParse = JSON.parse(getStorage);

getArrayScore.push(newScore);

const userData = {
  pseudo: pseudo,
  createdAt: currentDay,
  score: getArrayScore,
};

const userDataStringify = JSON.stringify(userData);
localStorage.setItem("score", userDataStringify);

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
