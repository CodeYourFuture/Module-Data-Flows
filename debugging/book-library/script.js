let myLibrary = [];

// =====> Load initial data
window.addEventListener("load", function () {
  populateStorage();
  render();
});

// =====> Default books
function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", 252, true);
    let book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      127,
      true
    );

    myLibrary.push(book1, book2);
  }
}

// =====> DOM elements
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");
const bookForm = document.getElementById("book-form");

// =====> Form submit
bookForm.addEventListener("submit", function (e) {
  e.preventDefault();
  submit();
});

// =====> Add new book
function submit() {
  const titleValue = title.value.trim();
  const authorValue = author.value.trim();
  const pagesValue = pages.value.trim();

  // Validation (improved)
  if (!titleValue || !authorValue || !pagesValue) {
    alert("Please fill all fields!");
    return;
  }

  // Create new book
  let book = new Book(
    titleValue,
    authorValue,
    Number(pagesValue),
    check.checked
  );

  myLibrary.push(book);

  render();
  bookForm.reset();

  // safely close bootstrap form (optional chaining operator)
  document.getElementById("demo")?.classList.remove("show");
}

// =====> Book constructor
function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

// =====> Render table
function render() {
  let table = document.getElementById("display");

  // clear old rows (keep header)
  for (let i = table.rows.length - 1; i > 0; i--) {
    table.deleteRow(i);
  }

  // render books
  myLibrary.forEach((book, index) => {
    let row = table.insertRow(1);

    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let readCell = row.insertCell(3);
    let actionCell = row.insertCell(4);

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;

    // =====> Read button
    let readBtn = document.createElement("button");
    readBtn.className = "btn btn-success";
    readBtn.textContent = book.check ? "Read" : "Unread";

    readBtn.addEventListener("click", function () {
      book.check = !book.check;
      render();
    });

    readCell.appendChild(readBtn);

    // =====> Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-warning";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
      alert(`Deleted: ${book.title}`);
      myLibrary.splice(index, 1);
      render();
    });

    actionCell.appendChild(deleteBtn);
  });
}
