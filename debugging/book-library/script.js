let myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", 252, true);
    let book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true);
    myLibrary.push(book1);
    myLibrary.push(book2);
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

function submit() {
  if (title.value === "" || author.value === "" || pages.value === "") {
    alert("Please fill all fields!");
    return;
  }

  let book = new Book(title.value, author.value, pages.value, check.checked);
  myLibrary.push(book);

  // clear form
  title.value = "";
  author.value = "";
  pages.value = "";
  check.checked = false;

  render();
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read; // renamed from "check" (more readable)
}

function render() {
  let table = document.getElementById("display");

  // delete old rows
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  // insert updated rows
  for (let i = 0; i < myLibrary.length; i++) {
    let row = table.insertRow(1);

    row.insertCell(0).innerHTML = myLibrary[i].title;
    row.insertCell(1).innerHTML = myLibrary[i].author;
    row.insertCell(2).innerHTML = myLibrary[i].pages;

    // read status toggle button
    let readCell = row.insertCell(3);
    let readButton = document.createElement("button");
    readButton.className = "btn btn-success";
    readButton.innerText = myLibrary[i].read ? "Yes" : "No";

    readButton.addEventListener("click", function () {
      myLibrary[i].read = !myLibrary[i].read;
      render();
    });

    readCell.appendChild(readButton);

    // delete button
    let delCell = row.insertCell(4);
    let delButton = document.createElement("button");
    delButton.className = "btn btn-warning";
    delButton.innerText = "Delete";

    delButton.addEventListener("click", function () {
      alert(`You've deleted: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });

    delCell.appendChild(delButton);
  }
}
