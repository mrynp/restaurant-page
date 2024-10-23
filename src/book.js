import { createH3, createP } from "./index";

function createBook() {
  const book = document.createElement("div");
  book.classList.add("book");

  book.appendChild(createH3("Book a table"));
  book.appendChild(createForm());

  return book;
}

function createForm() {
  const form = document.createElement("form");

  const nameLabel = document.createElement("label");
  nameLabel.for = "fullname";
  nameLabel.textContent = "Your name";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "name";
  nameInput.placeholder = "Jane Doe";

  const emailLabel = document.createElement("label");
  emailLabel.for = "email";
  emailLabel.textContent = "Your email";

  const emailInput = document.createElement("input");
  emailInput.type = emailInput.name = "email";
  emailInput.placeholder = "janedoe@gmail.com";

  const numberLabel = document.createElement("label");
  numberLabel.for = "number";
  numberLabel.textContent = "Your phone number";

  const numberInput = document.createElement("input");
  numberInput.type = numberInput.name = "number";
  numberInput.placeholder = "+1 012 345 6789";

  const guestLabel = document.createElement("label");
  guestLabel.for = "guest";
  guestLabel.textContent = "Number of guest";

  const guestInput = document.createElement("input");
  guestInput.type = "number";
  guestInput.name = "guest";
  guestInput.min = "1";
  guestInput.placeholder = "1";

  const dateLabel = document.createElement("label");
  dateLabel.for = "date";
  dateLabel.textContent = "date";

  const dateInput = document.createElement("input");
  dateInput.type = dateInput.name = "date";

  // Get today's date
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String(today.getDate()).padStart(2, "0");

  // Set the minimum date to today
  const minDate = `${year}-${month}-${day}`;
  dateInput.min = minDate;

  // Calculate the date two months from today
  const maxDate = new Date(today.setMonth(today.getMonth() + 2));
  const maxYear = maxDate.getFullYear();
  const maxMonth = String(maxDate.getMonth() + 1).padStart(2, "0");
  const maxDay = String(maxDate.getDate()).padStart(2, "0");

  // Set the maximum date
  dateInput.max = `${maxYear}-${maxMonth}-${maxDay}`;
  dateInput.value = `${year}-${month}-${day}`;

  const timeLabel = document.createElement("label");
  timeLabel.for = "time";
  timeLabel.textContent = "time";

  const timeInput = document.createElement("input");
  timeInput.type = timeInput.name = "time";
  timeInput.min = "11:00";
  timeInput.max = "23:00";
  timeInput.value = "11:00";
  timeInput.step = "1800";

  form.appendChild(nameLabel);
  form.appendChild(nameInput);
  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(numberLabel);
  form.appendChild(numberInput);
  form.appendChild(guestLabel);
  form.appendChild(guestInput);
  form.appendChild(dateLabel);
  form.appendChild(dateInput);
  form.appendChild(timeLabel);
  form.appendChild(timeInput);

  const bookButton = document.createElement("button");
  bookButton.type = "submit";
  bookButton.textContent = "Book a table";

  bookButton.addEventListener("click", function (event) {
    event.preventDefault();
  });

  form.appendChild(bookButton);

  return form;
}

function loadBook() {
  const content = document.getElementById("content");
  content.textContent = "";
  content.appendChild(createBook());
}

export default loadBook;
