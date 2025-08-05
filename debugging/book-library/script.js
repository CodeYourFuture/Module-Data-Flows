let myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", "252", true);
    let book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", "127", true);
    myLibrary.push(book1, book2);
    render();
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

function addBook() {
  if (!title.value || !author.value || !pages.value) {
    alert("Please fill in all the fields.");
    return;
  }

  let book = new Book(title.value, author.value, pages.value, check.checked);
  myLibrary.push(book);
  render();

  // Clear form fields
  title.value = "";
  author.value = "";
  pages.value = "";
  check.checked = false;
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  let tableBody = document.getElementById("display").getElementsByTagName("tbody")[0];
  tableBody.innerHTML = ""; // Clear table rows

  myLibrary.forEach((book, i) => {
    let row = tableBody.insertRow();

    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let readCell = row.insertCell(3);
    let actionsCell = row.insertCell(4);

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;

    // Read toggle button
    let readButton = document.createElement("button");
    readButton.className = "btn btn-success btn-sm";
    readButton.textContent = book.check ? "Yes" : "No";
    readButton.addEventListener("click", () => {
      book.check = !book.check;
      render();
    });
    readCell.appendChild(readButton);

    // Delete button
    let delButton = document.createElement("button");
    delButton.className = "btn btn-danger btn-sm ml-2";
    delButton.textContent = "Delete";
    delButton.addEventListener("click", () => {
      alert(`You've deleted title: ${book.title}`);
      myLibrary.splice(i, 1);
      render();
    });
    actionsCell.appendChild(delButton);
  });
}
