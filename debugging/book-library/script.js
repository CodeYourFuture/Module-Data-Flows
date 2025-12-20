let myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", 252, true);
    let book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      127,
      true
    );
    myLibrary.push(book1);
    myLibrary.push(book2);
  }
}

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readCheck = document.getElementById("check");
const submitButton = document.getElementById("submit-btn");
const tableBody = document.querySelector("#display tbody");

submitButton.addEventListener("click", submitBook);

// Check the inputs. If they are OK, add a new book and render the table.
function submitBook() {
  const titleValue = titleInput.value.trim();
  const authorValue = authorInput.value.trim();
  const pagesValue = pagesInput.value.trim();

  if (titleValue === "" || authorValue === "" || pagesValue === "") {
    alert("Please fill all fields!");
    return;
  }

  const pagesNumber = Number(pagesValue);
  if (!Number.isInteger(pagesNumber) || pagesNumber <= 0) {
    alert("Please enter a valid page count!");
    return;
  }

  let book = new Book(titleValue, authorValue, pagesNumber, readCheck.checked);
  myLibrary.push(book);
  render();
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readCheck.checked = false;
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  tableBody.innerHTML = "";

  // Insert the updated rows and cells.
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let book = myLibrary[i];
    let row = tableBody.insertRow();
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);
    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;

    // Add the read/unread button.
    let toggleReadButton = document.createElement("button");
    toggleReadButton.className = "btn btn-success";
    toggleReadButton.textContent = book.check ? "Yes" : "No";
    wasReadCell.appendChild(toggleReadButton);

    toggleReadButton.addEventListener("click", function () {
      book.check = !book.check;
      render();
    });

    // Add the delete button for each row.
    let deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-warning";
    deleteButton.textContent = "Delete";
    deleteCell.appendChild(deleteButton);
    deleteButton.addEventListener("click", function () {
      let removedTitle = book.title;
      myLibrary.splice(i, 1);
      render();
      alert(`You've deleted title: ${removedTitle}`);
    });
  }
}
