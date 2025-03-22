let myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
  render();
});

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check; // true = read, false = not read
}

function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", "252", true);
    let book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", "127", true);
    myLibrary.push(book1, book2);
    render();
  }
}

// DOM Elements
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

// Form submission handler
function submit() {
  if (
    title.value.trim() === "" ||
    author.value.trim() === "" ||
    pages.value.trim() === ""
  ) {
    alert("Please fill all fields!");
    return false;
  } else {
    let book = new Book(title.value, author.value, pages.value, check.checked);
    myLibrary.push(book);
    render();

    // Clear form inputs after adding
    title.value = "";
    author.value = "";
    pages.value = "";
    check.checked = false;
  }
}

function render() {
  const table = document.getElementById("display");
  const rowsNumber = table.rows.length;

  // Delete all rows except header
  for (let n = rowsNumber - 1; n > 0; n--) {
    table.deleteRow(n);
  }

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const row = table.insertRow(-1); // Append at end

    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const wasReadCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);

    titleCell.innerHTML = book.title;
    authorCell.innerHTML = book.author;
    pagesCell.innerHTML = book.pages;

    // Read/Unread Toggle Button
    const changeBut = document.createElement("button");
    changeBut.className = "btn btn-success";
    changeBut.innerText = book.check ? "Yes" : "No";
    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });
    wasReadCell.appendChild(changeBut);

    // Delete Button
    const delButton = document.createElement("button");
    delButton.className = "btn btn-warning";
    delButton.innerText = "Delete";
    delButton.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
    deleteCell.appendChild(delButton);
  }
}
