let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", 252, true);
    let book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true);
    myLibrary.push(book1, book2);
  }
}

// Use meaningful variable names for DOM elements
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readCheckbox = document.getElementById("check");

// Preprocess input before adding a book
function submit() {
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const pages = parseInt(pagesInput.value.trim(), 10);
  const isRead = readCheckbox.checked;

  if (!title || !author || isNaN(pages)) {
    alert("Please fill all fields correctly!");
    return;
  }

  let book = new Book(title, author, pages, isRead);
  myLibrary.push(book);
  render();

  // Clear input fields after submission
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readCheckbox.checked = false;
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

// Efficiently clear table rows
function render() {
  const table = document.getElementById("display");
  table.innerHTML = "<tr><th>Title</th><th>Author</th><th>Pages</th><th>Read</th><th>Actions</th></tr>";

  myLibrary.forEach((book, index) => {
    const row = table.insertRow();
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td><button class="btn btn-success toggle-read" data-index="${index}">${book.check ? "Yes" : "No"}</button></td>
      <td><button class="btn btn-warning delete-book" data-index="${index}">Delete</button></td>
    `;
  });

  // Add event listeners for buttons
  document.querySelectorAll(".toggle-read").forEach(button => {
    button.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      myLibrary[index].check = !myLibrary[index].check;
      render();
    });
  });

  document.querySelectorAll(".delete-book").forEach(button => {
    button.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      myLibrary.splice(index, 1);
      render();
      alert("Book deleted successfully.");
    });
  });
}

// Make the submit function globally accessible
window.submit = submit;
