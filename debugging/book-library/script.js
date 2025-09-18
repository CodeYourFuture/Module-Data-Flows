let myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    const book1 = new Book("Robison Crusoe", "Daniel Defoe", 252, true);
    const book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true);
    myLibrary.push(book1, book2);
  }
  render();
}

const titleEl = document.getElementById("title");
const authorEl = document.getElementById("author");
const pagesEl = document.getElementById("pages");
const checkEl = document.getElementById("check");

// Add book from form
function submitBook(event) {
  // Prevent page reload
  event.preventDefault(); 

  const titleVal = titleEl.value.trim();
  const authorVal = authorEl.value.trim();
  const pagesVal = Number(pagesEl.value);

  if (!titleVal || !authorVal) {
    alert("Please fill all fields!");
    return;
  }
  if (isNaN(pagesVal) || pagesVal <= 0) {
    alert("Please enter a valid number of pages!");
    return;
  }

  // Add book to library

  const book = new Book(titleVal, authorVal, pagesVal, checkEl.checked);
  myLibrary.push(book);
  render();

  // Clear form
  titleEl.value = "";
  authorEl.value = "";
  pagesEl.value = "";
  checkEl.checked = false;
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  const table = document.getElementById("display");
  table.innerHTML = "";

  myLibrary.forEach((book, i) => {
    const row = table.insertRow();

    // keep all cells in one place
    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const checkCell = row.insertCell(3);
    const delCell = row.insertCell(4); // delete button cell

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;
    checkCell.textContent = book.check ? "Read" : "Not Read";

    // use helper function for delete button
    createDeleteCell(delCell, i);
  });
}

function createDeleteCell(cell, index) {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    myLibrary.splice(index, 1);
    render();
  });
  cell.appendChild(deleteBtn);
}

