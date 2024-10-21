import food from "./food.jpg";
import character from "./character.png";

function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const foodImage = document.createElement("img");
  foodImage.src = food;
  foodImage.alt = "Food";

  const characterImage = document.createElement("img");
  characterImage.src = character;
  characterImage.classList.add("character");
  characterImage.alt = "Character";

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

  const textContainer = document.createElement("div");
  textContainer.classList.add("text-container");
  textContainer.appendChild(heroContainer);
  textContainer.appendChild(aboutContainer);

  home.appendChild(imgContainer);
  home.appendChild(textContainer);

  return home;
}

function createH1(text) {
  const h1 = document.createElement("h1");
  h1.textContent = text;
  return h1;
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
