// myLibrary is the main array — like a shelf that holds all book objects
let myLibrary = [];

// Wait for the page to fully load before running any code
window.addEventListener("load", function (e) {
  populateStorage(); // Add default books if the library is empty
  render(); // Draw the table on screen
});

// Add two default books so the page is not empty on first load
function populateStorage() {
  if (myLibrary.length == 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", "252", true);
    let book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      "127",
      true
    );
    myLibrary.push(book1);
    myLibrary.push(book2);
  }
}

// Read the form input elements from the HTML
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

// Called when the user clicks Submit — validates input then adds a new book
function submit() {
  // BUG 2 FIX: also check author field is not empty
  if (
    title.value == null ||
    title.value == "" ||
    author.value == null ||
    author.value == "" ||
    pages.value == null ||
    pages.value == ""
  ) {
    alert("Please fill all fields!");
    return false;
  } else {
    // BUG 3 FIX: was title.value twice — now correctly uses author.value
    let book = new Book(title.value, author.value, pages.value, check.checked);
    // BUG 2 FIX: was "library" (undefined) — corrected to "myLibrary"
    myLibrary.push(book);
    render();
  }
}

// Book is a constructor function — like a template for creating book objects
// Think of it as a blank form: every book fills in the same four fields
function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

// Redraws the entire table from scratch using the current myLibrary array
function render() {
  let table = document.getElementById("display");
  let rowsNumber = table.rows.length;

  // Delete all existing rows except the header row (row 0)
  // BUG 1 FIX: was "n-- {" — missing closing parenthesis, caused total JS failure
  for (let n = rowsNumber - 1; n > 0; n--) {
    table.deleteRow(n);
  }

  // Loop through every book in myLibrary and build one table row per book
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = table.insertRow(1); // Insert a new row after the header
    let titleCell = row.insertCell(0); // First column: Title
    let authorCell = row.insertCell(1); // Second column: Author
    let pagesCell = row.insertCell(2); // Third column: Pages
    let wasReadCell = row.insertCell(3); // Fourth column: Read button
    let deleteCell = row.insertCell(4); // Fifth column: Delete button

    // Fill the text cells with data from the book object
    titleCell.innerHTML = myLibrary[i].title;
    authorCell.innerHTML = myLibrary[i].author;
    pagesCell.innerHTML = myLibrary[i].pages;

    // Create the Read/Unread toggle button
    let changeBut = document.createElement("button");
    changeBut.id = i;
    changeBut.className = "btn btn-success";
    wasReadCell.appendChild(changeBut);

    // BUG 5 FIX: logic was inverted — true (read) now correctly shows "Yes"
    let readStatus = "";
    if (myLibrary[i].check == true) {
      readStatus = "Yes";
    } else {
      readStatus = "No";
    }
    changeBut.innerText = readStatus;

    // Clicking the button flips the read status and redraws the table
    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    // BUG 4 FIX: variable was named "delButton" then used as "delBut"
    // Now consistently named "delBut" throughout
    // Also fixed: "clicks" event name changed to "click"
    let delBut = document.createElement("button");
    delBut.id = i + 5;
    deleteCell.appendChild(delBut);
    delBut.className = "btn btn-warning";
    delBut.innerHTML = "Delete";
    delBut.addEventListener("click", function () {
      myLibrary.splice(i, 1); // Remove 1 book at index i from the array
      render(); // Redraw the table without the deleted book
    });
  }
}
