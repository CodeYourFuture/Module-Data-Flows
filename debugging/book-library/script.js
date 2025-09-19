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
  const pagesRaw = pagesEl.value.trim();

  // Check if pages input is a positive whole number
  if (!/^\d+$/.test(pagesRaw)) {
  alert("Please enter a valid positive whole number for pages!");
  return;
  }

  const pagesVal = Number(pagesRaw);

  if (!titleVal || !authorVal) {
  alert("Please fill all fields!");
  return;
  }

  if (pagesVal <= 0) {
  alert("Please enter a realistic positive number of pages!");
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
  const tbody = table.querySelector("tbody");

  // Clear existing rows
  tbody.innerHTML = "";

  myLibrary.forEach((book, i) => {
    const row = tbody.insertRow();

    // keep all cells in one place
    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const checkCell = row.insertCell(3);
    const delCell = row.insertCell(4); // delete button cell

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;
    
    const readBtn = document.createElement("button");
    readBtn.textContent = book.check ? "Read" : "Not Read";
    readBtn.className = book.check ? "btn btn-success" : "btn btn-secondary";
    readBtn.addEventListener("click", () => {
      book.check = !book.check; // toggle
      render(); // re-render table
    });
    checkCell.appendChild(readBtn);

    // use helper function for delete button
    createDeleteCell(delCell, book);
  });
}

function createDeleteCell(cell, book) {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    const index = myLibrary.indexOf(book);
    if (index > -1){
    myLibrary.splice(index, 1);
    render();
    }
  });
  cell.appendChild(deleteBtn);
}