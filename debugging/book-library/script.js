let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
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

const titleDom = document.getElementById("title");
const authorDom = document.getElementById("author");
const pagesDom = document.getElementById("pages");
const checkDom = document.getElementById("check");

document.getElementById('submit-btn').addEventListener('click', submit);

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  const title = sanitize(titleDom.value.trim());
  const author = sanitize(authorDom.value.trim());
  let pages = sanitize(pagesDom.value.trim());
  if (isNaN(pages)){
    alert("Enter valid value for page number!");
    return false;
  }
  pages = parseInt(pages);
  if (!isValueInteger(pages)){
    alert("Enter valid value for page number!");
    return false;
  }
  
  if (
    title == "" || 
    author == "" ||
    pages < 0
  ) {
    alert("Please fill all fields or enter valid values!");
    return false;
  } else {
    let book = new Book(title, author, pages, checkDom.checked);
    myLibrary.push(book);
    render();
  }
}

function isValueInteger(value) {
  return Number.isInteger(value);
}

function sanitize(string) {
  return string.replace(/[^\w\s]/gi, '');
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  let table = document.getElementById("display");
  //delete old table
  let tableBody = table.querySelector("tbody");
  tableBody.textContent = '';
  //insert updated row and cells
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = tableBody.insertRow(0);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);
    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    //add and wait for action for read/unread button
    let changeBut = document.createElement("button");
    changeBut.id = i;
    changeBut.className = "btn btn-success";
    wasReadCell.appendChild(changeBut);
    let readStatus = myLibrary[i].check ? "Yes" : "No";
    changeBut.textContent = readStatus;

    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again
    let delBut = document.createElement("button");
    delBut.id = i + 5;
    deleteCell.appendChild(delBut);
    delBut.className = "btn btn-warning";
    delBut.textContent = "Delete";
    delBut.addEventListener("click", function () {
      myLibrary.splice(i, 1);
      alert(`You've deleted title: ${myLibrary[i].title}`);
      render();
    });
  }
}
