// const is safer than let here because myLibrary is never reassigned —
// we only call .push() and .splice() on it, which modify its contents, not the variable itself
const myLibrary = [];

// Declare all shared DOM references at the top of the file
// These are const because they always point to the same HTML elements
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readCheckbox = document.getElementById("check");

// Wait for the page to fully load before running any code
window.addEventListener("load", function () {
  addDefaultBooks();
  render();
});

// Add two default books so the page is not empty on first load
function addDefaultBooks() {
  if (myLibrary.length === 0) {
    // Page count is stored as a NUMBER (252, not "252") — correct data type
    myLibrary.push(new Book("Robinson Crusoe", "Daniel Defoe", 252, true));
    myLibrary.push(
      new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true)
    );
  }
}

// Book is a constructor function — a template for creating book objects
function Book(title, author, pages, hasBeenRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasBeenRead = hasBeenRead;
}

// sanitiseText trims leading and trailing spaces from a string
// Prevents accepting inputs that contain only spaces as valid values
function sanitiseText(value) {
  return value.trim();
}

// sanitisePages converts the pages input to a safe integer
// Rejects scientific notation like "3e2" which would display strangely
function sanitisePages(value) {
  const trimmed = value.trim();
  // If the input contains "e" or "E", it is scientific notation — reject it
  if (trimmed.toLowerCase().includes("e")) {
    return NaN;
  }
  const parsed = Number(trimmed);
  if (trimmed === "" || isNaN(parsed) || parsed <= 0) {
    return NaN;
  }
  return Math.floor(parsed);
}

// Called when the user clicks Submit
function addBook() {
  // Step 1: Sanitise the inputs — clean them before checking or using them
  const cleanTitle = sanitiseText(titleInput.value);
  const cleanAuthor = sanitiseText(authorInput.value);
  const cleanPages = sanitisePages(pagesInput.value);

  // Step 2: Validate — reject empty strings and invalid page numbers
  if (cleanTitle === "" || cleanAuthor === "" || isNaN(cleanPages)) {
    alert("Please fill all fields with valid values!");
    return;
  }

  // Step 3: Create and store the new book using the cleaned values
  const newBook = new Book(
    cleanTitle,
    cleanAuthor,
    cleanPages,
    readCheckbox.checked
  );
  myLibrary.push(newBook);

  // Step 4: Clear the form fields after adding the book
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readCheckbox.checked = false;

  render();
}

// createReadButton builds and returns a toggle button for a single book
function createReadButton(index) {
  const button = document.createElement("button");
  button.className = "btn btn-success";
  button.textContent = myLibrary[index].hasBeenRead ? "Yes" : "No";

  button.addEventListener("click", function () {
    myLibrary[index].hasBeenRead = !myLibrary[index].hasBeenRead;
    render();
  });

  return button;
}

// createDeleteButton builds and returns a delete button for a single book
function createDeleteButton(index) {
  const button = document.createElement("button");
  button.className = "btn btn-warning";
  button.textContent = "Delete";

  button.addEventListener("click", function () {
    // Show an alert with the deleted book's title — restoring original behaviour
    alert(`"${myLibrary[index].title}" has been deleted.`);
    myLibrary.splice(index, 1);
    render();
  });

  return button;
}

// render() redraws the entire table from the current myLibrary array
function render() {
  const table = document.getElementById("display");

  // Clear the tbody in one step — simpler and faster than deleting rows one by one
  const tbody = table.querySelector("tbody");
  tbody.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    const row = tbody.insertRow();
    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const readCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);

    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    readCell.appendChild(createReadButton(i));
    deleteCell.appendChild(createDeleteButton(i));
  }
}
