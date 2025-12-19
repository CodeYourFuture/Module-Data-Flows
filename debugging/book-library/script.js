let myLibrary = [];
const STORAGE_KEY = "bookLibrary_v1";

/* ---------- Storage ---------- */

function loadStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return false;

    myLibrary = parsed.map(
      (o) => new Book(o.title, o.author, o.pages, o.check)
    );
    return true;
  } catch (e) {
    console.warn("Failed to load storage", e);
    return false;
  }
}

function saveStorage() {
  const plain = myLibrary.map((b) => ({
    title: b.title,
    author: b.author,
    pages: b.pages,
    check: b.check,
  }));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(plain));
}

function populateStorage() {
  if (loadStorage()) return;

  myLibrary.push(
    new Book("Robinson Crusoe", "Daniel Defoe", 252, true),
    new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true)
  );
  saveStorage();
}

/* ---------- Book Model ---------- */

class Book {
  constructor(title, author, pages, check) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.check = check;
  }

  toggleRead() {
    this.check = !this.check;
  }
}

/* ---------- DOM ---------- */

const titleEl = document.getElementById("title");
const authorEl = document.getElementById("author");
const pagesEl = document.getElementById("pages");
const readEl = document.getElementById("check");
const formEl = document.getElementById("bookForm");
const tableEl = document.getElementById("display");
const notificationEl = document.getElementById("notification");

/* ---------- Helpers ---------- */

function showToast(message, ms = 2500) {
  notificationEl.textContent = message;
  notificationEl.classList.add("show");
  setTimeout(() => notificationEl.classList.remove("show"), ms);
}

function showConfirm(message) {
  return window.confirm(message);
}

/* ---------- Form ---------- */

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = titleEl.value.trim();
  const author = authorEl.value.trim();
  const pages = Number(pagesEl.value);
  const isRead = readEl.checked;

  if (!title || !author) {
    showToast("Title and author are required");
    return;
  }

  if (!Number.isFinite(pages) || pages <= 0) {
    showToast("Pages must be a positive number");
    return;
  }

  myLibrary.push(new Book(title, author, pages, isRead));
  saveStorage();
  formEl.reset();
  render();
});

/* ---------- Render ---------- */

function render() {
  const tbody = tableEl.querySelector("tbody");
  tbody.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = book.title;

    const authorCell = document.createElement("td");
    authorCell.textContent = book.author;

    const pagesCell = document.createElement("td");
    pagesCell.textContent = book.pages;

    const readCell = document.createElement("td");
    const readBtn = document.createElement("button");
    readBtn.className = "btn btn-success";
    readBtn.textContent = book.check ? "Yes" : "No";
    readBtn.onclick = () => {
      book.toggleRead();
      saveStorage();
      render();
    };
    readCell.appendChild(readBtn);

    const actionsCell = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-warning";
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => {
      if (!showConfirm(`Delete "${book.title}"?`)) return;
      myLibrary.splice(index, 1);
      saveStorage();
      render();
      showToast("Book deleted");
    };
    actionsCell.appendChild(deleteBtn);

    row.append(titleCell, authorCell, pagesCell, readCell, actionsCell);
    tbody.appendChild(row);
  });
}

/* ---------- Init ---------- */

document.addEventListener("DOMContentLoaded", () => {
  populateStorage();
  render();
});
