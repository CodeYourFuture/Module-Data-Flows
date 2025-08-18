let myLibrary = [];

window.onload = function(){
   // Cache DOM elements with clear suffixes
  const titleInputEl = document.getElementById("title");
  const authorInputEl = document.getElementById("author");
  const pagesInputEl = document.getElementById("pages");
  const readCheckEl = document.getElementById("check");
  const submitBtnEl = document.getElementById("submitBtn");
  const bookFormEl = document.getElementById("bookForm");
  const tbodyEl = document.querySelector("#display tbody");

}

function populateStorage() {
  if (myLibrary.length == 0) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", "252", true);
    let book2 = new Book("The Old Man and the Sea","Ernest Hemingway","127", true );
    myLibrary.push(book1);
    myLibrary.push(book2);
    render();
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

document.getElementById("submitBtn").addEventListener("click", addBook);

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function addBook() {
  if (!title.value.trim() || !author.value.trim() || !pages.value.trim()) {
    alert("Please fill all fields with valide values (no empty spaces)!");
    return;
  }
    let book = new Book(title.value.trim(), author.value.trim(), pages.value.trim(), check.checked);
    myLibrary.push(book);
    render();
    document.getElementById("bookForm").reset();
  }

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
function render() {
  let tbody = document.querySelector("#display tbody");
  tbody.innerHTML = "";

  myLibrary.forEach((book, i) => {
    let row = tbody.insertRow();

    row.insertCell(0).textContent = book.title;
    row.insertCell(1).textContent = book.author;
    row.insertCell(2).textContent = book.pages;

    // read/unread button
    let wasReadCell = row.insertCell(3);
    let changeBut = document.createElement("button");
    changeBut.className = "btn btn-success";
    changeBut.textContent = book.read ? "Yes" : "No";
    changeBut.addEventListener("click", () => {
      book.read = !book.read;
      render();
    });
    wasReadCell.appendChild(changeBut);

    // delete button
    let deleteCell = row.insertCell(4);
    let delButton = document.createElement("button");
    delButton.className = "delete-btn";
    delButton.textContent = "Delete";
    delButton.addEventListener("click", () => {
      alert(`You've deleted title: ${book.title}`);
      myLibrary.splice(i, 1);
      render();
    });
    deleteCell.appendChild(delButton);
  });
}
