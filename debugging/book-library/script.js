let myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
  render();
});

const titleElement = document.getElementById("title");
const authorElement = document.getElementById("author");
const pagesElement = document.getElementById("pages");
const checkButton = document.getElementById("check");

function populateStorage() {
  if (myLibrary.length == 0) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", 252, true);
    let book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      127,
      true
    );
    myLibrary.push(book1);
    myLibrary.push(book2);
  }
}

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function

function submit() {
  if (!titleElement.value.trim() || !pagesElement.value.trim()) {
    alert("Please fill all fields!");
    return false;
  } else if (
    !Number.isInteger(Number(pagesElement.value)) ||
    Number(pagesElement.value) <= 0
  ) {
    alert("Pages must be a positive number.");
    return;
  } else {
    let book = new Book(
      titleElement.value,
      authorElement.value,
      parseInt(pagesElement.value, 10),
      checkButton.checked
    );
    myLibrary.push(book);
    render();
  }
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

  // Efficiently remove all rows
  tbody.innerHTML = "";

  myLibrary.forEach((book, i) => {
    const row = tbody.insertRow();

    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const wasReadCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;

    // Read/unread button
    const changeButton = document.createElement("button");
    changeButton.className = "btn btn-success";
    changeButton.innerText = book.check ? "Yes" : "No";
    changeButton.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });
    wasReadCell.appendChild(changeButton);

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-warning";
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
    deleteCell.appendChild(deleteButton);
  });
}
