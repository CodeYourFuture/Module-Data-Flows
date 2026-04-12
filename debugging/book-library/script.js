const myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    const book1 = new Book("Robinson Crusoe", "Daniel Defoe", 252, true);
    const book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true);

    myLibrary.push(book1, book2);
  }
}

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readCheckbox = document.getElementById("check");
const displayTable = document.getElementById("display");
const tableBody = displayTable.querySelector("tbody");

function submit() {
  const titleValue = titleInput.value.trim();
  const authorValue = authorInput.value.trim();
  const pagesValue = Number(pagesInput.value);

  if (titleValue === "" || authorValue === "" || !Number.isInteger(pagesValue) || pagesValue < 1) {
    alert("Please fill all fields correctly.");
    return false;
  }

  const book = new Book(titleValue, authorValue, pagesValue, readCheckbox.checked);
  myLibrary.push(book);

  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readCheckbox.checked = false;

  render();
  return true;
}

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function render() {
  tableBody.textContent = "";

  for (const [index, book] of myLibrary.entries()) {
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    const authorCell = document.createElement("td");
    const pagesCell = document.createElement("td");
    const readCell = document.createElement("td");
    const deleteCell = document.createElement("td");

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;

    const toggleReadButton = document.createElement("button");
    toggleReadButton.className = "btn btn-success";
    toggleReadButton.textContent = book.isRead ? "Yes" : "No";
    toggleReadButton.addEventListener("click", function () {
      book.isRead = !book.isRead;
      render();
    });

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-warning";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      myLibrary.splice(index, 1);
      render();
      showMessage(`You've deleted title: ${book.title}`);
    });

    readCell.appendChild(toggleReadButton);
    deleteCell.appendChild(deleteButton);

    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(pagesCell);
    row.appendChild(readCell);
    row.appendChild(deleteCell);

    tableBody.appendChild(row);
  }
}

function showMessage(message) {
  let messageBox = document.getElementById("message");

  if (!messageBox) {
    messageBox = document.createElement("div");
    messageBox.id = "message";
    messageBox.className = "alert alert-info mt-3";
    displayTable.insertAdjacentElement("beforebegin", messageBox);
  }

  messageBox.textContent = message;
}