//Timer
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  seconds.innerHTML = pad(totalSeconds % 60);
  minutes.inner = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

//Bomb Counter

//Music
songBtnCalm.addEventListener("click", playCalm);
songBtnCheery.addEventListener("click", playCheery);
songBtnPeppy.addEventListener("click", playPeppy);

const calmMusic = new Audio("sounds/calmMusic.mp3");
const cheeryMusic = new Audio("sounds/cheeryMusic.mp3");
const peppyMusic = new Audio("sounds/peppyMusic.mp3");

let music = false;

function playCalm() {
  if (music == true) {
    cheeryMusic.pause();
    peppyMusic.pause();
    calmMusic.play();
  } else {
    calmMusic.play();
    music = true;
    console.log(music);
  }
}
function playCheery() {
  if (music == true) {
    cheeryMusic.play();
    peppyMusic.pause();
    calmMusic.pause();
    console.log(music);
  } else {
    cheeryMusic.play();
    music = true;
  }
}
function playPeppy() {
  if (music == true) {
    cheeryMusic.pause();
    peppyMusic.play();
    calmMusic.pause();
  } else {
    peppyMusic.play();
    music = true;
  }
}

//Color Change
colorBtnGrey.addEventListener("click", turnGrey);
colorBtnGreen.addEventListener("click", turnGreen);
colorBtnBlue.addEventListener("click", turnBlue);

const sections = document.getElementsByTagName("section");

function turnGrey() {
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.backgroundColor = "lightgray";
    sections[i].style.borderColor = "gray";
  }
}

function turnGreen() {
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.backgroundColor = "lightgreen";
    sections[i].style.borderColor = "green";
  }
}

function turnBlue() {
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.backgroundColor = "lightskyblue";
    sections[i].style.borderColor = "blue";
  }
}

//Create Tiles

//tile array
const tileArray = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
  60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
  79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
  98, 99, 100, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
  115, 116, 117, 118, 119, 120,
];
const btnArray = [];

let mineGrid = document.getElementById("mineGrid");

for (let i = 0; i < tileArray.length; i++) {
  mineGrid.innerHTML += `<div class="cubes">
        <button class="cubeBtn" id="cubeBtn${i}"></button>
      </div>`;
  btnArray.push("cubeBtn" + i);
}
console.log(btnArray);

//Assign Bombs
//Randomize Bombs
for (let i = 0; i < 16; i++) {
  let randIndex = 0;
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  console.log(getRandomInt(3));
  let button = document.getElementById("cubeBtn" + randomIndex);
  button.style.backgroundImage = "images/flag.png";
  console.log(button);
}
//Game Over

//Win
