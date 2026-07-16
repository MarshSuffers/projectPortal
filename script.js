//Date

let currentDate = new Date().toLocaleDateString();
let date = document.querySelector("#date");

date.textContent = currentDate;

let currentYear = new Date().getFullYear();
let year = document.querySelector("#year");

year.textContent = currentYear;

//Dynamic Cards

let cardsList = document.querySelector(".cards");
let titles = [];
let links = [];
let map = new Map();

for (let i = 0; i < titles.length; i++) {
  // mp = Map
  // keys = key array
  // values = value array
  map.set(titles[i], links[i]);
}
for (let key of map.titles()) {
  console.log(key + " => " + map.get(key));
}
