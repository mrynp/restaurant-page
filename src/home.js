import food from "./food.jpg";
import character from "./character.png";
import woman from "./woman.jpg";
import pasta from "./pasta.jpg";
import boodle from "./boodle.png";

function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const topContainer = document.createElement("div");
  topContainer.classList.add("top-container");

  const foodImage = document.createElement("img");
  foodImage.src = food;
  foodImage.alt = "Food";

  const characterImage = document.createElement("img");
  characterImage.src = character;
  characterImage.classList.add("character");
  characterImage.alt = "Character";

  const womanImage = document.createElement("img");
  womanImage.src = woman;
  womanImage.classList.add("woman");
  womanImage.alt = "Woman";

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  imgContainer.appendChild(foodImage);

  const heroContainer = document.createElement("div");
  heroContainer.classList.add("hero-container");
  heroContainer.appendChild(createH1("A meeting place for web developers."));
  heroContainer.appendChild(createH3("(And everyone else)"));
  heroContainer.appendChild(characterImage);

  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");
  aboutContainer.appendChild(createH1("Come together, Stay awhile"));
  aboutContainer.appendChild(
    createP(
      "THE ODIN RESTAU is meeting place for web developers (and everyone else). We’ve blended the warmth of a neighborhood bistro with the excitement of a contemporary dining experience. Swing by for a crafted cocktail, indulge in a memorable meal, or grab a quick bite to go."
    )
  );
  aboutContainer.appendChild(
    createH4(
      "Relax, unwind, and enjoy at your own pace. We’re ready when you are."
    )
  );
  aboutContainer.appendChild(createButton("Book a table"));
  aboutContainer.appendChild(womanImage);

  const textContainer = document.createElement("div");
  textContainer.classList.add("text-container");
  textContainer.appendChild(heroContainer);
  textContainer.appendChild(aboutContainer);

  topContainer.appendChild(imgContainer);
  topContainer.appendChild(textContainer);

  const bottomContainer = document.createElement("div");
  bottomContainer.classList.add("bottom-container");

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  const menuContent = document.createElement("div");
  menuContent.classList.add("menu-content");
  menuContent.appendChild(createH3("The menu"));
  menuContent.appendChild(createH2("Healthy Bites, Brilliant Minds"));
  menuContent.appendChild(
    createP(
      "Every bite brings balance. Our menu combines delicious ingredients with the nourishment your body and mind deserve."
    )
  );
  menuContent.appendChild(createButton("View the menu"));
  const menuImage = document.createElement("div");
  menuImage.classList.add("menu-image");

  const pastaImage = document.createElement("img");
  pastaImage.src = pasta;
  pastaImage.alt = "Pasta";

  menuImage.appendChild(pastaImage);
  menuContainer.appendChild(menuContent);
  menuContainer.appendChild(menuImage);

  const eventContainer = document.createElement("div");
  eventContainer.classList.add("event-container");

  const eventImage = document.createElement("div");
  eventImage.classList.add("event-image");
  const boodleImage = document.createElement("img");
  boodleImage.src = boodle;
  boodleImage.alt = "Boodle Fight";

  eventImage.appendChild(boodleImage);

  const eventContent = document.createElement("div");
  eventContent.classList.add("event-content");
  eventContent.appendChild(
    createH4(
      "Thursday Evenings are Boodle Fight Nights – Gather around for a Filipino-inspired feast, served on banana leaves and meant to be enjoyed with your hands. Indulge in a spread of grilled meats, seafood, rice, and fresh veggies for $30. Perfect for sharing with friends or making new ones over this lively, communal meal."
    )
  );
  eventContent.appendChild(createButton("Learn more"));

  eventContainer.appendChild(eventImage);
  eventContainer.appendChild(eventContent);

  bottomContainer.appendChild(menuContainer);
  bottomContainer.appendChild(eventContainer);

  home.appendChild(topContainer);
  home.appendChild(bottomContainer);

  return home;
}

function createH1(text) {
  const h1 = document.createElement("h1");
  h1.textContent = text;
  return h1;
}

function createH2(text) {
  const h2 = document.createElement("h2");
  h2.textContent = text;
  return h2;
}

function createH3(text) {
  const h3 = document.createElement("h3");
  h3.textContent = text;
  return h3;
}

function createH4(text) {
  const h4 = document.createElement("h4");
  h4.textContent = text;
  return h4;
}

function createP(text) {
  const p = document.createElement("p");
  p.textContent = text;
  return p;
}

function createButton(text) {
  const button = document.createElement("button");
  button.appendChild(createH3(text));
  button.classList.add("button");
  return button;
}

function loadHome() {
  const content = document.getElementById("content");
  content.textContent = "";
  content.appendChild(createHome());
}

export default loadHome;
