const myLibrary = [];
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const checkInput = document.getElementById("check");
const tableBody = document.getElementById("display");
const submitButton = document.querySelector('input[type="submit"]');

window.addEventListener("load", setUp);
function setUp() {
  populateStorage();
  render();
  submitButton.addEventListener("click", handleSubmit);
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}
function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", 252, true);
    let book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      127,
      true
    );
    myLibrary.push(book1, book2);
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const pages = Number(pagesInput.value);
  const check = checkInput.checked;

  if (title === "" || author === "" || !Number.isInteger(pages) || pages < 1) {
    alert("Please fill all fields!");
    return false;
  } else {
    const book = new Book(title, author, pages, check);
    myLibrary.push(book);
    render();
  }
}

function render() {
  //delete old table
  tableBody.innerHTML = "";
  //insert updated row and cells
  myLibrary.forEach((book, i) => {
    createBookRow(book, i);
  });
}

function createBookRow(book, index) {
  const changeBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  let row = tableBody.insertRow(-1);
  let titleCell = row.insertCell(0);
  let authorCell = row.insertCell(1);
  let pagesCell = row.insertCell(2);
  let wasReadCell = row.insertCell(3);
  let deleteCell = row.insertCell(4);

  titleCell.textContent = book.title;
  authorCell.textContent = book.author;
  pagesCell.textContent = book.pages;
  wasReadCell.appendChild(changeBtn);
  deleteCell.appendChild(deleteBtn);
  deleteBtn.textContent = "Delete";
  changeBtn.className = "btn btn-success";
  deleteBtn.className = "btn btn-warning";

  changeBtn.innerText = book.check ? "yes" : "No";

  changeBtn.addEventListener("click", function () {
    book.check = !book.check;
    render();
  });
  deleteBtn.addEventListener("click", function () {
    myLibrary.splice(index, 1);
    render();
    setTimeout(function () {
      alert(`You've deleted title: ${book.title}`);
    }, 0);
  });
}
