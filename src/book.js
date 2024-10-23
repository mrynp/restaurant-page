import {
  createH1,
  createH2,
  createH3,
  createH4,
  createP,
  createButton,
} from "./index";

function createBook() {
  const book = document.createElement("div");
  book.classList.add("book");

  book.appendChild(createH3("Book a table"));
  book.appendChild(createForm());

  return book;
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

  const numberInput = document.createElement("input");
  numberInput.type = numberInput.name = "number";
  numberInput.placeholder = "Your number";

  const guestInput = document.createElement("input");
  guestInput.type = "number";
  guestInput.name = "guest";
  guestInput.min = "1";
  guestInput.placeholder = "Number of guests";

  const dateInput = document.createElement("input");
  dateInput.type = numberInput.name = "date";

  const timeInput = document.createElement("input");
  timeInput.type = timeInput.name = "time";
  timeInput.min = "11:00";
  timeInput.max = "23:00";
  timeInput.value = "11:00";

  form.appendChild(textInput);
  form.appendChild(emailInput);
  form.appendChild(numberInput);
  form.appendChild(guestInput);
  form.appendChild(dateInput);
  form.appendChild(timeInput);

  const joinButton = document.createElement("button");
  joinButton.type = "submit";
  joinButton.textContent = "Join";

  form.appendChild(joinButton);

  return form;
}

function loadBook() {
  const content = document.getElementById("content");
  content.textContent = "";
  content.appendChild(createBook());
}

export default loadBook();
