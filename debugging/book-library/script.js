// array
let myLibrary = [];
// form elements
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const checkInput = document.getElementById("check");
const addBookForm = document.getElementById("addBookForm");

// populate the library with some default books if it's empty
function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", 252, true);
    let book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true);
    myLibrary.push(book1);
    myLibrary.push(book2);
  }
}

// this function is now exclusively for adding a new book to the array and rendering, replaced the old submit()
function addBookToLibrary() {
  let newBook = new Book(
    titleInput.value,
    authorInput.value,
    parseInt(pagesInput.value),
    checkInput.checked
  );
  myLibrary.push(newBook);
  addBookForm.reset();
  render();
}

addBookForm.addEventListener('submit', function (event) {
  event.preventDefault(); // prevents the default page reload
  addBookToLibrary();
});

// book constructor
function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function displayNotification(message) {
  const container = document.getElementById("notification-container");
  container.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
    ${message}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;
  setTimeout(() => {
    const alert = container.querySelector('.alert');
    if (alert) {
      alert.classList.remove('show');
      alert.classList.add('fade');
      setTimeout(() => 
        alert.remove(), 150);
      }
    }, 3000); // 3 secs
}

// renders library data into HTML
function render() {
  let tableBody = document.querySelector("#display tbody");
  tableBody.innerHTML = '';

  myLibrary.forEach((book, index) => {
    let row = tableBody.insertRow();
    row.insertCell(0).textContent = book.title;
    row.insertCell(1).textContent = book.author;
    row.insertCell(2).textContent = book.pages;

    // 'read' status
    const wasReadCell = row.insertCell(3);
    const readStatusBtn = document.createElement("button");
    readStatusBtn.className = "btn btn-success";
    readStatusBtn.textContent = book.check ? "Yes" : "No";
    wasReadCell.appendChild(readStatusBtn);

    readStatusBtn.addEventListener("click", function () {
      book.check = !book.check;
      render();
    });

    const deleteCell = row.insertCell(4);
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-warning";
    deleteBtn.textContent = "Delete";
    deleteCell.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function () {
      const deletedTitle = myLibrary[index].title;
      myLibrary.splice(index, 1);
      render();
      displayNotification(`You've deleted "${deletedTitle}"`);
    });
  });
}

// ensures functions are defined before being called on page load
window.addEventListener("load", function () {
  populateStorage();
  render();
});
