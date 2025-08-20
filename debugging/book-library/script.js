let myLibrary = [];

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

window.addEventListener("load", function () {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", 252, true);
    let book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true);
    myLibrary.push(book1, book2);
    render();
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

function submit() {
  const trimmedTitle = title.value.trim();
  const trimmedAuthor = author.value.trim();
  const pagesNumber = Number(pages.value.trim());

  if (!trimmedTitle || !trimmedAuthor || !pages.value || isNaN(pagesNumber) || pagesNumber <= 0) {
    alert("Please fill all fields correctly!");
    return false;
  }

  let book = new Book(trimmedTitle, trimmedAuthor, pagesNumber, check.checked);
  myLibrary.push(book);
  render();

  title.value = "";
  author.value = "";
  pages.value = "";
  check.checked = false;
}

function render() {
  let table = document.getElementById("display");

  for (let i = table.rows.length - 1; i > 0; i--) {
    table.deleteRow(i);
  }

  myLibrary.forEach((book, i) => {
    let row = table.insertRow(-1);
    
    let titleCell = row.insertCell(0);
    titleCell.innerText = book.title;

    let authorCell = row.insertCell(1);
    authorCell.innerText = book.author;

    let pagesCell = row.insertCell(2);
    pagesCell.innerText = book.pages;

    let readCell = row.insertCell(3);
    let readBtn = document.createElement("button");
    readBtn.innerText = book.check ? "Yes" : "No";
    readBtn.className = "btn btn-success";
    readBtn.addEventListener("click", function () {
      book.check = !book.check;
      render();
    });
    readCell.appendChild(readBtn);

    let deleteCell = row.insertCell(4);
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "btn btn-warning";
    deleteBtn.addEventListener("click", function () {
      alert(`You've deleted title: ${book.title}`);
      myLibrary.splice(i, 1);
      render();
    });
    deleteCell.appendChild(deleteBtn);
  });
}
