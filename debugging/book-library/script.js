const myLibrary = [];

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const checkInput = document.getElementById("check");
const bookForm = document.getElementById("book-form");

function setup() {
  populateStorage();
  render();

}

function populateStorage() {
  if (myLibrary.length === 0) {
    const book1 = new Book("Robison Crusoe", "Daniel Defoe", 252, true);
    const book2 = new Book(
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
function addBook(event) {
  event.preventDefault();
  const titleValue = titleInput.value.trim();
  const authorValue = authorInput.value.trim();
  const pagesValue = pagesInput.value;
  if (titleValue === "" || authorValue === "" || pagesValue === "") {
    alert("Please fill all fields!");
    return false;
  }

  const pages = Number(pagesValue);

  if (pages <= 0 || !Number.isInteger(pages)) {
    alert("Please enter a valid page number.");
    return false;
  }

  const book = new Book(titleValue, authorValue, pages, checkInput.checked);

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
  const tableBody = document.querySelector("#display tbody");

  //delete old table rows
  tableBody.innerHTML = "";

  //insert updated row and cells
  const length = myLibrary.length;

  for (let i = 0; i < length; i++) {
    const row = tableBody.insertRow();

    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const wasReadCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);

    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    //add and wait for action for read/unread button
    const changeButton = document.createElement("button");
    changeButton.className = "btn btn-success";
    wasReadCell.appendChild(changeButton);

    const readStatus = myLibrary[i].check ? "Yes" : "No";
    changeButton.textContent = readStatus;

    changeButton.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again
    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-warning";
    deleteButton.textContent = "Delete";
    deleteCell.appendChild(deleteButton);

    deleteButton.addEventListener("click", function () {
      const bookTitle = myLibrary[i].title;

      myLibrary.splice(i, 1);
      render();

      const message = document.getElementById("message");
      message.textContent = `You've deleted title: ${bookTitle}`;

      setTimeout(function () {
        message.textContent = "";
      }, 3000);
    });
  }
}
bookForm.addEventListener("submit", addBook);
window.addEventListener("load", setup);
