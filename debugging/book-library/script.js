// Data store
const myLibrary = [];

// DOM Element References with clear suffixes
const bookForm = document.getElementById("book-form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const checkInput = document.getElementById("check");
const bookListBody = document.getElementById("book-list");
const statusMessageEl = document.getElementById("status-message");

// Book Constructor
function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages; // Stored as Number
  this.check = check; // Stored as Boolean
}

// Populate default books once on load
function initLibrary() {
  if (myLibrary.length === 0) {
    myLibrary.push(new Book("Robinson Crusoe", "Daniel Defoe", 252, true));
    myLibrary.push(
      new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true)
    );
  }
  render();
}

// Preprocess and handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  // Input Sanitization & Normalization (.trim() and Number conversion)
  const titleValue = titleInput.value.trim();
  const authorValue = authorInput.value.trim();
  const pagesValue = Number(pagesInput.value);
  const isRead = checkInput.checked;

  // Validation check
  if (!titleValue || !authorValue || isNaN(pagesValue) || pagesValue <= 0) {
    showStatus("Please enter valid book details.", "danger");
    return;
  }

  // Create and add new book
  const newBook = new Book(titleValue, authorValue, pagesValue, isRead);
  myLibrary.push(newBook);

  // Reset form inputs
  bookForm.reset();

  // Render updated table
  render();
}

// Efficient DOM Rendering
function render() {
  // Fast clearing of table rows without loops
  bookListBody.textContent = "";

  myLibrary.forEach((book, index) => {
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = book.title; // Safe textContent preventing XSS

    const authorCell = document.createElement("td");
    authorCell.textContent = book.author;

    const pagesCell = document.createElement("td");
    pagesCell.textContent = book.pages;

    // Toggle Read Button
    const wasReadCell = document.createElement("td");
    const toggleReadBtn = document.createElement("button");
    toggleReadBtn.className = book.check
      ? "btn btn-success btn-sm"
      : "btn btn-secondary btn-sm";
    toggleReadBtn.textContent = book.check ? "Yes" : "No"; // Concise ternary operator

    toggleReadBtn.addEventListener("click", () => {
      book.check = !book.check;
      render();
    });
    wasReadCell.appendChild(toggleReadBtn);

    // Delete Button
    const deleteCell = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      const deletedTitle = book.title;

      // Perform deletion FIRST
      myLibrary.splice(index, 1);
      render();

      // Display non-blocking feedback AFTER deletion
      showStatus(`You deleted "${deletedTitle}" from your library.`, "info");
    });
    deleteCell.appendChild(deleteBtn);

    // Append cells to row
    row.append(titleCell, authorCell, pagesCell, wasReadCell, deleteCell);
    bookListBody.appendChild(row);
  });
}

// Non-blocking status message UI helper
function showStatus(message, type = "info") {
  statusMessageEl.textContent = message;
  statusMessageEl.className = `alert alert-${type}`;
  statusMessageEl.classList.remove("d-none");

  // Auto-hide after 3 seconds
  setTimeout(() => {
    statusMessageEl.classList.add("d-none");
  }, 3000);
}

// Event Listeners (Module compatible)
bookForm.addEventListener("submit", handleFormSubmit);
window.addEventListener("DOMContentLoaded", initLibrary);
