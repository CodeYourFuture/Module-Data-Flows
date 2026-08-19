// 1. Declare all shared variables at the beginning of the file
const myLibrary = [];
const bookForm = document.getElementById("book-form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const checkInput = document.getElementById("check");

// 2. Clear app initialization entry point
window.addEventListener("load", init);

function init() {
  populateStorage();
  
  // Grouping event listener registration inside initialization function
  bookForm.addEventListener("submit", handleFormSubmit);
}

function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", 252, true);
    let book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true);
    myLibrary.push(book1, book2);
    render();
  }
}

// 3. Extracted "on submit" logic into a clean named callback function
function handleFormSubmit(event) {
  event.preventDefault(); // Stop native page reload

  const formattedTitle = titleInput.value.trim();
  const formattedAuthor = authorInput.value.trim();
  const pageCount = parseInt(pagesInput.value, 10);

  if (!formattedTitle || !formattedAuthor || isNaN(pageCount) || pageCount <= 0) {
    alert("Please fill all fields with valid information!");
    return;
  }

  let book = new Book(formattedTitle, formattedAuthor, pageCount, checkInput.checked);
  myLibrary.push(book);
  render();

  // Use the form's native method to reset all fields cleanly
  bookForm.reset();
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  const tableBody = document.getElementById("book-table-body");
  tableBody.innerHTML = "";

  const length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = tableBody.insertRow(-1);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);

    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    const statusBtn = document.createElement("button");
    statusBtn.className = "btn btn-success btn-sm";
    wasReadCell.appendChild(statusBtn);
    statusBtn.textContent = myLibrary[i].check ? "Yes" : "No";

    statusBtn.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    const deleteBtn = document.createElement("button");
    deleteCell.appendChild(deleteBtn);
    deleteBtn.className = "btn btn-warning btn-sm";
    deleteBtn.textContent = "Delete";
    
    deleteBtn.addEventListener("click", function () {
      const targetTitle = myLibrary[i].title;
      myLibrary.splice(i, 1);
      render();
      
      setTimeout(() => {
        alert(`You've successfully deleted title: ${targetTitle}`);
      }, 0);
    });
  }
}

