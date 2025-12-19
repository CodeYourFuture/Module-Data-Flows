let myLibrary = [];

const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const pagesInput = document.getElementById("pagesInput");
const readInput = document.getElementById("readInput");
const errorBox = document.getElementById("errorMessage");
const tableBody = document.querySelector("#display tbody");

window.addEventListener("load", () => {
  populateInitialBooks();
  render();
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages; // number
  this.read = read;   // boolean
}

function populateInitialBooks() {
  if (myLibrary.length > 0) return;

  myLibrary.push(
    new Book("Robinson Crusoe", "Daniel Defoe", 252, true),
    new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true)
  );
}

function addBook() {
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const pages = pagesInput.value.trim();
  const read = readInput.checked;

  if (!title || !author || !pages) {
    showError("Please fill all fields!");
    return;
  }

  if (isNaN(Number(pages)) || Number(pages) <= 0) {
    showError("Pages must be a positive number.");
    return;
  }

  if (myLibrary.some(b => b.title === title && b.author === author)) {
    showError("This book already exists!");
    return;
  }

  const book = new Book(title, author, Number(pages), read);
  myLibrary.push(book);
  clearForm();
  render();
}

document.getElementById("submitBtn").addEventListener("click", addBook);

function clearForm() {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.checked = false;
}

function render() {
  tableBody.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const row = tableBody.insertRow();

    const titleCell = row.insertCell();
    const authorCell = row.insertCell();
    const pagesCell = row.insertCell();
    const readCell = row.insertCell();
    const deleteCell = row.insertCell();

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;

    const toggleBtn = document.createElement("button");
    toggleBtn.className = book.read ? "btn btn-success" : "btn btn-primary";
    toggleBtn.textContent = book.read ? "Yes" : "No";
    toggleBtn.addEventListener("click", () => {
      book.read = !book.read;
      render();
    });
    readCell.appendChild(toggleBtn);

    const delBtn = document.createElement("button");
    delBtn.className = "btn btn-warning";
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      render();
      showError(`Deleted: ${book.title}`);
    });
    deleteCell.appendChild(delBtn);
  });
}

function showError(message) {
  errorBox.textContent = message;
  errorBox.classList.add("show");
  setTimeout(() => errorBox.classList.remove("show"), 3000);
}
