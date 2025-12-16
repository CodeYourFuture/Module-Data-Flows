let myLibrary = [];

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

// DOM elements (suffix "El" to indicate element)
const titleEl = document.getElementById("title");
const authorEl = document.getElementById("author");
const pagesEl = document.getElementById("pages");
const readEl = document.getElementById("check");
const formEl = document.getElementById("bookForm");
const tableEl = document.getElementById("display");

formEl.addEventListener("submit", function (ev) {
  ev.preventDefault();
  handleSubmit();
});

function handleSubmit() {
  const title = titleEl.value.trim();
  const author = authorEl.value.trim();
  const pagesRaw = pagesEl.value.trim();
  const pages = Number(pagesRaw);
  const isRead = readEl.checked;

  if (!title || !author) {
    alert("Please provide both title and author.");
    return;
  }

  if (!pagesRaw || !Number.isFinite(pages) || pages <= 0) {
    alert("Please provide a valid positive number for pages.");
    return;
  }

  const book = new Book(title, author, pages, isRead);
  myLibrary.push(book);

  // clear form
  formEl.reset();

  render();
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = Boolean(check);
}

function render() {
  const tbody = tableEl.querySelector("tbody");

  // Clear existing rows in one operation
  tbody.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    const authorCell = document.createElement("td");
    const pagesCell = document.createElement("td");
    const readCell = document.createElement("td");
    const actionsCell = document.createElement("td");

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = String(book.pages);

    const toggleReadBtn = document.createElement("button");
    toggleReadBtn.className = "btn btn-success";
    toggleReadBtn.textContent = book.check ? "Yes" : "No";
    toggleReadBtn.addEventListener("click", () => {
      myLibrary[index].check = !myLibrary[index].check;
      render();
    });

    readCell.appendChild(toggleReadBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-warning";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      const confirmDelete = confirm(
        `Delete "${book.title}" from your library?`
      );
      if (!confirmDelete) return;
      myLibrary.splice(index, 1);
      render();
      alert(`Deleted "${book.title}"`);
    });

    actionsCell.appendChild(deleteBtn);

    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(pagesCell);
    row.appendChild(readCell);
    row.appendChild(actionsCell);

    tbody.appendChild(row);
  });
}

// Initialization
document.addEventListener("DOMContentLoaded", () => {
  populateStorage();
  render();
});
