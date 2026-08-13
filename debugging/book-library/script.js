const myLibrary = [];

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

    myLibrary.push(book1);
    myLibrary.push(book2);
  }
}
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("check");

const bookForm = document.getElementById("bookForm");

bookForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addBook();
});

function addBook() {
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const pages = Number(pagesInput.value);

if (
  title === "" ||
  author === "" ||
  !Number.isFinite(pages) ||
  pages < 1 ||
  !Number.isInteger(pages)
) {
  
  alert("Please fill all fields correctly!");
  return false;
}

  const book = new Book(
    title,
    author,
    pages,
    readInput.checked
);

  myLibrary.push(book);

  bookForm.reset();

  render();
}
function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  const bookList = document.getElementById("bookList");

  bookList.innerHTML = "";

  const length = myLibrary.length;

  for (let i = 0; i < length; i++) {
    const row = bookList.insertRow();

    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const wasReadCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);

    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;
    
    const changeBut = document.createElement("button");

    changeBut.className = "btn btn-success";

    wasReadCell.appendChild(changeBut);

    const readStatus = myLibrary[i].check ? "Yes" : "No";

    changeBut.textContent = readStatus;

    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });


    const delButton = document.createElement("button");

    delButton.className = "btn btn-warning";
    delButton.textContent = "Delete";

    deleteCell.appendChild(delButton);

    delButton.addEventListener("click", function () {
      const deletedTitle = myLibrary[i].title;

      myLibrary.splice(i, 1);
      render();

      setTimeout(function () {
        alert(`You've deleted title: ${deletedTitle}`);
      }, 0);
    });
  }
}
