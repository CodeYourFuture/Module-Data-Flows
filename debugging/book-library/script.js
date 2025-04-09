let myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
  render();
});

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function populateStorage() {
  if (localStorage.getItem("myLibrary") === null) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", 252, true);
    let book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true);
    myLibrary.push(book1, book2);
    saveToLocalStorage();
  } else {
    myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
  }
}

function render(sortBy = null) {
  const table = document.getElementById("display");

  // Remove all rows except the header efficiently
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  if (sortBy === "title") {
    myLibrary.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === "pages") {
    myLibrary.sort((a, b) => a.pages - b.pages);
  }

  myLibrary.forEach((book, index) => {
    const row = table.insertRow();
    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const wasReadCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;

    const toggleReadButton = document.createElement("button");
    toggleReadButton.className = "btn btn-success";
    toggleReadButton.textContent = book.check ? "Yes" : "No";
    wasReadCell.appendChild(toggleReadButton);

    toggleReadButton.addEventListener("click", function () {
      book.check = !book.check;
      saveToLocalStorage();
      render();
    });

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-warning";
    deleteButton.textContent = "Delete";
    deleteCell.appendChild(deleteButton);

    deleteButton.addEventListener("click", function () {
      myLibrary.splice(index, 1);
      saveToLocalStorage();
      render();
      alert(`You've deleted title: ${book.title}`);
    });
  });
}

function saveToLocalStorage() {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

// Form elements
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

function submit() {
  const titleValue = title.value.trim();
  const authorValue = author.value.trim();
  const pagesValue = pages.value.trim();

  if (!titleValue || !authorValue || !pagesValue) {
    alert("Please fill in all fields!");
    return false;
  }

  const pagesNumber = Number(pagesValue);

  if (!Number.isInteger(pagesNumber) || pagesNumber <= 0) {
    alert("Pages must be a positive whole number!");
    return false;
  }

  const newBook = new Book(titleValue, authorValue, pagesNumber, check.checked);
  myLibrary.push(newBook);
  saveToLocalStorage();
  render();
}

// Optional: Add sorting buttons
document.getElementById("sortTitle").addEventListener("click", () => render("title"));
document.getElementById("sortPages").addEventListener("click", () => render("pages"));
