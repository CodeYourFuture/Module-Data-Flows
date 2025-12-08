let myLibrary = [];

window.addEventListener("load", () => {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    myLibrary.push(new Book("Robinson Crusoe", "Daniel Defoe", 252, true));
    myLibrary.push(new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true));
  }
}

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readCheckbox = document.getElementById("check");

function submit() {
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const pages = Number(pagesInput.value);

  if (!title || !author || !pagesInput.value) {
    alert("Please fill all fields.");
    return;
  }

  if (Number.isNaN(pages) || pages <= 0) {
    alert("Page count must be a positive number.");
    return;
  }

  const book = new Book(title, author, pages, readCheckbox.checked);
  myLibrary.push(book);
  render();

  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readCheckbox.checked = false;
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function render() {
  const table = document.getElementById("display");
  const tbody = table.tBodies[0];

  // Clear table efficiently
  tbody.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const row = tbody.insertRow();

    row.insertCell().textContent = book.title;
    row.insertCell().textContent = book.author;
    row.insertCell().textContent = book.pages;

    const readCell = row.insertCell();
    const toggleReadBtn = document.createElement("button");
    toggleReadBtn.className = "btn btn-success";
    toggleReadBtn.textContent = book.read ? "Yes" : "No";
    toggleReadBtn.addEventListener("click", () => {
      book.read = !book.read;
      render();
    });
    readCell.appendChild(toggleReadBtn);

    const deleteCell = row.insertCell();
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-warning";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      myLibrary.splice(index, 1); // delete first
      render();
      alert(`Deleted book: ${book.title}`); // then notify
    });
    deleteCell.appendChild(deleteBtn);
  });
}