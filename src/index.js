import "./styles.css";
import loadHome from "./home";
import loadMenu from "./menu";
import loadBook from "./book";
import character from "./character.png";

function createHeader() {
  const header = document.createElement("header");

  const restaurantName = document.createElement("div");
  restaurantName.classList.add("restaurant-name");
  restaurantName.textContent = "The Odin Restau";

  const nav = document.createElement("nav");
  const homeButton = document.createElement("button");
  homeButton.classList.add("nav-btn");
  homeButton.textContent = "Home";

  const menuButton = document.createElement("button");
  menuButton.classList.add("nav-btn");
  menuButton.textContent = "Menu";

  const bookButton = document.createElement("button");
  bookButton.classList.add("nav-btn");
  bookButton.textContent = "Book a table";

  homeButton.addEventListener("click", () => {
    loadHome();
  });

  menuButton.addEventListener("click", () => {
    loadMenu();
  });

  bookButton.addEventListener("click", () => {
    loadBook();
  });

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(bookButton);

  header.appendChild(restaurantName);
  header.appendChild(nav);

  return header;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".nav-btn");
  buttons.forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");
}

function createFooter() {
  const footer = document.createElement("footer");

  const characterContainer = document.createElement("div");
  characterContainer.classList.add("character-container");

  const characterImg = document.createElement("img");
  characterImg.src = character;

  const textContainer = document.createElement("div");
  textContainer.classList.add("text-container");

  const detailsContainer = document.createElement("div");
  detailsContainer.classList.add("details-container");

  const details1 = document.createElement("div");
  details1.classList.add("details");
  details1.appendChild(createH3("Contact us"));
  details1.appendChild(
    createP(
      "To get in touch, visit our contact page or call 88888888. For employment opportunities, see our current vacancies."
    )
  );

  const details2 = document.createElement("div");
  details2.classList.add("details");
  details2.appendChild(createH3("Opening hours"));
  details2.appendChild(createP("Tuesday - Thursday: 11am - 10pm"));
  details2.appendChild(createP("Friday & Saturday: 11pm - 12am"));
  details2.appendChild(createP("Sunday: 11am - 4pm"));

  const details3 = document.createElement("div");
  details3.classList.add("details");
  details3.appendChild(createH3("Socials"));
  details3.appendChild(createButton("Instagram"));
  details3.appendChild(createButton("Facebook"));

  detailsContainer.appendChild(details1);
  detailsContainer.appendChild(details2);
  detailsContainer.appendChild(details3);

  const creditContainer = document.createElement("div");
  creditContainer.classList.add("credit-container");

  creditContainer.appendChild(createH3("Made for the odin project"));
  creditContainer.appendChild(createH3("Inspired by Waygood"));
  creditContainer.appendChild(
    createH3("Photos from Unsplash, Pexels and Canva")
  );
  creditContainer.appendChild(createH3("Coded by mrynp"));

  textContainer.appendChild(detailsContainer);
  textContainer.appendChild(creditContainer);
  characterContainer.appendChild(characterImg);

  footer.appendChild(characterContainer);
  footer.appendChild(textContainer);

  return footer;
}

function initializeWebsite() {
  const content = document.getElementById("content");

  const header = createHeader();
  document.body.insertBefore(header, content);

  const footer = createFooter();
  document.body.appendChild(footer);

  loadHome();
}

export function createH1(text) {
  const h1 = document.createElement("h1");
  h1.textContent = text;
  return h1;
}

export function createH2(text) {
  const h2 = document.createElement("h2");
  h2.textContent = text;
  return h2;
}

export function createH3(text) {
  const h3 = document.createElement("h3");
  h3.textContent = text;
  return h3;
}

export function createH4(text) {
  const h4 = document.createElement("h4");
  h4.textContent = text;
  return h4;
}

export function createP(text) {
  const p = document.createElement("p");
  p.textContent = text;
  return p;
}

export function createButton(text) {
  const button = document.createElement("button");
  button.appendChild(createH3(text));
  button.classList.add("button");
  return button;
}

initializeWebsite();
