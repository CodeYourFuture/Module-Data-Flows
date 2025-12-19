const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readCheckbox = document.getElementById("check");
const table = document.getElementById("display");
const submitBtn = document.getElementById("submit-book-btn");

let myLibrary = [];

window.addEventListener("load", () => {
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

// Trims input values and prevents empty submissions
function addBook(e) {
  if (e) e.preventDefault();

  // Trims input whitespace to sanitise entries
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const pages = pagesInput.value.trim();

  if (!title || !author || !pages) {
    alert("Please fill all fields!");
    return;
  }
  const book = new Book(title, author, pages, readCheckbox.checked);
  myLibrary.push(book);
  saveStorage();
  render();

  // Resets the entry form after adding a book
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readCheckbox.checked = false;
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  const tbody = table.querySelector("tbody");
  tbody.innerHTML = "";

  myLibrary.forEach((book, i) => {
    const row = tbody.insertRow(-1);

    // Inserts new cells into the table row
    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const wasReadCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);

    // Prevents XSS by inserting data as textContent
    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;

    // Toggles the read status with a ternary operator
    const readBtn = document.createElement("button");
    readBtn.className = book.check
      ? "btn btn-success"
      : "btn btn-outline-secondary";
    readBtn.textContent = book.check ? "Yes" : "No";
    wasReadCell.appendChild(readBtn);

    readBtn.addEventListener("click", () => {
      book.check = !book.check;
      saveStorage();
      render();
    });

    // Deletes the book and notifies the user
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm";
    deleteBtn.textContent = "Delete";
    deleteCell.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {
      const deletedTitle = book.title;
      myLibrary.splice(i, 1);
      saveStorage();
      render();
      alert(`Success: "${deletedTitle}" has been removed.`);
    });
  });
}
