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

// Initialises data and seeds default books if storage is empty
function populateStorage() {
  const storedLibrary = localStorage.getItem("myLibrary");

  if (storedLibrary) {
    const rawData = JSON.parse(storedLibrary);
    // Rehydrates plain data back into Book objects
    myLibrary = rawData.map(
      (data) =>
        new Book(data.title, data.author, Number(data.pages), data.check)
    );
  } else {
    // Seeds data for new users
    myLibrary = [
      new Book("The Hobbit", "J.R.R. Tolkien", 295, false),
      new Book("1984", "George Orwell", 328, true),
      new Book("Robinson Crusoe", "Daniel Defoe", 252, true),
      new Book("The Old Man and the Sea", "Ernest Hemingway", 127, false),
    ];
    saveStorage();
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
  const pages = Number(pagesInput.value);

  // Validates input: checks for empty strings, non-numbers, or negative values
  if (!title || !author || isNaN(pages) || pages <= 0) {
    alert("Please enter valid book details. Pages must be a positive number.");
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
