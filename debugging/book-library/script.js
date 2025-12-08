// FEEDBACK APPLIED: using ES module prevents global variable leakage
// Local storage key
const STORAGE_KEY = "myLibraryBooks";

// FEEDBACK APPLIED: clearer variable names for DOM nodes
const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const pagesInput = document.getElementById("pagesInput");
const readCheckbox = document.getElementById("readCheckbox");
const addBtn = document.getElementById("addBtn");
const displayBody = document.querySelector("#display tbody");

// Book array
let myLibrary = [];

// FEEDBACK APPLIED: consistent data types
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = Number(pages); // ensures pages is stored as number
    this.read = Boolean(read);
  }
}

// Load from localStorage
function loadLibrary() {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (stored) {
    myLibrary = JSON.parse(stored);
  } else {
    // Default sample books
    myLibrary = [
      new Book("Robinson Crusoe", "Daniel Defoe", 252, true),
      new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true)
    ];
    saveLibrary();
  }
}

// Save to localStorage
function saveLibrary() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(myLibrary));
}

// Clear input form
function clearForm() {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readCheckbox.checked = false;
}

// Submit new book
function submitBook() {
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const rawPages = pagesInput.value.trim();

  // --- STRICT & SAFE PAGE VALIDATION ---
  const pagesNum = Number(rawPages);

  if (
    !title ||
    !author ||
    !rawPages ||
    !Number.isInteger(pagesNum) ||
    pagesNum <= 0 ||
    pagesNum > 10000 ||           // reject unrealistic values
    !isFinite(pagesNum)           // rejects Infinity and NaN
  ) {
    alert("Please enter a valid page count (1–10,000).");
    return;
  }

  const book = new Book(title, author, pagesNum, readCheckbox.checked);

  myLibrary.push(book);
  saveLibrary();
  render();
  clearForm();

  // Collapse form using Bootstrap 5 JS API (plain JS, no jQuery)
  const collapse = bootstrap.Collapse.getOrCreateInstance(document.getElementById("addForm"));
  collapse.hide();
}

// Render the table
function render() {
  // FEEDBACK APPLIED: efficient clearing of table
  displayBody.replaceChildren();

  myLibrary.forEach((book, index) => {
    const row = document.createElement("tr");

    // FEEDBACK APPLIED: using textContent instead of innerHTML
    const titleCell = document.createElement("td");
    titleCell.textContent = book.title;

    const authorCell = document.createElement("td");
    authorCell.textContent = book.author;

    const pagesCell = document.createElement("td");
    pagesCell.textContent = book.pages;

    const readCell = document.createElement("td");
    const readBtn = document.createElement("button");
    readBtn.textContent = book.read ? "Yes" : "No";
    readBtn.className = "btn btn-sm btn-success btn-small";
    readBtn.addEventListener("click", () => {
      myLibrary[index].read = !myLibrary[index].read;
      saveLibrary();
      render();
    });
    readCell.appendChild(readBtn);

    const deleteCell = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn btn-sm btn-warning btn-small";

    deleteBtn.addEventListener("click", () => {
      if (confirm(`Delete "${book.title}"?`)) {
        myLibrary.splice(index, 1);
        saveLibrary();
        render();
      }
    });

    deleteCell.appendChild(deleteBtn);

    // Append all cells
    row.append(titleCell, authorCell, pagesCell, readCell, deleteCell);
    displayBody.appendChild(row);
  });
}

// ---------------------------
// PAGE LOAD SETUP (all in one place)
// ---------------------------
window.addEventListener("DOMContentLoaded", () => {
  loadLibrary();   // load saved books or defaults
  render();        // display books
  addBtn.addEventListener("click", submitBook);  // set up add button
});
