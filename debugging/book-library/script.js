let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
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
    render();
  }
}

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const checkInput = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function handleSubmit(event) {
  event.preventDefault();
  if (
    !titleInput.value.trim() ||
    !authorInput.value.trim() ||
    pagesInput.value <= 0
  ) {
    alert("Please fill all fields!");
    return false;
  } else {
    let book = new Book(String(titleInput.value), String(authorInput.value), Number(pagesInput.value), checkInput.checked);
    myLibrary.push(book);
    resetAddNewBook()
    render();
  }
}

function resetAddNewBook() {
  // titleInput.value = '';
  // authorInput.value = '';
  // pagesInput.value = 0;
  // checkInput.checked = false;
  document.getElementById("book-form").reset()
}

class Book {
  constructor (title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
  }
}

function render() {
  //delete old table
  let tableBody = document.getElementById("display-body")
  tableBody.innerHTML = '';
  //insert updated row and cells
  myLibrary.forEach((book, index) => {
    let row = tableBody.insertRow(-1);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);
    titleCell.innerText = book.title;
    authorCell.innerText = book.author;
    pagesCell.innerText = book.pages;

    //add and wait for action for readToggle button
    let readToggleButton = document.createElement("button");
    readToggleButton.id = `readOrUnreadBtn${index}`;
    readToggleButton.className = "btn btn-success";
    wasReadCell.appendChild(readToggleButton);
    
    readToggleButton.innerText = book.check ? "Yes" : "No";

    readToggleButton.addEventListener("click", function () {
      book.check = !book.check;
      render();
    });

    //add delete button to every row and render again
    let deleteButton = document.createElement("button");
    deleteButton.id = `delBtn${index}`;
    deleteCell.appendChild(deleteButton);
    deleteButton.className = "btn btn-warning";
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => {
      if (confirm(`You've deleted title: ${book.title}`)) {
        myLibrary.splice(index, 1);
        render();
      }
    });
  })
}
