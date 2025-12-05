// Local storage key
const STORAGE_KEY = "myLibraryBooks";

// Book list
let myLibrary = [];

// Cached DOM elements
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");
const addBtn = document.getElementById("addBtn");
const displayBody = document.querySelector("#display tbody");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = !!read;
}

// Load from localStorage on page start
window.addEventListener("DOMContentLoaded", () => {
  loadLibrary();
  render();
});

// Load saved books or create default sample books
function loadLibrary() {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (stored) {
    myLibrary = JSON.parse(stored);
  } else {
    // First-time sample books
    myLibrary = [
      new Book("Robinson Crusoe", "Daniel Defoe", 252, true),
      new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true)
    ];
    saveLibrary();
  }
}

// Save books to localStorage
function saveLibrary() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(myLibrary));
}

// Clear form after adding
function clearForm() {
  title.value = "";
  author.value = "";
  pages.value = "";
  check.checked = false;
}

// Submit new book
function submitBook() {
  if (!title.value.trim() || !author.value.trim() || !pages.value) {
    alert("Please fill all fields!");
    return;
  }

  const book = new Book(
    title.value.trim(),
    author.value.trim(),
    Number(pages.value),
    check.checked
  );

  myLibrary.push(book);
  saveLibrary();
  render();
  clearForm();

  // Collapse form
  $("#addForm").collapse("hide");
}

addBtn.addEventListener("click", submitBook);

// Render table
function render() {
  displayBody.innerHTML = "";

  myLibrary.forEach((b, i) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${b.title}</td>
      <td>${b.author}</td>
      <td>${b.pages}</td>
      <td></td>
      <td></td>
    `;

    // Read button
    const readBtn = document.createElement("button");
    readBtn.className = "btn btn-sm btn-success btn-small";
    readBtn.textContent = b.read ? "Yes" : "No";
    readBtn.addEventListener("click", () => {
      myLibrary[i].read = !myLibrary[i].read;
      saveLibrary();
      render();
    });
    row.children[3].appendChild(readBtn);

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.className = "btn btn-sm btn-warning btn-small";
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => {
      if (confirm(`Delete "${b.title}"?`)) {
        myLibrary.splice(i, 1);
        saveLibrary();
        render();
      }
    });
    row.children[4].appendChild(delBtn);

    displayBody.appendChild(row);
  });
}
