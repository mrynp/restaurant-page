import food from "./food.jpg";
import character from "./character.png";
import woman from "./woman.jpg";
import pasta from "./pasta.jpg";
import boodle from "./boodle.png";
import table from "./table.jpg";
import {
  createH1,
  createH2,
  createH3,
  createH4,
  createP,
  createButton,
} from "./index";

function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  home.appendChild(createTopContainer());
  home.appendChild(createBottomContainer());
  home.appendChild(createSubscription());

  return home;
}

function createTopContainer() {
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

  return topContainer;
}

document.addEventListener("DOMContentLoaded", () => {
  const imgContainer = document.querySelector(".img-container");
  const textContainer = document.querySelector(".text-container");
  const topContainer = document.querySelector(".top-container");

  imgContainer.addEventListener("wheel", (event) => {
    const isScrollingUp = event.deltaY < 0;
    const isScrollingDown = event.deltaY > 0;
    const isAtTop = textContainer.scrollTop === 0;
    const isAtBottom =
      textContainer.scrollTop + textContainer.clientHeight >=
      textContainer.scrollHeight;

    // Check the bottom position of the topContainer relative to the viewport
    const topContainerRect = topContainer.getBoundingClientRect();
    const isTopContainerBottomAtZero = topContainerRect.bottom <= 0; // Check if the bottom of topContainer is at 0

    // 1. If scrolling up and textContainer isn't at the top, scroll the textContainer up
    if (isScrollingUp && !isAtTop) {
      event.preventDefault();
      textContainer.scrollTop += event.deltaY; // Scroll textContainer up
      return;
    }

    // 2. If scrolling up, only allow imgContainer scroll if topContainer is fully at the top (bottom at 0)
    if (isScrollingUp && isAtTop && isTopContainerBottomAtZero) {
      return;
    }

    // 3. If scrolling down and textContainer isn't at the bottom, scroll the textContainer down
    if (isScrollingDown && !isAtBottom) {
      event.preventDefault();
      textContainer.scrollTop += event.deltaY; // Scroll textContainer down
      return;
    }

    if (isScrollingDown && isAtBottom) {
      return;
    }
  });
});

function createBottomContainer() {
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

  return bottomContainer;
}

function createSubscription() {
  const subscriptionContainer = document.createElement("div");
  subscriptionContainer.classList.add("subscription-container");

  const subscriptionImgContainer = document.createElement("div");
  subscriptionImgContainer.classList.add("img-container");

  const tableImg = document.createElement("img");
  tableImg.src = table;
  subscriptionImgContainer.appendChild(tableImg);

  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container");
  formContainer.appendChild(createForm());

  subscriptionContainer.appendChild(subscriptionImgContainer);
  subscriptionContainer.appendChild(createH3("Subscribe"));
  subscriptionContainer.appendChild(
    createH4(
      "Join the ODIN family! We’ll only pop into your inbox with delicious news and can’t-miss updates."
    )
  );
  subscriptionContainer.appendChild(formContainer);

  return subscriptionContainer;
}

function createForm() {
  const form = document.createElement("form");

  const textInput = document.createElement("input");
  textInput.type = "text";
  textInput.name = "fullname";
  textInput.placeholder = "full name";

  const emailInput = document.createElement("input");
  emailInput.type = emailInput.name = "email";
  emailInput.placeholder = "Your email";

  form.appendChild(textInput);
  form.appendChild(emailInput);

  const joinButton = document.createElement("button");
  joinButton.type = "submit";
  joinButton.textContent = "Join";

  form.appendChild(joinButton);

  return form;
}

function loadHome() {
  const content = document.getElementById("content");
  content.textContent = "";
  content.appendChild(createHome());
}

export default loadHome;
