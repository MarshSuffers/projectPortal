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
    cheeryMusic.pause;
    peppyMusic.pause;
    calmMusic.pause();
    music = false;
  } else {
    calmMusic.play();
    music = true;
    console.log(music);
  }
}
function playCheery() {
  if (music == true) {
    cheeryMusic.pause;
    peppyMusic.pause;
    calmMusic.pause();
    console.log(music);
    music = false;
  } else {
    cheeryMusic.play();
    music = true;
  }
}
function playPeppy() {
  if (music == true) {
    cheeryMusic.pause;
    peppyMusic.pause;
    calmMusic.pause();
    music = false;
  } else {
    peppyMusic.play();
    music = true;
  }
}

//Color Change

//Create Tiles

//Game Over

//Win
