// 1 & 3. Constant array and top-level DOM element declarations
const myLibrary = [];
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readCheckbox = document.getElementById("check");

window.addEventListener("load", function () {
  populateStorage();

  const bookForm = document.getElementById("bookForm");
  if (bookForm) {
    bookForm.addEventListener("submit", addBook);
  }
});

function populateStorage() {
  if (myLibrary.length === 0) {
    // 2. Constructor called with PascalCase
    let book1 = new LibraryBook("Robinson Crusoe", "Daniel Defoe", 252, true);
    let book2 = new LibraryBook(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      127,
      true
    );
    myLibrary.push(book1);
    myLibrary.push(book2);
    render();
  }
}

function addBook(e) {
  e.preventDefault();

  // 4. Input preprocessing and consistent usage of cleaned values
  const cleanTitle = titleInput.value.trim();
  const cleanAuthor = authorInput.value.trim();
  const cleanPages = parseInt(pagesInput.value, 10);

  if (!cleanTitle || !cleanAuthor || isNaN(cleanPages) || cleanPages < 1) {
    alert("Please provide a valid title, author, and positive page count!");
    return;
  }

  const newBook = new LibraryBook(
    cleanTitle,
    cleanAuthor,
    cleanPages,
    readCheckbox.checked
  );

  myLibrary.push(newBook);
  document.getElementById("bookForm").reset();
  render();
}

// 2. PascalCase constructor function
function LibraryBook(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function render() {
  // 5. Efficient single-operation clearing of <tbody>
  const tableBody = document.querySelector("#display tbody");
  tableBody.textContent = "";

  const libraryLength = myLibrary.length;
  for (let i = 0; i < libraryLength; i++) {
    const row = tableBody.insertRow();
    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const readStatusCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);

    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    // Read status toggle button
    const toggleReadBtn = document.createElement("button");
    // 6. No unnecessary ID attribute assignment
    toggleReadBtn.className = "btn btn-success";
    toggleReadBtn.textContent = myLibrary[i].isRead ? "Yes" : "No";

    toggleReadBtn.addEventListener("click", function () {
      myLibrary[i].isRead = !myLibrary[i].isRead;
      render();
    });
    readStatusCell.appendChild(toggleReadBtn);

    // Delete button
    const deleteBtn = document.createElement("button");
    // 6. No unnecessary ID attribute assignment
    deleteBtn.className = "btn btn-warning";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
      const deletedTitle = myLibrary[i].title;

      // 7. Delete from array and re-render DOM BEFORE triggering the alert
      myLibrary.splice(i, 1);
      render();

      // Defer alert so the browser completes its UI repaint first
      setTimeout(() => {
        alert(`You've deleted title: ${deletedTitle}`);
      }, 0);
    });
    deleteCell.appendChild(deleteBtn);
  }
}
