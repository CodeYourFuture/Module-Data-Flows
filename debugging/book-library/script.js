let myLibrary = [];

window.addEventListener("load", () => {
  populateStorage();
  render();
});

// ------------------
// DATA SETUP
// ------------------
function populateStorage() {
  if (myLibrary.length === 0) {
    myLibrary.push(
      new Book("Robinson Crusoe", "Daniel Defoe", 252, true),
      new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true)
    );
  }
}

function Book(title, author, pages, alreadyRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.alreadyRead = alreadyRead;
}

// ------------------
// DOM ELEMENTS
// ------------------
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const checkInput = document.getElementById("check");

// ------------------
// ADD BOOK
// ------------------
function submit() {
  if (!titleInput.value || !authorInput.value || !pagesInput.value) {
    alert("Please fill all fields!");
    return;
  }

  const book = new Book(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    checkInput.checked
  );

  myLibrary.push(book);
  render();
}

// ------------------
// RENDER
// ------------------
function render() {
  const table = document.getElementById("display");

  // clear old rows
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  myLibrary.forEach((book, index) => {
    const row = table.insertRow();

    row.insertCell(0).textContent = book.title;
    row.insertCell(1).textContent = book.author;
    row.insertCell(2).textContent = book.pages;

    // READ TOGGLE
    const readCell = row.insertCell(3);
    const toggleBtn = document.createElement("button");

    toggleBtn.className = "btn btn-success";
    toggleBtn.textContent = book.alreadyRead ? "Yes" : "No";

    toggleBtn.addEventListener("click", () => {
      book.alreadyRead = !book.alreadyRead;
      render();
    });

    readCell.appendChild(toggleBtn);

    // DELETE BUTTON
    const deleteCell = row.insertCell(4);
    const deleteBtn = document.createElement("button");

    deleteBtn.className = "btn btn-warning";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      render();
    });

    deleteCell.appendChild(deleteBtn);
  });
}