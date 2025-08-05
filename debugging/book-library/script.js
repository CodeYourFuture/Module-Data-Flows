let myLibrary = [];

window.addEventListener("load", function () {
  populateLibrary();
  render();
  document.getElementById("bookForm").addEventListener("submit", function (e) {
    e.preventDefault();
    submitBook();
  });
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function populateLibrary() {
  if (myLibrary.length === 0) {
    const book1 = new Book("Robinson Crusoe", "Daniel Defoe", 252, true);
    const book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true);
    myLibrary.push(book1, book2);
  }
}

function submitBook() {
  const titleInput = document.getElementById("title").value.trim();
  const authorInput = document.getElementById("author").value.trim();
  const pagesInput = document.getElementById("pages").value.trim();
  const readInput = document.getElementById("check").checked;

  if (!titleInput || !authorInput || !pagesInput) {
    alert("Please fill all fields!");
    return;
  }

  const pagesNumber = parseInt(pagesInput, 10);
  if (isNaN(pagesNumber) || pagesNumber <= 0) {
    alert("Page count must be a positive number!");
    return;
  }

  const newBook = new Book(titleInput, authorInput, pagesNumber, readInput);
  myLibrary.push(newBook);
  render();
  document.getElementById("bookForm").reset();
}

function render() {
  const table = document.getElementById("display");
  const tbody = table.querySelector("tbody");
  tbody.innerHTML = ""; // Clear all rows

  myLibrary.forEach((book, index) => {
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = book.title;

    const authorCell = document.createElement("td");
    authorCell.textContent = book.author;

    const pagesCell = document.createElement("td");
    pagesCell.textContent = book.pages;

    const readCell = document.createElement("td");
    const toggleBtn = document.createElement("button");
    toggleBtn.className = "btn btn-success btn-sm";
    toggleBtn.innerText = book.read ? "Yes" : "No";
    toggleBtn.addEventListener("click", () => {
      book.read = !book.read;
      render();
    });
    readCell.appendChild(toggleBtn);

    const actionCell = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-warning btn-sm";
    deleteBtn.innerText = "Delete";
    deleteBtn.setAttribute("data-index", index);

    deleteBtn.addEventListener("click", function () {
      const idx = parseInt(this.getAttribute("data-index"), 10);
      if (confirm(`Are you sure you want to delete "${myLibrary[idx].title}"?`)) {
        myLibrary.splice(idx, 1);
        render();
      }
    });

    actionCell.appendChild(deleteBtn);

    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(pagesCell);
    row.appendChild(readCell);
    row.appendChild(actionCell);

    tbody.appendChild(row);
  });
}