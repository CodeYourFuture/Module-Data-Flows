const myLibrary = [];

// When page loads, add starter books and render
window.addEventListener("load", function () {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    const book1 = new Book("Robinson Crusoe", "Daniel Defoe", 252, true);
    const book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      127,
      true
    );
    myLibrary.push(book1, book2);
  }
}

// === DOM elements ===
const bookFormEl = document.getElementById("bookForm");
const titleInputEl = document.getElementById("title");   // .value is a string
const authorInputEl = document.getElementById("author"); // .value is a string
const pagesInputEl = document.getElementById("pages");   // .value is a string
const isReadCheckboxEl = document.getElementById("check"); // .checked is boolean

// Check the form and, if OK, add a new book and re-render
bookFormEl.addEventListener("submit", handleBookFormSubmit);

function handleBookFormSubmit(event) {
  event.preventDefault(); // stop page reload

  // 🔹 Normalise / preprocess input
  const title = titleInputEl.value.trim();
  const author = authorInputEl.value.trim();
  const pages = Number(pagesInputEl.value);
  const isRead = isReadCheckboxEl.checked;

  // 🔹 Validation
  if (!title || !author) {
    alert("Title and author are required.");
    return;
  }

  if (!Number.isFinite(pages) || pages <= 0) {
    alert("Pages must be a positive number.");
    return;
  }

  // 🔹 Create and store the new book
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);

  render();
  bookFormEl.reset();
}

// Book constructor
function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check; // true = read, false = not read
}

function render() {
  const table = document.getElementById("display");
  const tbody = table.querySelector("tbody");

  // 🔹 Clear previous rows in one go (keep header)
  tbody.innerHTML = "";

  // insert updated rows and cells
  myLibrary.forEach((book, index) => {
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    const authorCell = document.createElement("td");
    const pagesCell = document.createElement("td");
    const wasReadCell = document.createElement("td");
    const deleteCell = document.createElement("td");

    // 🔹 Use textContent (safe & fast)
    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;

    // Read/unread button
    const readBtn = document.createElement("button");
    readBtn.type = "button";
    readBtn.className = "btn btn-success btn-sm";
    readBtn.textContent = book.check ? "Yes" : "No";
    readBtn.addEventListener("click", () => {
      myLibrary[index].check = !myLibrary[index].check;
      render();
    });
    wasReadCell.appendChild(readBtn);

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "btn btn-warning btn-sm";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      const confirmed = confirm(`Delete "${book.title}"?`);
      if (!confirmed) return;

      myLibrary.splice(index, 1);
      render();
    });

    deleteCell.appendChild(deleteBtn);

    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(pagesCell);
    row.appendChild(wasReadCell);
    row.appendChild(deleteCell);

    tbody.appendChild(row);
  });
}
