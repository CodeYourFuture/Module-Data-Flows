const myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    const book1 = new Book("Robinson Crusoe", "Daniel Defoe", 252, true);
    const book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      127,
      true
    );
    myLibrary.push(book1, book2);
  }
}

const bookForm = document.getElementById("book-form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const checkInput = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
bookForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const pages = Number(pagesInput.value);
  const wasRead = checkInput.checked;

  if (!title || !author || !Number.isInteger(pages) || pages <= 0) {
    alert("Please fill all fields with valid information!");
    return;
  }
  const book = new Book(title, author, pages, wasRead);
  myLibrary.push(book);
  render();
  bookForm.reset();
});

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  const bookTableBody = document.getElementByID("book-table-body");
  bookTableBody.innerHTML = "";

  //insert updated row and cells
  const length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    const row = bookTableBody.insertRow();
    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const wasReadCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);
    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    //read/unread toggle button
    const toggleReadBtn = document.createElement("button");
    toggleReadBtn.className = "btn btn-success";
    toggleReadBtn.textContent = myLibrary[i].check ? "yes" : "no";
    wasReadCell.appendChild(toggleReadBtn);

    toggleReadBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //delete button with confirmation prompt
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-warning";
    deleteBtn.textContent = "Delete";
    deleteCell.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function () {
      const confirmDel = confirm(
        `Are you sure you want to delete "${myLibrary[i].title}"?`
      );
      if (confirmDel) {
        myLibrary.splice(i, 1);
        render();
      }
    });
  }
}
