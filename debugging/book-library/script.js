let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", "252", true);
    let book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", "127", true);
    myLibrary.push(book1, book2);
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function addBook() {
  if (!title.value || !author.value || !pages.value) {
    alert("Please fill all fields!");
    return;
  }

  let book = new Book(title.value, author.value, pages.value, check.checked);
  myLibrary.push(book);
  render();
  // Clear form
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
  let table = document.getElementById("display").getElementsByTagName("tbody")[0];
  table.innerHTML = ""; // Clear table

  myLibrary.forEach((book, index) => {
    let row = table.insertRow();
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;

    // Read/Unread toggle button
    let readButton = document.createElement("button");
    readButton.className = "btn btn-success";
    readButton.textContent = book.check ? "Yes" : "No";
    readButton.addEventListener("click", function () {
      book.check = !book.check;
      render();
    });
    wasReadCell.appendChild(readButton);

    // Delete button
    let deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-warning";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      alert(`You've deleted the title: ${book.title}`);
      myLibrary.splice(index, 1);
      render();
    });
    deleteCell.appendChild(deleteButton);
  });
}
