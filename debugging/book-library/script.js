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
    let toggleButton = document.createElement("button");
    toggleButton.dataset.index = i;
    toggleButton.className = "btn btn-success";
    toggleButton.innerText = myLibrary[i].check ? "Yes" : "No";
    toggleButton.addEventListener("click", function () {
      const index = this.dataset.index;
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });
    wasReadCell.appendChild(toggleButton);

    let deleteCell = row.insertCell(4);
    let deleteButton = document.createElement("button");
    deleteButton.dataset.index = i;
    deleteButton.className = "btn btn-warning";
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", function () {
      const index = this.dataset.index;
      const removedTitle = myLibrary[index].title;
      myLibrary.splice(index, 1);
      render();
      alert(`You've deleted title: ${removedTitle}`);
    });
    deleteCell.appendChild(deleteButton);
  }
}