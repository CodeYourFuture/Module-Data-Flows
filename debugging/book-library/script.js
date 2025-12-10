let myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
  render();

  // changed from form submit to button click
  document.getElementById("addBookBtn").addEventListener("click", addBook);
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
  // Get and sanitize values once
  const titleValue = bookTitle.value.trim();
  const authorValue = author.value.trim();
  const pagesValue = pages.value.trim();
  const isRead = check.checked;

  // Basic empty validation
  if (!titleValue || !authorValue || !pagesValue) {
    alert("Please fill all fields!");
    return;
  }

  // Validate page number properly
  const pagesNumber = Number(pagesValue);
  if (!Number.isInteger(pagesNumber) || pagesNumber <= 0) {
    alert("Please enter a valid positive page count!");
    return;
  }

  // Create the book with sanitized values
  const book = new Book(titleValue, authorValue, pagesNumber, isRead);

  // Save to library
  myLibrary.push(book);

  // Re-render UI
  render();
}

function Book(titleValue, authorValue, pagesNumber, isRead) {
  this.bookTitle = titleValue;
  this.author = authorValue;
  this.pages = pagesNumber;
  this.check = isRead;
}


function render() {
  const table = document.getElementById("display");

  const tbody = table.querySelector('tbody');
  tbody.innerHTML = ''; // clears all rows efficiently
  
  myLibrary.forEach((book, i) => {
    const row = tbody.insertRow(); // insert row into tbody

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
