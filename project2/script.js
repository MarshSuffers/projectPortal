//declare variables
let button = document.getElementById("clicks");
let clickNum = 0;

//listen for clicks

redButton.addEventListener("click", btnPressedNum);

//Count clicks and changes text

function btnPressedNum() {
  clickNum++;
  button.innerText = clickNum;
}

// Range Sliders

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
redButton.addEventListener("click", btnPressedCol);

function btnPressedCol() {
  let r = slider1.value;
  let g = slider2.value;
  let b = slider3.value;
  let coval = "rgb(" + r + ", " + b + ", " + g + ")";
  document.getElementById("h22").style.color = coval;
}
