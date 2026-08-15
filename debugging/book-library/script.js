const myLibrary = [];

let titleInput;
let authorInput;
let pagesInput;
let checkInput;
let submitBtn;
let bookList;
let messageEl;

function init() {
  // Get elements from HTML
  titleInput = document.getElementById("title");
  authorInput = document.getElementById("author");
  pagesInput = document.getElementById("pages");
  checkInput = document.getElementById("check");
  submitBtn = document.getElementById("submitBtn");
  bookList = document.getElementById("bookList");
  messageEl = document.getElementById("message");

  // Listen for Submit button click
  submitBtn.addEventListener("click", submitBook);

  // Add initial books
  const book1 = new Book("Robinson Crusoe", "Daniel Defoe", 252, true);
  const book2 = new Book(
    "The Old Man and the Sea",
    "Ernest Hemingway",
    127,
    true
  );

  myLibrary.push(book1);
  myLibrary.push(book2);

  render();
}

init();

// Check the right input from forms and if it's okay,
// add the new book object to the array and render
function submitBook() {
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const pages = Number(pagesInput.value);

  if (!title || !author || !Number.isInteger(pages) || pages < 1) {
    showMessage("Please enter valid book information.", "danger");
    return;
  }

  const book = new Book(title, author, pages, checkInput.checked);

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

function render() {
  // Delete old table rows
  bookList.replaceChildren();

  // Insert updated rows and cells
  const length = myLibrary.length;

  for (let i = 0; i < length; i++) {
    const row = bookList.insertRow();

    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const wasReadCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);

    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    // Add and wait for action for read/unread button
    const changeButton = document.createElement("button");
    changeButton.className = "btn btn-success";

    const readStatus = myLibrary[i].check ? "Yes" : "No";
    changeButton.textContent = readStatus;

    wasReadCell.appendChild(changeButton);

    changeButton.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    // Add delete button to every row
    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-warning";
    deleteButton.textContent = "Delete";

    deleteCell.appendChild(deleteButton);

    deleteButton.addEventListener("click", function () {
      const deletedTitle = myLibrary[i].title;

      myLibrary.splice(i, 1);
      render();

      showMessage(`You've deleted title: ${deletedTitle}`, "success");
    });
  }
}

// Display a message without using alert()
function showMessage(message, type) {
  messageEl.textContent = message;
  messageEl.className = `alert alert-${type}`;
  messageEl.hidden = false;

  setTimeout(function () {
    messageEl.hidden = true;
  }, 3000);
}
