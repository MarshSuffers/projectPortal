//Click Counter

//declare variables
let counter = document.getElementById("counterBtn");
let clickNum = 0;

//listen for clicks

counterBtn.addEventListener("click", btnPressedNum);

//Count clicks and changes text

function btnPressedNum() {
  clickNum++;
  counter.innerText = clickNum;
}
