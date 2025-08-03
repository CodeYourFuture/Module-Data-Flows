let myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", "252", true);
    let book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", "127", true);
    myLibrary.push(book1, book2);
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

function submit() {
  const titleValue = title.value.trim();
  const authorValue = author.value.trim();
  const pagesValue = pages.value.trim();

  if (!titleValue || !authorValue || !pagesValue) {
    alert("Please fill in all fields before submitting!");
    return false;
  }

  const book = new Book(titleValue, authorValue, pagesValue, check.checked);
  myLibrary.push(book);

  render();

  // Clear the form
  title.value = "";
  author.value = "";
  pages.value = "";
  check.checked = false;

  return false;
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = parseInt(pages) || 0;
  this.check = check;
}

function clearTable() {
  let table = document.getElementById("display");
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
}

function render() {
  clearTable();
  let table = document.getElementById("display");

  myLibrary.forEach((book, i) => {
    let row = table.insertRow(1);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);

    titleCell.innerText = book.title;
    authorCell.innerText = book.author;
    pagesCell.innerText = book.pages;

    let changeBtn = document.createElement("button");
    changeBtn.className = "btn btn-success";
    changeBtn.innerText = book.check ? "Yes" : "No";
    changeBtn.onclick = () => {
      book.check = !book.check;
      render();
    };
    wasReadCell.appendChild(changeBtn);

    let delBtn = document.createElement("button");
    delBtn.className = "btn btn-warning";
    delBtn.innerText = "Delete";
    delBtn.onclick = () => {
      alert(`You've deleted title: ${book.title}`);
      myLibrary.splice(i, 1);
      render();
    };
    deleteCell.appendChild(delBtn);
  });
}

function viewReadBooks() {
  clearTable();
  let table = document.getElementById("display");

  myLibrary
    .filter(book => book.check)
    .forEach(book => {
      let row = table.insertRow(1);
      row.insertCell(0).innerText = book.title;
      row.insertCell(1).innerText = book.author;
      row.insertCell(2).innerText = book.pages;
      row.insertCell(3).innerText = "Yes";
      row.insertCell(4).innerText = "-";
    });
}