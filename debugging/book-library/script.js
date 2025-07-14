let myLibrary = [];

// Function to initialize the library with default books (if any)
window.addEventListener("load", function () {
  populateStorage();
  render();
});

// Prepopulate with books if the library is empty
function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", "252", true);
    let book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", "127", true);
    myLibrary.push(book1);
    myLibrary.push(book2);
  }
}

// Form elements
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

// Event listener for submit button
document.getElementById("submitBtn").addEventListener("click", function () {
  submit();
});

// Function to submit a new book
function submit() {
  if (
    title.value === "" ||
    author.value === "" ||
    pages.value === ""
  ) {
    alert("Please fill all fields!");
    return;
  }

  let book = new Book(title.value, author.value, pages.value, check.checked);
  myLibrary.push(book); // Add new book to the library
  render(); // Update the table with the new book
  clearForm(); // Clear the form inputs after adding the book
}

// Constructor for a new book object
function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

// Function to render the books to the table
function render() {
  let table = document.getElementById("book-list");
  table.innerHTML = ""; // Clear the table before rendering new rows

  myLibrary.forEach((book, index) => {
    let row = document.createElement("tr");

    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);

    titleCell.innerText = book.title;
    authorCell.innerText = book.author;
    pagesCell.innerText = book.pages;

    // Add the Read/Unread status
    let readStatus = book.check ? "Yes" : "No";
    wasReadCell.innerText = readStatus;

    // Add Change Read Status Button
    let changeBut = document.createElement("button");
    changeBut.className = "btn btn-success";
    changeBut.innerText = "Change Status";
    changeBut.addEventListener("click", function () {
      book.check = !book.check; // Toggle the read status
      render(); // Re-render after changing status
    });
    wasReadCell.appendChild(changeBut);

    // Add Delete Button
    let delButton = document.createElement("button");
    delButton.className = "btn btn-danger";
    delButton.innerText = "Delete";
    delButton.addEventListener("click", function () {
      myLibrary.splice(index, 1); // Remove the book from the library
      render(); // Re-render after deleting
    });
    deleteCell.appendChild(delButton);

    table.appendChild(row); // Append the row to the table
  });
}

// Function to clear form fields after submission
function clearForm() {
  title.value = "";
  author.value = "";
  pages.value = "";
  check.checked = false;
}
