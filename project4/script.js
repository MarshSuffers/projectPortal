//Timer
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  seconds.innerHTML = pad(totalSeconds % 60);
  minutesLabel.inner = pad(parseInt(totalSeconds / 60));
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

function playCalm() {
  const calmMusic = new Audio("sounds/calmMusic.mp3");
  calmMusic.play();
}

//Color Change

//Create Tiles

//Game Over

//Win
