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
  const menuButton = document.createElement("button");
  const bookButton = document.createElement("button");

  homeButton.textContent = "Home";
  menuButton.textContent = "Menu";
  bookButton.textContent = "Book a table";

  homeButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    loadHome();
  });

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(bookButton);

  header.appendChild(restaurantName);
  header.appendChild(nav);

  return header;
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
  details2.appendChild(createP("Tuesday - Thursday 4.30pm - 11pm"));
  details2.appendChild(createP("Friday & Saturday 12pm till late"));

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

  creditContainer.appendChild(
    createH3("Photos from Unsplash, Pexels and Canva")
  );
  creditContainer.appendChild(createH3("Open-sourced on Github"));
  creditContainer.appendChild(createH3("Made by @mrynp"));

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

  document.body.appendChild(header);
  document.body.appendChild(content);
  document.body.appendChild(createFooter());

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
