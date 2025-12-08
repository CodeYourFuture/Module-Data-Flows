let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  const form = document.getElementById("bookForm");
  form?.addEventListener("submit", e => {
    e.preventDefault();
  });
  const addBookBtn = document.getElementById("add-book-btn");
  addBookBtn?.addEventListener("click", addBook);
});

function populateStorage() {
  if (myLibrary.length === 0) {
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


//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function addBook() {
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const check = document.getElementById("check");
  if (!title.value || !author.value || !pages.value) {
    alert("Please fill all fields!");
  } else {
    let book = new Book(title.value, author.value, pages.value, check.checked);
    myLibrary.push(book);
    title.value = "";
    author.value = "";
    pages.value = "";
    check.checked = false;
    alert (`You've added ${book.title} to your library.`);
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
  let table = document.getElementById("display");
  let rowsNumber = table.rows.length;
  //delete old table
  for (let n = rowsNumber - 1; n > 0; n--) {
    table.deleteRow(n);
  }
  //insert updated row and cells
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = table.insertRow(1);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);
    titleCell.innerText = myLibrary[i].title;
    authorCell.innerText = myLibrary[i].author;
    pagesCell.innerText = myLibrary[i].pages;

    //add and wait for action for read/unread button
    let changeBut = document.createElement("button");
    changeBut.type = "button";
    wasReadCell.appendChild(changeBut);
    let readStatus = myLibrary[i].check ? "Yes" : "No";
    changeBut.innerText = readStatus;
    changeBut.className = 'btn '+ (myLibrary[i].check ? 'btn-success' : 'btn-danger');

    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again
    let delButton = document.createElement("button");
    delButton.type = "button";
    deleteCell.appendChild(delButton);
    delButton.className = "btn btn-danger";
    delButton.innerText = "Delete";
    delButton.addEventListener("click", function () {
      alert(`You've deleted ${myLibrary[i].title} from your library.`);
      myLibrary.splice(i, 1);
      render();
    });
  }
}
