let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
});

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
    render();
  }
}

const bookTitleInput = document.getElementById("title");
const bookAuthorInput = document.getElementById("author");
const bookNumberOfPagesInput = document.getElementById("pages");
const isBookReadCheckBox = document.getElementById("check");

// To check if pages input can be safely converted to integer
function isValidInteger(input) {
  return Number.isInteger(input);
}
// prevent accidental hexadecimal input
function isHexadecimal(input) {
  return /^0x[0-9a-fA-F]+$/.test(input);
}

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  const bookTitle = bookTitleInput.value.trim();
  const bookAuthor = bookAuthorInput.value.trim();
  const bookNumberOfPages = bookNumberOfPagesInput.value.trim();
  const isBookRead = isBookReadCheckBox.checked;
  if (  bookTitle == "" || bookAuthor == "" || bookNumberOfPages == "" ) {
    alert("Please fill all fields!");
    return false;
  } else if (
    !isValidInteger(Number(bookNumberOfPages)) ||
    // if input hexadecimal (true) it will ask user to type correct number of pages format
    isHexadecimal(bookNumberOfPages) ||
    Number(bookNumberOfPages) <= 0
  ) {
    alert("Invalid number of pages format!");
    return false;
  }  else {
    const bookNumberOfPagesInt = parseInt(bookNumberOfPagesInput.value.trim(), 10);
    let book = new Book(bookTitle, bookAuthor, bookNumberOfPagesInt, isBookRead);
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
  let table = document.getElementById("display");
  let tableBody = table.querySelector("tbody");
  tableBody.innerHTML = '';
  //insert updated row and cells
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = tableBody.insertRow();
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);
    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    //add and wait for action for read/unread button
    let changeReadStatusButton = document.createElement("button");
    changeReadStatusButton.className = "btn btn-success";
    wasReadCell.appendChild(changeReadStatusButton);
    let readStatus = "";
    !myLibrary[i].check ? readStatus = "No" : readStatus = "Yes";
    changeReadStatusButton.innerText = readStatus;

    changeReadStatusButton.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again
    let deleteBookButton = document.createElement("button");
    deleteCell.appendChild(deleteBookButton);
    deleteBookButton.className = "btn btn-warning";
    deleteBookButton.innerHTML = "Delete";
    deleteBookButton.addEventListener("click", function () {
      myLibrary.splice(i, 1);
      alert(`You've deleted title: ${myLibrary[i].title}`);
      render();
    });
  }
}
