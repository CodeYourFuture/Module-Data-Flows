const myLibrary = [];
//event listener
window.addEventListener("load", function (e) {
  populateStorage();
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

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function processbook() {
  const trimmedTitle = title.value.trim();
  const trimmedAuthor = author.value.trim();
  const pagesNum = Number(pages.value);

  if (
    !trimmedTitle ||
    !trimmedAuthor ||
    !Number.isInteger(pagesNum) ||
    pagesNum <= 0
  ) {
    alert("Please enter a valid title, author, and a whole number of pages.");
    return false;
  }

  let book = new Book(trimmedTitle, trimmedAuthor, pagesNum, check.checked);
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
  const table = document.getElementById("display");
  table.innerHTML = "";
  let rowsNumber = table.rows.length;
  //delete old table
  const tobody = table.querySelector("tbody") || table;
  tobody.innerHTML = "";

  //insert updated row and cells
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = table.insertRow(-1);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);
    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    //add and wait for action for read/unread button
    const changeBut = document.createElement("button");
    changeBut.className = "btn btn-success";
    wasReadCell.appendChild(changeBut);
    let readStatus = "";
    changeBut.textContent = myLibrary[i].check ? "Yes" : "No";

    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again

    const delBut = document.createElement("button");
    deleteCell.appendChild(delBut);
    delBut.className = "btn btn-warning";
    delBut.textContent = "Delete";
    delBut.addEventListener("click", function () {
      alert("Are you sure you want to delete the book ?");
      myLibrary.splice(i, 1);
      render();
    });
  }
}
