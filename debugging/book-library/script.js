let myLibrary = [];
class Book {
  constructor(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = Boolean(hasRead);
  }
}

//  Initial Setup
window.addEventListener("load", () => {
  seedInitialBooks();
  renderLibrary();
  document.getElementById("submitBtn").addEventListener("click", handleSubmit);
});

// Add starter books if library is empty
function seedInitialBooks() {
  if (myLibrary.length === 0) {
    myLibrary.push(new Book("Robinson Crusoe", "Daniel Defoe", 252, true));
    myLibrary.push(new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true));
  }
}

//  Form Inputs
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readCheckBox = document.getElementById("check");

//  Form Submission
function handleSubmit() {
  const titleVal = titleInput.value.trim();
  const authorVal = authorInput.value.trim();
  const pagesVal = pagesInput.value.trim();

  if (!validateInputs(titleVal, authorVal, pagesVal)) return;

  const newBook = new Book(
    titleVal,
    authorVal,
    Number(pagesVal),
    readCheckBox.checked
  );

  myLibrary.push(newBook);
  resetForm();
  renderLibrary();
}

// Validate input values
function validateInputs(title, author, pages) {
  if (!title || !author || !pages) {
    alert("Please fill all fields!");
    return false;
  }

  const pagesNum = Number(pages);

  if (!Number.isInteger(pagesNum) || pagesNum <= 0) {
    alert("Please enter a valid number of pages!");
    return false;
  }

  return true;
}

// Clear form after successful submission
function resetForm() {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readCheckBox.checked = false;
}

//  Rendering
function renderLibrary() {
  const tbody = document.querySelector("#display tbody");
  tbody.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = book.title;
    row.appendChild(titleCell);

    const authorCell = document.createElement("td");
    authorCell.textContent = book.author;
    row.appendChild(authorCell);

    const pagesCell = document.createElement("td");
    pagesCell.textContent = book.pages;
    row.appendChild(pagesCell);

    const readCell = document.createElement("td");
    row.appendChild(readCell);

    const deleteCell = document.createElement("td");
    row.appendChild(deleteCell);

    //  Read Button
    const readButton = document.createElement("button");
    readButton.textContent = book.hasRead ? "Yes" : "No";
    readButton.className = book.hasRead ? "btn btn-success" : "btn btn-danger";
    readButton.addEventListener("click", () => toggleReadStatus(index));

    row.children[3].appendChild(readButton);

    //  Delete Button
    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-warning";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteBook(index));

    row.children[4].appendChild(deleteButton);

    tbody.appendChild(row);
  });
}

// Toggle read/unread status
function toggleReadStatus(index) {
  myLibrary[index].hasRead = !myLibrary[index].hasRead;
  renderLibrary();
}

// Delete a book from the library
function deleteBook(index) {
const confirmed = confirm( `Are you sure you want to delete "${myLibrary[index].title}"?` );
if (!confirmed) return;
const deletedBook  = myLibrary[index].title;
myLibrary.splice(index, 1);
renderLibrary();
alert(`"${deletedBook}" has been deleted from your library.`);
}