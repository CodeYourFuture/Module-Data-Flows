let myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    myLibrary.push(new Book("Robinson Crusoe", "Daniel Defoe", 252, true));
    myLibrary.push(new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true));
  }
}

const bookTitle = document.getElementById("book-title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

// renamed so we don’t conflict with form.submit()
function addBook() {
  if (
    !bookTitle.value.trim() ||
    !author.value.trim() ||
    !pages.value.trim()
  ) {
    alert("Please fill all fields!");
    return;
  }

  const book = new Book(
    bookTitle.value.trim(),
    author.value.trim(),
    pages.value.trim(),
    check.checked
  );

  myLibrary.push(book);
  render();
}

function Book(bookTitle, author, pages, check) {
  this.bookTitle = bookTitle;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  const table = document.getElementById("display");

  // remove all rows except the header
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  myLibrary.forEach((book, i) => {
    const row = table.insertRow(1);

    row.insertCell(0).textContent = book.bookTitle;
    row.insertCell(1).textContent = book.author;
    row.insertCell(2).textContent = book.pages;

    // read/unread toggle
    const wasReadCell = row.insertCell(3);
    const changeBut = document.createElement("button");
    changeBut.className = "btn btn-success";
    changeBut.textContent = book.check ? "Yes" : "No";
    wasReadCell.appendChild(changeBut);

    changeBut.addEventListener("click", () => {
      book.check = !book.check;
      render();
    });

    // delete button
    const deleteCell = row.insertCell(4);
    const delBut = document.createElement("button");
    delBut.className = "btn btn-warning";
    delBut.textContent = "Delete";
    deleteCell.appendChild(delBut);

    delBut.addEventListener("click", () => {
      alert(`You've deleted: ${book.bookTitle}`);
      myLibrary.splice(i, 1);
      render();
    });
  });
}
