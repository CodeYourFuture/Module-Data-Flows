let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", "252", true);
    let book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      "127",
      true
    );
    myLibrary.push(book1);
    myLibrary.push(book2);
    render();
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

function submit() {
  if (
    title.value.trim() === "" ||
    author.value.trim() === "" ||
    pages.value.trim() === ""
  ) {
    alert("Please fill all fields!");
    return false;
  } else {
    let book = new Book(
      title.value,
      author.value,
      pages.value,
      check.checked
    );
    myLibrary.push(book);
    render();
    clearForm();
  }
}

function clearForm() {
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
  let table = document.getElementById("display");
  let rowsNumber = table.rows.length;

  // Cleared previous rows
  for (let n = rowsNumber - 1; n > 0; n--) {
    table.deleteRow(n);
  }

  // Inserted updated rows
  myLibrary.forEach((book, index) => {
    let row = table.insertRow();
    row.insertCell(0).innerText = book.title;
    row.insertCell(1).innerText = book.author;
    row.insertCell(2).innerText = book.pages;

    let wasReadCell = row.insertCell(3);
    let changeBut = document.createElement("button");
    changeBut.className = "btn btn-success";
    changeBut.innerText = book.check ? "Yes" : "No";
    wasReadCell.appendChild(changeBut);

    changeBut.addEventListener("click", function () {
      book.check = !book.check;
      render();
    });

    let deleteCell = row.insertCell(4);
    let delButton = document.createElement("button");
    delButton.className = "btn btn-warning";
    delButton.innerText = "Delete";
    deleteCell.appendChild(delButton);

    delButton.addEventListener("click", function () {
      alert(`You've deleted title: ${book.title}`);
      myLibrary.splice(index, 1);
      render();
    });
  });
}
