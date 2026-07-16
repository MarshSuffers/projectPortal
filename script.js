//Date

let currentDate = new Date().toLocaleDateString();
let date = document.querySelector("#date");

date.textContent = currentDate;

let currentYear = new Date().getFullYear();
let year = document.querySelector("#year");

year.textContent = currentYear;

//Dynamic Cards
//declare map
let cards = new Map();

cards.set("HTML Project", "project1/index.html");
cards.set("Interactive Website", "project2/index.html");
cards.set("Empty Project", "project3/index.html");
cards.set("Minesweeper", "project4/index.html");

//declare variables
let cardsList = document.querySelector(".cards");
let navLinks = document.getElementById("navList");
let titles = cards.keys();
let links = cards.values();
let i = 0;

//declare arrays
let titlesArray = Array.from(titles);
let linksArray = Array.from(links);

//iterate through each set
cards.forEach((values, keys) => {
  console.log(values, keys);

  cardsList.innerHTML += `<div class="card">
        <div class="cardInner">
          <div class="cardFront">
            <h2>${titlesArray[i]}</h2>
          </div>
          <div class="cardBack">
            <a href="${linksArray[i]}">Project link</a>
          </div>
        </div>
      </div>`;

  i++;
  console.log(i);
});

//Dynamic Links

for (let l = 0; l < linksArray.length; l++) {
  console.log(linksArray[l]);
  navLinks.innerHTML += `<li><a href="${linksArray[l]}">${titlesArray[l]}</a></li>`;
}
