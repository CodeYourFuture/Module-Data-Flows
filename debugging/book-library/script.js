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

  if (isNaN(pagesNum) || pagesNum <= 0) {
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

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td></td>
      <td></td>
    `;

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
  alert(`You deleted: ${myLibrary[index].title}`);
  myLibrary.splice(index, 1);
  renderLibrary();
}
