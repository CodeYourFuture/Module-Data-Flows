let myLibrary = [];

window.onload = function(){
   // Cache DOM elements with clear suffixes
  const titleInputEl = document.getElementById("title");
  const authorInputEl = document.getElementById("author");
  const pagesInputEl = document.getElementById("pages");
  const readCheckEl = document.getElementById("check");
  const submitBtnEl = document.getElementById("submitBtn");
  const bookFormEl = document.getElementById("bookForm");
  const tbodyEl = document.querySelector("#display tbody");

 // Initial setup
  populateStorage();
  render();

  // Event listeners
  submitBtnEl.addEventListener("click", addBook);

  // --- Functions ---
function populateStorage() {
  if (myLibrary.length == 0) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", "252", true);
    let book2 = new Book("The Old Man and the Sea","Ernest Hemingway","127", true );
    myLibrary.push(book1, book2);
    render();
  }
 }
}

 function addBook() {
    // Preprocess & validate input
    const title = titleInputEl.value.trim();
    const author = authorInputEl.value.trim();
    const pages = pagesInputEl.value.trim();
    const read = readCheckEl.checked;

    if (!title || !author || !pages || isNaN(Number(pages)) || Number(pages) <= 0) {
      alert("Please fill all fields with valid values (no empty spaces, pages must be a positive number).");
      return;
    }

    // Add book
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    render();
    bookFormEl.reset();
  }

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
function render() {
  let tbody = document.querySelector("#display tbody");
  tbody.innerHTML = "";

  myLibrary.forEach((book, i) => {
    let row = tbody.insertRow();

    row.insertCell(0).textContent = book.title;
    row.insertCell(1).textContent = book.author;
    row.insertCell(2).textContent = book.pages;

    // read/unread button
    let wasReadCell = row.insertCell(3);
    let changeBut = document.createElement("button");
    changeBut.className = "btn btn-success";
    changeBut.textContent = book.read ? "Yes" : "No";
    changeBut.addEventListener("click", () => {
      book.read = !book.read;
      render();
    });
    wasReadCell.appendChild(changeBut);

    // delete button
    let deleteCell = row.insertCell(4);
    let delButton = document.createElement("button");
    delButton.className = "delete-btn";
    delButton.textContent = "Delete";
    delButton.addEventListener("click", () => {
      alert(`You've deleted title: ${book.title}`);
      myLibrary.splice(i, 1);
      render();
    });
    deleteCell.appendChild(delButton);
  });
}
