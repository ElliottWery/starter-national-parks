console.log(document);
const heading = document.querySelector("h1");
console.log(heading);
const heading = document.querySelector(".rating.display .stat");
console.log(heading);
const heading = document.querySelector("button");
console.log(heading);
const heading = document.querySelector(".area.display .stat");
console.log(heading);
const heading = document.querySelector("hello");
console.log(heading);
const buttons = document.querySelectorAll("button");
console.log(buttons);

for (let desc of descriptions.values()) {
  let content = desc.innerText;

  if (content.length > 250) {
    content = content.slice(0, 250);
    content = content + '<a href="#">...</a>';
  }

  desc.innerHTML = content;
}
const ratings = document.querySelectorAll(".rating-display .value");

for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);

  if (ratingValue > 4.7) {
    rating.style.fontWeight = "bold";
    rating.classList.add("high-rating");
    rating.classList.remove("value");
  }
}

//
const parks = document.querySelectorAll(".park-display");
const numberParks = parks.length;
const newElement = document.createElement("div");
newElement.innerText = `${numberParks} exciting parks to visit`;
newElement.classList.add("header-statement");
const header = document.querySelector("header");
header.appendChild(newElement);

//REMOVES the first park on the list
// Get the parent element of all parks
const main = document.querySelector("main");

// Select a single park
const park = main.querySelector(".park-display");

// Remove that park
main.removeChild(park);