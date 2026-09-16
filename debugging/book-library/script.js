const myLibrary = [];

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readCheckbox = document.getElementById("check");
const bookForm = document.getElementById("book-form");
const bookList = document.getElementById("book-list");
const messageEl = document.getElementById("message");

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function populateStorage() {
  if (myLibrary.length > 0) {
    return;
  }

  const book1 = new Book(
    "Robinson Crusoe",
    "Daniel Defoe",
    252,
    true
  );

  const book2 = new Book(
    "The Old Man and the Sea",
    "Ernest Hemingway",
    127,
    true
  );

  myLibrary.push(book1, book2);
}

function addBook(event) {
  event.preventDefault();

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const pages = Number(pagesInput.value);

  if (title === "" || author === "") {
    showMessage("Please enter a title and author.");
    return;
  }

  if (!Number.isInteger(pages) || pages <= 0) {
    showMessage("Please enter a valid number of pages.");
    return;
  }

  const book = new Book(
    title,
    author,
    pages,
    readCheckbox.checked
  );

  myLibrary.push(book);

  bookForm.reset();

  render();
  showMessage(`"${book.title}" was added successfully.`);
}

function showMessage(message) {
  messageEl.textContent = message;
}

function render() {
  // Remove all existing book rows at once
  bookList.replaceChildren();

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];

    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    const authorCell = document.createElement("td");
    const pagesCell = document.createElement("td");
    const readCell = document.createElement("td");
    const deleteCell = document.createElement("td");

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;

    const changeButton = document.createElement("button");
    changeButton.className = "btn btn-success";
    changeButton.textContent = book.check ? "Yes" : "No";

    changeButton.addEventListener("click", function () {
      book.check = !book.check;
      render();
    });

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-warning";
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
      const deletedTitle = book.title;

      myLibrary.splice(i, 1);

      render();

      showMessage(`You've deleted title: ${deletedTitle}`);
    });

    readCell.appendChild(changeButton);
    deleteCell.appendChild(deleteButton);

    row.append(
      titleCell,
      authorCell,
      pagesCell,
      readCell,
      deleteCell
    );

    bookList.appendChild(row);
  }
}

function initialiseLibrary() {
  populateStorage();
  render();
}

bookForm.addEventListener("submit", addBook);

initialiseLibrary();
