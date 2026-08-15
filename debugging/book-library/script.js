const myLibrary = [];

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const checkInput = document.getElementById("check");
const bookForm = document.getElementById("bookForm");

function init() {
  bookForm.addEventListener("submit", addBook);
  populateStorage();
  render();
}

window.addEventListener("load", init);

function populateStorage() {
  if (myLibrary.length === 0) {
    const book1 = new Book("Robinson Crusoe", "Daniel Defoe", 252, true);

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
function addBook(event) {
  event.preventDefault();

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const pages = Number(pagesInput.value);
  const check = checkInput.checked;
  //check the right input from forms and if its ok -> add the new book (object in array)
  //via Book function and start render function
  if (!title || !author || !pages || pages < 1 || !Number.isInteger(pages)) {
    alert("Please fill all fields correctly!");
    return;
  }

  const book = new Book(title, author, pages, checkInput.checked);

  myLibrary.push(book);
  render();

  bookForm.reset();
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  const tbody = document.querySelector("#display tbody");
  tbody.innerHTML = "";
  //delete old table
  for (let i = 0; i < myLibrary.length; i++) {
    //insert updated row and cells
    const row = tbody.insertRow();

    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const wasReadCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);

    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    //add and wait for action for read/unread button
    // Read button
    const readButton = document.createElement("button");
    readButton.className = "btn btn-success";

    // simplified if/else using ternary
    readButton.textContent = myLibrary[i].check ? "Yes" : "No";

    wasReadCell.appendChild(readButton);

    readButton.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again
    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-warning";
    deleteButton.textContent = "Delete";

    deleteCell.appendChild(deleteButton);

    deleteButton.addEventListener("click", function () {
      const deletedTitle = myLibrary[i].title;

      myLibrary.splice(i, 1);
      render();

      setTimeout(() => {
        alert(`You've deleted title: ${deletedTitle}`);
      }, 0);
    });
  }
}