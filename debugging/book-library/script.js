let myLibrary = [];
const STORAGE_KEY = "bookLibrary_v1";

function loadStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return false;
    myLibrary = parsed.map(
      (o) => new Book(o.title, o.author, Number(o.pages), !!o.check)
    );
    return true;
  } catch (e) {
    console.warn("Failed to load storage", e);
    return false;
  }
}

function saveStorage() {
  try {
    const plain = myLibrary.map((b) => ({
      title: b.title,
      author: b.author,
      pages: b.pages,
      check: b.check,
    }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(plain));
  } catch (e) {
    console.warn("Failed to save storage", e);
  }
}

function populateStorage() {
  if (loadStorage()) return;
  const book1 = new Book("Robinson Crusoe", "Daniel Defoe", 252, true);
  const book2 = new Book(
    "The Old Man and the Sea",
    "Ernest Hemingway",
    127,
    true
  );
  myLibrary.push(book1, book2);
  saveStorage();
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
    showToast("Please provide both title and author.");
    return;
  }

  if (!pagesRaw || !Number.isFinite(pages) || pages <= 0) {
    showToast("Please provide a valid positive number for pages.");
    return;
  }

  const book = new Book(title, author, pages, isRead);
  myLibrary.push(book);
  saveStorage();

  // clear form
  formEl.reset();

  render();
}

class Book {
  constructor(title, author, pages, check) {
    this.title = title;
    this.author = author;
    this.pages = Number(pages);
    this.check = Boolean(check);
  }

  toggleRead() {
    this.check = !this.check;
  }
}

// Modal / notification helpers
const confirmModalEl = document.getElementById("confirmModal");
const confirmDescEl = document.getElementById("confirmDesc");
const confirmYesEl = document.getElementById("confirmYes");
const confirmNoEl = document.getElementById("confirmNo");
const notificationEl = document.getElementById("notification");

function showConfirm(message) {
  return new Promise((resolve) => {
    confirmDescEl.textContent = message;
    confirmModalEl.classList.remove("modal-hidden");
    confirmModalEl.classList.add("modal-visible");

    function cleanup() {
      confirmYesEl.removeEventListener("click", onYes);
      confirmNoEl.removeEventListener("click", onNo);
      confirmModalEl.classList.remove("modal-visible");
      confirmModalEl.classList.add("modal-hidden");
    }

    function onYes() {
      cleanup();
      resolve(true);
    }

    function onNo() {
      cleanup();
      resolve(false);
    }

    confirmYesEl.addEventListener("click", onYes);
    confirmNoEl.addEventListener("click", onNo);
  });
}

function showToast(message, ms = 2500) {
  notificationEl.textContent = message;
  notificationEl.classList.add("show");
  setTimeout(() => notificationEl.classList.remove("show"), ms);
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
      myLibrary[index].toggleRead();
      saveStorage();
      render();
    });

    readCell.appendChild(toggleReadBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-warning";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", async () => {
      const confirmed = await showConfirm(
        `Delete "${book.title}" from your library?`
      );
      if (!confirmed) return;
      myLibrary.splice(index, 1);
      saveStorage();
      render();
      showToast(`Deleted "${book.title}"`);
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
// Accessibility: update aria-expanded on collapse show/hide
const toggleBtn = document.getElementById("toggleFormBtn");
const demoEl = document.getElementById("demo");
if (demoEl && toggleBtn) {
  demoEl.addEventListener("shown.bs.collapse", () =>
    toggleBtn.setAttribute("aria-expanded", "true")
  );
  demoEl.addEventListener("hidden.bs.collapse", () =>
    toggleBtn.setAttribute("aria-expanded", "false")
  );
}

document.addEventListener("DOMContentLoaded", () => {
  populateStorage();
  render();
});
