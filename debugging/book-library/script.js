let myLibrary = [];

// Event listener for window load
window.addEventListener("load", function () {
  populateStorage();  // Populate the library with initial data if empty
  render();  // Render the library to display books
});

// The Book constructor to create book objects
function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

// Populate the library with books, either from localStorage or default values
function populateStorage() {
  // If there are no books in localStorage, populate with default books
  if (localStorage.getItem("myLibrary") === null) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", "252", true);
    let book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", "127", true);
    myLibrary.push(book1);
    myLibrary.push(book2);
    saveToLocalStorage();  // Save initial data to localStorage
  } else {
    myLibrary = JSON.parse(localStorage.getItem("myLibrary"));  // Load books from localStorage
  }
}

// Function to render the books to the HTML table
function render() {
  let table = document.getElementById("display");
  // Clear the current table rows (except the header row)
  let rowsNumber = table.rows.length;
  for (let n = rowsNumber - 1; n > 0; n--) {
    table.deleteRow(n);
  }

  // Insert updated rows for each book in myLibrary
  myLibrary.forEach((book, i) => {
    let row = table.insertRow();
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);

    titleCell.innerHTML = book.title;
    authorCell.innerHTML = book.author;
    pagesCell.innerHTML = book.pages;

    // Create a button to toggle the read/unread status of the book
    let changeBut = document.createElement("button");
    changeBut.className = "btn btn-success";
    let readStatus = book.check ? "Yes" : "No";
    changeBut.innerText = readStatus;
    wasReadCell.appendChild(changeBut);

    // Event listener to toggle the book's read status
    changeBut.addEventListener("click", function () {
      book.check = !book.check;
      saveToLocalStorage();  // Save changes to localStorage
      render();  // Re-render the table
    });

    // Create a delete button for each book
    let delButton = document.createElement("button");
    delButton.className = "btn btn-warning";
    delButton.innerHTML = "Delete";
    deleteCell.appendChild(delButton);

    // Event listener to delete the book
    delButton.addEventListener("click", function () {
      alert(`You've deleted title: ${book.title}`);
      myLibrary.splice(i, 1);
      saveToLocalStorage();  // Save updated library to localStorage
      render();  // Re-render the table
    });
  });
}

// Function to save myLibrary to localStorage
function saveToLocalStorage() {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

// Form element references
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

// Submit function to add a new book
function submit() {
  // Validate form fields
  if (title.value === "" || pages.value === "") {
    alert("Please fill in all fields!");
    return false;
  } else {
    let book = new Book(title.value, author.value, pages.value, check.checked);
    myLibrary.push(book);  // Add the new book to the library
    saveToLocalStorage();  // Save updated library to localStorage
    render();  // Re-render the table
  }
}
