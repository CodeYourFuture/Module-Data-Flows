let myLibrary = [];

// Wait for DOM to load before initializing
window.addEventListener("load", function () {
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

// DOM element references with meaningful names
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readCheckbox = document.getElementById("check");

// Validate input, create book, and re-render
function submitBook() {
  
  const titleValue = titleInput.value.trim();
  const authorValue = authorInput.value.trim();
  const pagesValue = pagesInput.value.trim();

  
  if (!titleValue || !authorValue) {
    alert("Please enter both title and author.");
    return;
  }
  if (titleValue.length > 200 || authorValue.length > 200) {
    alert("Title and author must be less than 200 characters.");
    return;
  }

  const pagesNumber = parseInt(pagesValue, 10);
  if (isNaN(pagesNumber) || pagesNumber <= 0) {
    alert("Please enter a valid positive number of pages.");
    return;
  }

  let newBook = new Book(
    titleValue,
    authorValue,
    pagesNumber,
    readCheckbox.checked
  );

  myLibrary.push(newBook);
  render();

  // Clear form after submission
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readCheckbox.checked = false;
}

// Book constructor
function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = readStatus;
}

// Render the table
function render() {
  const tableBody = document.querySelector("#display tbody");
  tableBody.innerHTML = ""; // clears all rows instantly

  myLibrary.forEach((book, i) => {
    const row = tableBody.insertRow();
    row.insertCell(0).innerHTML  = book.title;
    row.insertCell(1).innerHTML  = book.author;
    row.insertCell(2).innerHTML  = book.pages;

    
    const wasReadCell = row.insertCell(3);
    const changeBtn = document.createElement("button");
    changeBtn.className = "btn btn-success";
    changeBtn.innerHTML  = book.read ? "Yes" : "No";
    changeBtn.addEventListener("click", () => {
      book.read = !book.read;
      render();
    });
    wasReadCell.appendChild(changeBtn);

    
    const deleteCell = row.insertCell(4);
    const delBtn = document.createElement("button");
    delBtn.className = "btn btn-warning";
    delBtn.innerHTML  = "Delete";
    delBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this book?")) {
        myLibrary.splice(i, 1);
        render();
    }
    });
    deleteCell.appendChild(delBtn);
  });
}

