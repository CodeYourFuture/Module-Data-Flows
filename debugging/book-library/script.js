let myLibrary = [];

// DOM refs
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");
const submitBtn = document.getElementById("submitBtn");
const table = document.getElementById("display");

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    const book1 = new Book("Robison Crusoe", "Daniel Defoe", "252", true);
    const book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      "127",
      true
    );
    myLibrary.push(book1, book2);
  }
}

// wire submit button
submitBtn.addEventListener("click", addBook);

// validate and add book to library
function addBook() {
  // trim to avoid spaces-only input
  const t = title.value.trim();
  const a = author.value.trim();
  const p = pages.value.trim();

  if (!t || !a || !p) {
    alert("Please fill all fields!");
    return;
  }

  // pages should be a positive number
  if (isNaN(p) || Number(p) <= 0) {
    alert("Please enter a valid number of pages.");
    return;
  }

  const book = new Book(t, a, p, check.checked);
  myLibrary.push(book);

  // clear inputs and close the collapse (optional)
  title.value = "";
  author.value = "";
  pages.value = "";
  check.checked = false;

  render();
}

// Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  // store boolean as 'read'
  this.read = !!read;
}

// render table rows from myLibrary
function render() {
  // clear existing tbody rows
  // keep the thead, clear tbody
  const tbody = table.querySelector("tbody");
  tbody.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const row = tbody.insertRow();

    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const wasReadCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;

    // Read toggle button
    const changeBut = document.createElement("button");
    changeBut.className = "btn btn-sm btn-outline-success";
    changeBut.textContent = book.read ? "Yes" : "No";
    changeBut.addEventListener("click", (function (index) {
      return function () {
        myLibrary[index].read = !myLibrary[index].read;
        render();
      };
    })(i));
    wasReadCell.appendChild(changeBut);

    // Delete button
    const delBut = document.createElement("button");
    delBut.className = "btn btn-sm btn-warning";
    delBut.textContent = "Delete";
    delBut.addEventListener("click", (function (index) {
      return function () {
        if (confirm(`Delete "${myLibrary[index].title}"?`)) {
          myLibrary.splice(index, 1);
          render();
        }
      };
    })(i));
    deleteCell.appendChild(delBut);
  }
}