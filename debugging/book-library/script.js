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

  if (!title || !author || !pages || isNaN(pages) || pages <= 0) {
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
  //delete old table
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
  //insert updated row and cells
  myLibrary.forEach((book, index) => {
    const row = table.insertRow(1);
    row.insertCell(0).textContent = book.title;
    row.insertCell(1).textContent = book.author;
    row.insertCell(2).textContent = book.pages;

    //add and wait for action for read/unread button
    const wasReadCell = row.insertCell(3);
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = book.isRead ? "Yes" : "No";
    toggleBtn.className = "btn btn-success";
    toggleBtn.addEventListener("click", function () {
      book.isRead = !book.isRead;
      render();
    });
    wasReadCell.appendChild(toggleBtn);

    //add delete button to every row and render again
    const deleteCell = row.insertCell(4);
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn btn-warning";
    deleteBtn.addEventListener("click", function () {
      myLibrary.splice(index, 1);
      render();
      alert(`You've deleted book with title: ${book.title}`);
    });
    deleteCell.appendChild(deleteBtn);
  });
}
