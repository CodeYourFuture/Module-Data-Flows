let myLibrary = [];

window.addEventListener("load", () => {
  populateStorage();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", 252, true);
    let book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true);
    myLibrary.push(book1, book2);
    render();
  }
}

// Use meaningful names for DOM elements
const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const pagesInput = document.getElementById("pagesInput");
const readCheckbox = document.getElementById("readCheckbox");
const bookForm = document.getElementById("bookForm");

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addBook();
});

function addBook() {
  // Trim inputs to avoid whitespace-only values
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const pages = parseInt(pagesInput.value, 10);

  if (!title || !author || !pages || pages <= 0) {
    alert("Please fill in all fields correctly. Pages must be a positive number.");
    return;
  }

  let book = new Book(title, author, pages, readCheckbox.checked);
  myLibrary.push(book);
  render();

  // Clear form fields
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readCheckbox.checked = false;

  // Optionally collapse the form after submission
  $("#formSection").collapse("hide");
}

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function render() {
  let tableBody = document.querySelector("#libraryTable tbody");
  tableBody.innerHTML = ""; // Clear all rows at once

  myLibrary.forEach((book, index) => {
    let row = tableBody.insertRow();

    row.insertCell(0).textContent = book.title;
    row.insertCell(1).textContent = book.author;
    row.insertCell(2).textContent = book.pages;

    // Read toggle button
    let readCell = row.insertCell(3);
    let toggleReadBtn = document.createElement("button");
    toggleReadBtn.className = "btn btn-success btn-sm";
    toggleReadBtn.textContent = book.isRead ? "Yes" : "No";
    toggleReadBtn.addEventListener("click", () => {
      book.isRead = !book.isRead;
      render();
    });
    readCell.appendChild(toggleReadBtn);

    // Actions cell
    let actionsCell = row.insertCell(4);
    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm ml-2";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      if (confirm(`Are you sure you want to delete "${book.title}"?`)) {
        myLibrary.splice(index, 1);
        render();
      }
    });
    actionsCell.appendChild(deleteBtn);
  });
}
