const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readCheckbox = document.getElementById("check");
const table = document.getElementById("display");
const submitBtn = document.getElementById("submit-book-btn");

let myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
  render();
});

submitBtn.addEventListener("click", addBook);

function populateStorage() {
  const storedLibrary = localStorage.getItem("myLibrary");
  if (storedLibrary) {
    myLibrary = JSON.parse(storedLibrary);
  }
}

function saveStorage() {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

// Validates input and adds new book
function addBook(e) {
  if (e) e.preventDefault();

  if (!titleInput.value || !authorInput.value || !pagesInput.value) {
    alert("Please fill all fields!");
    return false;
  }
  let book = new Book(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    readCheckbox.checked
  );
  myLibrary.push(book);
  saveStorage();
  render();
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  // Clears table body efficiently
  const tbody = table.querySelector("tbody");
  tbody.innerHTML = "";

  // Inserts updated row and cells
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    // Insert at the end of the table
    let row = tbody.insertRow(-1);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);

    // Uses textContent to prevent XSS
    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    // Toggles read status
    let readBtn = document.createElement("button");
    wasReadCell.appendChild(readBtn);

    let readStatus = "";
    if (myLibrary[i].check === false) {
      readStatus = "No";
    } else {
      readStatus = "Yes";
    }
    readBtn.textContent = readStatus;

    readBtn.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      saveStorage();
      render();
    });

    // Deletes book
    let deleteBtn = document.createElement("button");
    deleteCell.appendChild(deleteBtn);
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      myLibrary.splice(i, 1);
      saveStorage();
      render();
    });
  }
}
