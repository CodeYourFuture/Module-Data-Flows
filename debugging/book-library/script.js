const myLibrary = [];

// Refactor: Removed duplicate render() execution on load. populateStorage() handles initial render.
window.addEventListener("load", function () {
  populateStorage();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    // Refactor: Stored "page count" data type explicitly as numbers instead of strings
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", 252, true);
    let book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true);
    myLibrary.push(book1, book2);
    render();
  }
}

// Refactor: Updated variable names with descriptive suffixes to clearly reflect that they store DOM nodes
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const checkInput = document.getElementById("check");

function submit() {
  // Refactor: Preprocessing input through trim validation and numerical parsing (no need to check for null on values)
  const formattedTitle = titleInput.value.trim();
  const formattedAuthor = authorInput.value.trim();
  const pageCount = parseInt(pagesInput.value, 10);

  // Input validation constraint check
  if (!formattedTitle || !formattedAuthor || isNaN(pageCount) || pageCount <= 0) {
    alert("Please fill all fields with valid information!");
    return false;
  }

  let book = new Book(formattedTitle, formattedAuthor, pageCount, checkInput.checked);
  myLibrary.push(book);
  render();

  // Clear inputs on success
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  checkInput.checked = false;
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  // Refactor: Targets the new clean semantic table body ID from your index.html
  const tableBody = document.getElementById("book-table-body");
  
  // Refactor: Efficient batch approach to delete table rows at once by clearing container instead of looping one-by-one
  tableBody.innerHTML = "";

  const length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = tableBody.insertRow(-1); // Inserts cleanly sequentially at the end
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);

    // Refactor: Replaced unsafe innerHTML with secure textContent to prevent cross-site scripting
    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    // Refactor: Naming consistency (statusBtn & deleteBtn) and dropped redundant tracking IDs
    const statusBtn = document.createElement("button");
    statusBtn.className = "btn btn-success btn-sm";
    wasReadCell.appendChild(statusBtn);

    // Refactor: Simplified verbose if-else block to one statement using the ternary ? : operator
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
      // Refactor: Resolved timing bug. Data mutation and UI render occur safely BEFORE the blocking window.alert runs
      myLibrary.splice(i, 1);
      render();
      alert(`You've successfully deleted title: ${targetTitle}`);
    });
  }
}

// Bind submission trigger securely to the window instance for internal module routing
window.submit = submit;
