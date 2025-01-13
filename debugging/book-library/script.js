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
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

function submit() {
  if (!title.value || !author.value || !pages.value) {
    alert("Please fill all fields!");
    return false;
  }
  if (isNaN(pages.value) || pages.value <= 0) {
    alert("Please enter a valid number of pages!");
    return false;
  }

  let book = new Book(title.value, author.value, pages.value, check.checked);
  myLibrary.push(book);
  render();
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

  // Delete old rows
  for (let n = rowsNumber - 1; n > 0; n--) {
    table.deleteRow(n);
  }

  // Insert updated rows
  for (let i = 0; i < myLibrary.length; i++) {
    let row = table.insertRow(-1);

    row.insertCell(0).innerText = myLibrary[i].title;
    row.insertCell(1).innerText = myLibrary[i].author;
    row.insertCell(2).innerText = myLibrary[i].pages;

    let wasReadCell = row.insertCell(3);
    let changeBut = document.createElement("button");
    changeBut.id = i;
    changeBut.className = "btn btn-success";
    changeBut.innerText = myLibrary[i].check ? "Yes" : "No";
    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });
    wasReadCell.appendChild(changeBut);

    let deleteCell = row.insertCell(4);
    let delButton = document.createElement("button");
    delButton.id = i + 5;
    delButton.className = "btn btn-warning";
    delButton.innerHTML = "Delete";
    delButton.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
    deleteCell.appendChild(delButton);
  }
}