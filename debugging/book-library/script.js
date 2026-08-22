let myLibrary = [];

window.addEventListener("load", function () {
  addDefaultBooks();
  render();
});

function addDefaultBooks() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", 252, true);

    let book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", 127);

    myLibrary.push(book1);
    myLibrary.push(book2);
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

function addBook() {
  if (
    title.value.trim() === "" ||
    author.value.trim() === "" ||
    pages.value.trim() === ""
  ) {
    alert("Please fill all fields!");
    return;
  }

  let book = new Book(
    title.value.trim(),
    author.value.trim(),
    pages.value,
    check.checked
  );

  myLibrary.push(book);

  render();

  // Clear form
  title.value = "";
  author.value = "";
  pages.value = "";
  check.checked = false;
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function render() {
  let table = document.getElementById("display");

  // Delete old rows, keeping the header
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  // Add each book
  for (let i = 0; i < myLibrary.length; i++) {
    let row = table.insertRow(-1);

    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);

    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    // Read/unread button
    let changeBut = document.createElement("button");
    changeBut.className = "btn btn-success";
    changeBut.textContent = myLibrary[i].read ? "Yes" : "No";

    changeBut.addEventListener("click", function () {
      myLibrary[i].read = !myLibrary[i].read;
      render();
    });

    wasReadCell.appendChild(changeBut);

    // Delete button
    let delButton = document.createElement("button");
    delButton.className = "btn btn-warning";
    delButton.textContent = "Delete";

    delButton.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });

    deleteCell.appendChild(delButton);
  }
}
