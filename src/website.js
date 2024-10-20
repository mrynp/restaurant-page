import "./styles.css";

function createHeader() {
  const header = document.createElement("header");

  const restaurantName = document.createElement("div");
  restaurantName.classList.add("restaurant-name");
  restaurantName.textContent = "The Odin Restau";

  const nav = document.createElement("nav");
  const homeButton = document.createElement("button");
  const menuButton = document.createElement("button");
  const contactButton = document.createElement("button");
  const bookButton = document.createElement("button");

  homeButton.textContent = "Home";
  menuButton.textContent = "Menu";
  bookButton.textContent = "Book a table";

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(bookButton);

  header.appendChild(restaurantName);
  header.appendChild(nav);

  return header;
}

function initializeWebsite() {
  const content = document.getElementById("content");
  const header = createHeader();

  document.body.appendChild(header, content);
}

export default initializeWebsite;
