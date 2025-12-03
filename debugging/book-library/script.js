let myLibrary = [];

// DOM refs 
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const checkInput = document.getElementById("check");
const submitBtn = document.getElementById("submitBtn"); 
const table = document.getElementById("display");

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    const book1 = new Book("Robison Crusoe", "Daniel Defoe", 252, true);
    const book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      127,
      true
    );
    myLibrary.push(book1, book2);
  }
}

// wire submit button
submitBtn.addEventListener("click", addBook);

// validate and add book to library
function addBook() {
  // trim to avoid spaces-only input
  const t = titleInput.value.trim();
  const a = authorInput.value.trim();
  const pRaw = pagesInput.value.trim();

  if (!t || !a || !pRaw) {
    alert("Please fill all fields!");
    return;
  }

  // pages should be a positive integer (prevent "weird" page counts)
  const pNum = Number(pRaw);
  if (!Number.isFinite(pNum) || pNum <= 0 || !Number.isInteger(pNum)) {
    alert("Please enter a valid positive whole number of pages.");
    return;
  }

  const book = new Book(t, a, pNum, checkInput.checked);
  myLibrary.push(book);

  // clear inputs and close the collapse
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  checkInput.checked = false;

  render();
}

// Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = !!read;
}

// render table rows from myLibrary
function render() {
  const tbody = table.querySelector("tbody");
  tbody.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const row = tbody.insertRow();

    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const wasReadCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;

    // Read toggle button 
    const changeBut = document.createElement("button");
    changeBut.className = "btn btn-sm btn-outline-success";
    changeBut.textContent = book.read ? "Yes" : "No";
    changeBut.addEventListener("click", function() {
      myLibrary[i].read = !myLibrary[i].read;
      render();
    });
    wasReadCell.appendChild(changeBut);

    // Delete button 
    const delBut = document.createElement("button");
    delBut.className = "btn btn-sm btn-warning";
    delBut.textContent = "Delete";
    delBut.addEventListener("click", function() {
      if (confirm(`Delete "${myLibrary[i].title}"?`)) {
        myLibrary.splice(i, 1);
        render();
      }
    });
    deleteCell.appendChild(delBut);
  }
}
