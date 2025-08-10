let myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    const book1 = new Book("Robinson Crusoe", "Daniel Defoe", 252, true);
    const book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true);
    myLibrary.push(book1,book2);
  }
  render();
}

const form = document.getElementById("book-form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const checkReadStatus = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submitNewBook() {
  let title = titleInput.value.trim();
  let author = authorInput.value.trim();
  let pages = Number(pagesInput.value.trim());
  let isRead = checkReadStatus.checked;

  if (!title || !author || !pages || !Number.isInteger(pages) || pages <= 0) {
    alert("Please fill all fields correctly!");
    return false;
  }
  const book = new Book(title, author, pages, isRead);
  myLibrary.push(book);
  render();
  form.reset();
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  submitNewBook();
});

function createReadToggleButton(cell, book) {
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = book.isRead ? "Yes" : "No";
  toggleBtn.className = "btn btn-success";
  toggleBtn.addEventListener("click", function () {
    book.isRead = !book.isRead;
    render();
  });
  cell.appendChild(toggleBtn);
}

function createDeleteButton(cell, book, index) {
  const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn btn-warning";
    deleteBtn.addEventListener("click", function () {
      myLibrary.splice(index, 1);
      render();
      alert(`You've deleted book with title: ${book.title}`);
    });
  cell.appendChild(deleteBtn);
}

class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = Number(pages);
    this.isRead = isRead;
  }
}

function render() {
  const table = document.getElementById("display");
  const tableBody = table.querySelector("tbody");
  //delete old table
  tableBody.innerHTML = "";
  //insert updated row and cells
  myLibrary.forEach((book, index) => {
    const row = tableBody.insertRow(0);

    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const readCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;

    //add and wait for action for read/unread button
    createReadToggleButton(readCell, book);

    //add delete button to every row and render again
    createDeleteButton(deleteCell, book, index);
  });
}
