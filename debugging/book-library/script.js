let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length === 0) {
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

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const checkInput = document.getElementById("check");

function submit() {
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const pages = parseInt(pagesInput.value);
  const isRead = checkInput.checked;

  if (!title || !author || isNaN(pages) || pages <= 0) {
    alert("Please fill all fields correctly!");
    return false;
  } else {
    let book = new Book(title, author, pages, isRead);
    myLibrary.push(book);
    render();
  }
}

class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

function render() {
  let tableEl = document.getElementById("display");
  let rowsNumber = tableEl.rows.length;
  //delete old tableEl
  for (let n = rowsNumber - 1; n > 0; n--) {
    tableEl.deleteRow(n);
  }
  //insert updated row and cells
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = tableEl.insertRow(1);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesInputCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);
    titleCell.innerHTML = myLibrary[i].titleInput;
    authorCell.innerHTML = myLibrary[i].authorInput;
    pagesInputCell.innerHTML = myLibrary[i].pagesInput;

    //add and wait for action for read/unread button
    let changeBut = document.createElement("button");
    changeBut.id = i;
    changeBut.className = "btn btn-success";
    wasReadCell.appendChild(changeBut);
    let readStatus = "";
    if (myLibrary[i].checkInput === true) {
      readStatus = "Yes";
    } else {
      readStatus = "No";
    }
    changeBut.innerText = readStatus;

    changeBut.addEventListener("click", function () {
      myLibrary[i].checkInput = !myLibrary[i].checkInput;
      render();
    });

    //add delete button to every row and render again
    let delButton = document.createElement("button");
    delButton.id = i + 5;
    deleteCell.appendChild(delButton);
    delButton.className = "btn btn-warning";
    delButton.innerHTML = "Delete";
    delButton.addEventListener("click", function () {
      alert(`You've deleted titleInput: ${myLibrary[i].titleInput}`);
      myLibrary.splice(i, 1);
      render();
    });
  }
}
