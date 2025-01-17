let myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
});

function populateStorage() {
  let book1 = new Book("Robinson Crusoe", "Daniel Defoe", "252", true);
  let book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", "127", true);
  myLibrary.push(book1, book2);
  render();
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

// Validates input and adds a new book to the library
function submit() {
  const bookTitle = title.value.trim();
  const bookAuthor = author.value.trim();
  const pageValue = parseInt(pages.value.trim(), 10);

  // Validate input fields
  if (bookTitle === "" || bookAuthor === "") {
    alert("Please fill all fields with valid data!");
    return false;
  }

  if (isNaN(pageValue) || pageValue <= 0 || !Number.isInteger(pageValue)) {
    alert("Please enter a valid number of pages (positive whole number).");
    return false;
  }

  // Add the book to the library and render the table
  let book = new Book(bookTitle, bookAuthor, pageValue, check.checked);
  myLibrary.push(book);
  render();
}

// Book constructor
function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

// Renders the table of books
function render() {
  let table = document.getElementById("display");

  // Remove the existing tbody and create a new one
  let newTbody = document.createElement("tbody");
  table.replaceChild(newTbody, table.tBodies[0]);

  // Populate the table with updated rows
  for (let i = 0; i < myLibrary.length; i++) {
    let row = newTbody.insertRow();

    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let readStatusCell = row.insertCell(3);
    let deleteButtonCell = row.insertCell(4);

    titleCell.innerHTML = myLibrary[i].title;
    authorCell.innerHTML = myLibrary[i].author;
    pagesCell.innerHTML = myLibrary[i].pages;

    // Add and handle the "Read" button
    let changeBut = document.createElement("button");
    changeBut.className = "btn btn-success";
    readStatusCell.appendChild(changeBut);

    let readStatus = myLibrary[i].check ? "Yes" : "No";
    changeBut.innerHTML = readStatus;

    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    // Add the "Delete" button
    let delButton = document.createElement("button");
    deleteButtonCell.appendChild(delButton);
    delButton.className = "btn btn-warning";
    delButton.innerHTML = "Delete";

    delButton.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
  }
}

