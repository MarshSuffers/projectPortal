//Click Counter

//declare variables
let counter = document.getElementById("clicks");
let clickNum = 0;

//listen for clicks

counterBtn.addEventListener("click", btnPressedNum);
evilBtn.addEventListener("click", btnPressedNum);
funBtn.addEventListener("click", btnPressedNum);
nothingBtn.addEventListener("click", btnPressedNum);
quoteBtn.addEventListener("click", btnPressedNum);
hideBtn.addEventListener("click", btnPressedNum);
explodeBtn.addEventListener("click", btnPressedNum);
submitBtn.addEventListener("click", btnPressedNum);

//Count clicks and changes text

function btnPressedNum() {
  clickNum++;
  counter.innerText = clickNum;
  stopHiding();
}

//Color Picker

//Red Range
let slider1 = document.getElementById("rangeRed");
let output1 = document.getElementById("redValue");

output1.innerHTML = slider1.value;

//Update value
slider1.oninput = function () {
  output1.innerHTML = this.value;
};

//Green Range
let slider2 = document.getElementById("rangeGreen");
let output2 = document.getElementById("greenValue");

output2.innerHTML = slider2.value;

//Update value
slider2.oninput = function () {
  output2.innerHTML = this.value;
};

//Blue Range
let slider3 = document.getElementById("rangeBlue");
let output3 = document.getElementById("blueValue");

output3.innerHTML = slider3.value;

//Update value
slider3.oninput = function () {
  output3.innerHTML = this.value;
};

//Color Change
counterBtn.addEventListener("click", btnPressedCol);
quoteBtn.addEventListener("click", btnPressedCol);
hideBtn.addEventListener("click", btnPressedCol);
submitBtn.addEventListener("click", btnPressedCol);

function btnPressedCol() {
  let r = slider1.value;
  let g = slider2.value;
  let b = slider3.value;
  let coval = "rgb(" + r + ", " + b + ", " + g + ")";
  document.getElementById("bigContainer").style.backgroundColor = coval;
}

//Image Size Adjuster

//Horizontal Range
let slider4 = document.getElementById("horizontalRange");
let output4 = document.getElementById("horizontalValue");

output4.innerHTML = slider4.value;

//Update value
slider4.oninput = function () {
  output4.innerHTML = this.value;
};

//Vertical Range
let slider5 = document.getElementById("verticalRange");
let output5 = document.getElementById("verticalValue");

output5.innerHTML = slider5.value;

//Update value
slider5.oninput = function () {
  output5.innerHTML = this.value;
};

//Apply Changes
counterBtn.addEventListener("click", btnPressedSize);
quoteBtn.addEventListener("click", btnPressedSize);
hideBtn.addEventListener("click", btnPressedSize);
submitBtn.addEventListener("click", btnPressedSize);

function btnPressedSize() {
  let h = slider4.value;
  let v = slider5.value;
  document.getElementById("image").style.height = v + "0px";
  document.getElementById("image").style.width = h + "0px";
  document.getElementById("imageCaption").innerText = "Waow";
}

//Swap Picture

//Event Listener
image.addEventListener("click", changeImage);

//Function
function changeImage() {
  if (clickNum >= 100) {
    document.getElementById("image").src = "images/lily.jpg";
    document.getElementById("imageCaption").innerText =
      "You... scare me. Why'd you click so much?";
  } else if (clickNum >= 15) {
    document.getElementById("image").src = "images/curl.jpg";
    document.getElementById("imageCaption").innerText =
      "That did something!! YAAAAAY!!!";
  } else {
    document.getElementById("imageCaption").innerText =
      "You thought that'd do something? HA!";
  }
}

//Display Input

//Declare Variables
let output = document.getElementById("output");
output.innerHTML = "";

//Add Event Listener
submitBtn.addEventListener("click", displayText);

//Display Text

function displayText() {
  let input = document.getElementById("textInput").value;
  output.innerHTML = input;
}

//Unhide Buttons
submitBtn.addEventListener("click", stopHiding);

function stopHiding() {
  if (
    clickNum >= 50 ||
    output.innerHTML == "display" ||
    output.innerHTML == "stop" ||
    output.innerHTML == "Display" ||
    output.innerHTML == "Stop"
  ) {
    document.getElementById("hiddenBtns").style.display = "flex";
    document.getElementById("remark").innerText =
      "You found something! Took ya long enough!";
  }
}

//Specific Inputs
submitBtn.addEventListener("click", something);

function something() {
  if (output.innerHTML == "something" || output.innerHTML == "Something") {
    document.getElementById("remark").innerText = "Smart-aleck";
  }
}

//Buttons

//Evil Button
evilBtn.addEventListener("click", changeEvil);

function changeEvil() {
  document.getElementById("bigContainer").style.display = "none";
}

//Fun Button - need to finish
funBtn.addEventListener("click", changeFun);

function changeFun() {
  document.getElementById("bigContainer").style.backgroundColor = "none";
}

//Quote Button - add

//Hide Button
hideBtn.addEventListener("click", keepHiding);
function keepHiding() {
  document.getElementById("hiddenBtns").style.display = "none";
  document.getElementById("remark").innerText = "Scared?";
}

//Explode - add
