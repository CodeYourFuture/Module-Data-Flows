let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", 252, true);
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
const check = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function bookSubmit() {
  let bookPagesFloat = parseFloat(pagesInput.value);
  let bookTitle = titleInput.value.toString().trim();
  let bookAuthor = authorInput.value.toString().trim();
  let bookCheck = check.checked;

  if (
    bookTitle === "" ||
    bookAuthor === "" ||
    !Number.isInteger(bookPagesFloat) ||
    bookPagesFloat <= 0
  ) {
    alert("Please fill all fields!");
    return false;
  } else {
    let book = new Book(bookTitle, bookAuthor, bookPagesFloat, bookCheck);
    myLibrary.push(book);
    render();
    titleInput.value = authorInput.value = pagesInput.value = "";
    check.checked = false;
  }
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  let table = document.getElementById("display");
  table.tBodies[0].innerHTML = "";

  myLibrary.forEach((book, index) => {
    let row = table.tBodies[0].insertRow();

    row.insertCell(0).textContent = book.title;
    row.insertCell(1).textContent = book.author;
    row.insertCell(2).textContent = book.pages;

    const wasReadCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);

    //add and wait for action for read/unread button
    let changeButton = document.createElement("button");
    //changeBut.id = i;
    changeButton.className = "btn btn-success";
    changeButton.dataset.index = parseInt(index);
    changeButton.dataset.action = "toggle-book";
    wasReadCell.appendChild(changeButton);
    changeButton.innerText = myLibrary[index].check ? "Yes" : "No";

    //add delete button to every row and render again
    let delButton = document.createElement("button");
    //delButton.id = i + 5;
    deleteCell.appendChild(delButton);
    delButton.className = "btn btn-warning";
    delButton.innerText = "Delete";
    delButton.dataset.index = parseInt(index);
    delButton.dataset.action = "delete-book";
  });
}

document.getElementById("display").addEventListener("click", function (e) {
  const target = e.target;
  const index = Number(target.dataset.index);
  const action = target.dataset.action;

  if (action === "toggle-book") {
    myLibrary[index].check = !myLibrary[index].check;
    render();
  }
  if (action === "delete-book") {
    const deletion = myLibrary[index].title;
    myLibrary.splice(index, 1);
    render();
    setTimeout(() => {
      alert(`${deletion} has been successfully deleted!`);
    }, 50);
  }
});
