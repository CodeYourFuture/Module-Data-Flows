// Data store this variable never changes
const myLibrary = [];

// DOM nodes 
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readCheck = document.getElementById("check");
const tableBody = document.querySelector("#display tbody");



// Book model
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}
// initial load 
window.addEventListener("load", function (e) {
  populateStorage();
});
// Add default books only once
function populateStorage() {
  if (myLibrary.length === 0) {
    myLibrary.push(new Book("Robinson Crusoe", "Daniel Defoe", 252, true));
    myLibrary.push(new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true));
    render();
  }
}

// Handle form submission
function handleSubmit() {
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const pages = Number(pagesInput.value);

  if (!title || !author || !pages || pages <= 0) {
    showMessage("Please enter valid book details.");
    return;
  }

  const book = new Book(title, author, pages, readCheckbox.checked);
  myLibrary.push(book);

  render();
  showMessage(`Added "${title}" to your library.`);
}
 
// Render table
function render() {
  tableBody.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const row = tableBody.insertRow();

    row.insertCell().textContent = book.title;
    row.insertCell().textContent = book.author;
    row.insertCell().textContent = book.pages;

    // Toggle read button
    const readCell = row.insertCell();
    const toggleReadBtn = document.createElement("button");
    toggleReadBtn.className = "btn btn-success btn-sm";
    toggleReadBtn.textContent = book.read ? "Yes" : "No";
    toggleReadBtn.addEventListener("click", () => {
      book.read = !book.read;
      render();
    });
    readCell.appendChild(toggleReadBtn);
    // Delete button
    const deleteCell = row.insertCell();
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-warning btn-sm";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      render();
      showMessage(`Deleted "${book.title}".`);
    });
    deleteCell.appendChild(deleteBtn);
  });
}


