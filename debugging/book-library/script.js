// script.js (module)

export {};

// Library array
const myLibrary = [];

// Book constructor
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

// Default books
const defaultBooks = [
  new Book("Robinson Crusoe", "Daniel Defoe", 252, true),
  new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true),
];

// DOM references
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readCheckbox = document.getElementById("check");
const submitBtn = document.getElementById("submitBtn");
const table = document.getElementById("display");

// On page load: add default books

window.addEventListener("DOMContentLoaded", () => {
  if (myLibrary.length === 0) {
    myLibrary.push(...defaultBooks);
  }
  render();
});

// Submit listener 
submitBtn.addEventListener("click", submit);

// Submit function
function submit() {
  const titleVal = titleInput.value.trim();
  const authorVal = authorInput.value.trim();
  const pagesVal = pagesInput.value.trim();
  const readVal = readCheckbox.checked;

  if (!titleVal || !authorVal || !pagesVal) {
    alert("Please fill all fields!");
    return;
  }

  const pagesNum = Number(pagesVal);
  if (!Number.isInteger(pagesNum) || pagesNum < 1) {
    alert("Pages must be an integer greater than or equal to 1!");
    return;
  }

  myLibrary.push(new Book(titleVal, authorVal, pagesNum, readVal));

  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readCheckbox.checked = false;

  render();
}

// Render function
function render() {
  const tbody = table.tBodies[0];


  tbody.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const row = tbody.insertRow();

    row.insertCell(0).textContent = book.title;
    row.insertCell(1).textContent = book.author;
    row.insertCell(2).textContent = book.pages;

    // Read button
    const readCell = row.insertCell(3);
    const readBtn = document.createElement("button");
    readBtn.className = "btn btn-success";
    readBtn.textContent = book.read ? "Yes" : "No";
    readBtn.addEventListener("click", () => {
      book.read = !book.read;
      render();
    });
    readCell.appendChild(readBtn);

    // Delete button
    const deleteCell = row.insertCell(4);
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-warning";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      if (confirm(`Are you sure you want to delete "${book.title}"?`)) {
        myLibrary.splice(index, 1);
        render();
        alert("Book deleted successfully!");
      }
    });
    deleteCell.appendChild(deleteBtn);
  });
}


// Modifications regarding input preprocessing table rendering and descriptive 
// names have been made.