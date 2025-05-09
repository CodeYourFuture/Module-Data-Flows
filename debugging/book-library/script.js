let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", "252", true);
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

  const titleValue = title.value.trim();
  const authorValue = author.value.trim();
  const pagesValue = pages.value.trim();

  if (titleValue === "" || authorValue === "") {
    alert("Title and author cannot be empty or just spaces!");
    return false;
  }

  if (!/^\d+$/.test(pagesValue) || parseInt(pagesValue, 10) <= 0) {
    alert("Please enter a valid positive number for pages!");
    return false;
  }

  let book = new Book(titleValue, authorValue, pagesValue, check.checked);
  myLibrary.push(book);
  render();

  title.value = "";
  author.value = "";
  pages.value = "";
  check.checked = false;
  return false;
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  const table = document.getElementById("display");
  const tbody = table.getElementsByTagName("tbody")[0];

  tbody.innerHTML = "";

  // Insert updated rows
  for (let i = 0; i < myLibrary.length; i++) {
    let row = tbody.insertRow();

    let titleCell = row.insertCell();
    titleCell.textContent = myLibrary[i].title;

    let authorCell = row.insertCell();
    authorCell.textContent = myLibrary[i].author;

    let pagesCell = row.insertCell();
    pagesCell.textContent = myLibrary[i].pages;

    // Read/Unread button cell
    let wasReadCell = row.insertCell();
    let readStatusButton = document.createElement("button");
    readStatusButton.className = "btn btn-success";
    readStatusButton.innerText = myLibrary[i].check ? "Yes" : "No";
    readStatusButton.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });
    wasReadCell.appendChild(readStatusButton);

    // Delete button cell
    let deleteCell = row.insertCell();
    let deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-warning";
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
    deleteCell.appendChild(deleteButton);
  }
}