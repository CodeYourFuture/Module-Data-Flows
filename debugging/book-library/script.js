let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();

  const bookForm = document.getElementById("bookForm");
  if (bookForm) {
    bookForm.addEventListener("submit", addBook);
  }
});

function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new libraryBook("Robinson Crusoe", "Daniel Defoe", "252", true);
    let book2 = new libraryBook(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      "127",
      true
    );
    myLibrary.push(book1);
    myLibrary.push(book2);
    render();
  }
}

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readCheckbox = document.getElementById("check");

function addBook(e) {
  e.preventDefault();

  if (
    !titleInput.value.trim() ||
    !authorInput.value.trim() ||
    !pagesInput.value.trim()
  ) {
    alert("Please fill all fields!");
    return false;
  }

  let newBook = new libraryBook(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    readCheckbox.checked
  );

  myLibrary.push(newBook);

  document.getElementById("bookForm").reset();

  render();
}

function libraryBook(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function render() {
  let table = document.getElementById("display");
  let totalRows = table.rows.length;

  for (let n = totalRows - 1; n > 0; n--) {
    table.deleteRow(n);
  }

  let libraryLength = myLibrary.length;
  for (let i = 0; i < libraryLength; i++) {
    let row = table.insertRow(-1);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let readStatusCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);

    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    let toggleReadBtn = document.createElement("button");
    toggleReadBtn.id = `readBtn-${i}`;
    toggleReadBtn.className = "btn btn-success";

    let readStatus = myLibrary[i].isRead ? "Yes" : "No";
    toggleReadBtn.textContent = readStatus;

    toggleReadBtn.addEventListener("click", function () {
      myLibrary[i].isRead = !myLibrary[i].isRead;
      render();
    });
    readStatusCell.appendChild(toggleReadBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.id = `delBtn-${i}`;
    deleteBtn.className = "btn btn-warning";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
    deleteCell.appendChild(deleteBtn);
  }
}
