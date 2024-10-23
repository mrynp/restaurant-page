import {
  createH1,
  createH2,
  createH3,
  createH4,
  createP,
  createButton,
} from "./index";

import menu1 from "./menu1.png";
import menu2 from "./menu2.png";
import menu3 from "./menu3.png";

function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const menu1Img = document.createElement("img");
  menu1Img.classList.add("menu-img");
  menu1Img.src = menu1;

  const menu2Img = document.createElement("img");
  menu2Img.classList.add("menu-img");
  menu2Img.src = menu2;

  const menu3Img = document.createElement("img");
  menu3Img.classList.add("menu-img");
  menu3Img.src = menu3;

  menu.appendChild(createH3("MENU"));
  menu.appendChild(menu1Img);
  menu.appendChild(menu2Img);
  menu.appendChild(createH3("Boodle fight nights"));
  menu.appendChild(menu3Img);

  return menu;
}

function loadMenu() {
  const content = document.getElementById("content");
  content.textContent = "";
  content.appendChild(createMenu());
}

export default loadMenu();
