const myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
  render();
});
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readCheckbox = document.getElementById("check");
const bookForm = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");

function populateStorage() {
  if (myLibrary.length == 0) {
    const book1 = new Book("Robison Crusoe", "Daniel Defoe", 252, true);
    const book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      127,
      true
    );
    myLibrary.push(book1);
    myLibrary.push(book2);
  }
}

bookForm.addEventListener("submit", function (e) {
  e.preventDefault();
  submitBook();
});

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submitBook() {
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const pageCount = Number(pagesInput.value);

  if (title === "" || author === "") {
    return;
  }

  if (!Number.isInteger(pageCount) || pageCount < 1) {
    return;
  }

  const book = new Book(title, author, pageCount, readCheckbox.checked);

  myLibrary.push(book);

  render();

  bookForm.reset();
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  bookList.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    const row = bookList.insertRow();

    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const wasReadCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);

    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    // Read button
    const changeBtn = document.createElement("button");
    changeBtn.className = "btn btn-success";

    const readStatus = myLibrary[i].check ? "Yes" : "No";
    changeBtn.textContent = readStatus;

    wasReadCell.appendChild(changeBtn);

    changeBtn.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-warning";
    deleteBtn.textContent = "Delete";

    deleteCell.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function () {
      const deletedTitle = myLibrary[i].title;

      myLibrary.splice(i, 1);
      render();

      alert(`You've deleted title: ${deletedTitle}`);
    });
  }
}
