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

  if (!titleVal || !authorVal || !pagesVal) {
    alert("Please fill all fields!");
    return;
  }

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
  // clear old rows
  tbody.innerHTML = ""; 

  myLibrary.forEach((book, i) => {
    const row = tbody.insertRow();
    row.insertCell(0).textContent = book.title;
    row.insertCell(1).textContent = book.author;
    row.insertCell(2).textContent = book.pages;

    // Read/Unread button
    const readCell = row.insertCell(3);
    const readBtn = document.createElement("button");
    readBtn.className = "btn btn-success";
    readBtn.textContent = book.check ? "Yes" : "No";
    readBtn.addEventListener("click", () => {
      book.check = !book.check;
      render();
    });
    readCell.appendChild(readBtn);

    // Delete button
    const delCell = row.insertCell(4);
    const delBtn = document.createElement("button");
    delBtn.className = "btn btn-warning";
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => {
      if (confirm(`Are you sure you want to delete "${book.title}"?`)) {
        myLibrary.splice(i, 1);
        render();
      }
    });
    delCell.appendChild(delBtn);
  });
}

