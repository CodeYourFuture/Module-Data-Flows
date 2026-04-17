// myLibrary is the main array — like a shelf that holds all book objects
let myLibrary = [];

// Use const for DOM references because these elements never change
// "const" means: this variable will always point to the same element
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readCheckbox = document.getElementById("check");

// Wait for the page to fully load before running any code
// addEventListener is safer than window.onload because it allows
// multiple listeners to be registered without overwriting each other
window.addEventListener("load", function () {
  addDefaultBooks();
  render();
});

// Add two default books so the page is not empty on first load
// Renamed from "populateStorage" — that name implied localStorage usage
function addDefaultBooks() {
  if (myLibrary.length === 0) {
    myLibrary.push(new Book("Robinson Crusoe", "Daniel Defoe", "252", true));
    myLibrary.push(
      new Book("The Old Man and the Sea", "Ernest Hemingway", "127", true)
    );
  }
}

// Book is a constructor function — a template for creating book objects
// Think of it as a blank contact card: every book fills in the same four fields
function Book(title, author, pages, hasBeenRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  // Renamed "check" to "hasBeenRead" — much clearer what this field means
  this.hasBeenRead = hasBeenRead;
}

// Called when the user clicks Submit
// Renamed from "submit" to avoid conflict with the browser's built-in submit behaviour
function addBook() {
  // Validate that all fields are filled before adding the book
  if (
    titleInput.value === "" ||
    authorInput.value === "" ||
    pagesInput.value === ""
  ) {
    alert("Please fill all fields!");
    return;
  }

  // Create a new Book object from the form values
  const newBook = new Book(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    readCheckbox.checked
  );

  myLibrary.push(newBook);

  // Clear the form fields after adding the book
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readCheckbox.checked = false;

  render();
}

// createReadButton builds and returns a toggle button for a single book
// Extracting this into its own function makes render() easier to read
function createReadButton(index) {
  const button = document.createElement("button");
  button.className = "btn btn-success";

  // Use textContent instead of innerHTML for safety
  // textContent never runs any HTML or scripts — innerHTML can be dangerous
  // if the text comes from user input
  button.textContent = myLibrary[index].hasBeenRead ? "Yes" : "No";

  button.addEventListener("click", function () {
    // Flip the read status: true becomes false, false becomes true
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
    // splice(index, 1) removes exactly 1 item at position "index"
    myLibrary.splice(index, 1);
    render();
  });

  return button;
}

// render() redraws the entire table from the current myLibrary array
function render() {
  const table = document.getElementById("display");
  const rowCount = table.rows.length;

  // Delete all rows except the header row (row 0)
  for (let i = rowCount - 1; i > 0; i--) {
    table.deleteRow(i);
  }

  // Build one row per book using helper functions
  for (let i = 0; i < myLibrary.length; i++) {
    const row = table.insertRow();
    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const readCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);

    // Use textContent for user data — never innerHTML — to prevent XSS attacks
    // XSS (Cross-Site Scripting) is when a malicious script gets injected into a page
    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    // Append the buttons created by the helper functions
    readCell.appendChild(createReadButton(i));
    deleteCell.appendChild(createDeleteButton(i));
  }
}
