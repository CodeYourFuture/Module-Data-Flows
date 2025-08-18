let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", Number("252"), true);
    let book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      parseInt("127"),
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

// Strip out HTML tags (to prevent XSS)
function sanitizeInput(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

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
  if (
    bookTitleInput.value.trim() == "" ||
    bookAuthorInput.value.trim() == "" ||
    bookNumberOfPagesInput.value.trim() == ""
  ) {
    alert("Please fill all fields!");
    return false;
  } else if (
    isNaN(Number(bookNumberOfPagesInput.value.trim())) ||
    !isValidInteger(Number(bookNumberOfPagesInput.value.trim())) ||
    isHexadecimal(bookNumberOfPagesInput.value.trim()) ||
    Number(bookNumberOfPagesInput.value.trim()) <= 0
  ) {
    alert("Invalid number of pages format!");
    return false;
  }  else {
    const bookTitle = sanitizeInput(bookTitleInput.value.trim());
    const bookAuthor = sanitizeInput(bookAuthorInput.value.trim());
    const bookNumberOfPages = parseInt(sanitizeInput(bookNumberOfPagesInput.value.trim()), 10);
    let book = new Book(bookTitle, bookAuthor, bookNumberOfPages, isBookReadCheckBox.checked);
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
    if (myLibrary[i].check == false) {
      readStatus = "No";
    } else {
      readStatus = "Yes";
    }
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
