let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();
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
    myLibrary.push(book1,book2);
    
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function addBook() {
  const sanitizedTitle = title.value.trim();
  const sanitizedAuthor = author.value.trim();
  const sanitizedPages = Number(pages.value);
  const isRead = check.checked;

  if (!sanitizedTitle || !sanitizedAuthor) {
    alert("Title and author cannot be empty.");
    return;
  }

  if (!Number.isInteger(sanitizedPages) || sanitizedPages <= 0) {
    alert("Pages must be a positive whole number.");
    return;
  }

  const book = new Book(
    sanitizedTitle,
    sanitizedAuthor,
    sanitizedPages,
    isRead
  );

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
  let table = document.getElementById("display");
  let rowsNumber = table.rows.length;
  //delete old table
  const tbody = table.querySelector("tbody");
  tbody.innerHTML = "";

  //insert updated row and cells
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = table.insertRow(1);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);
   titleCell.textContent = myLibrary[i].title;
   authorCell.textContent = myLibrary[i].author;
   pagesCell.textContent = myLibrary[i].pages;


    //add and wait for action for read/unread button
   let toggleReadBtn = document.createElement("button");
   toggleReadBtn.className = "btn btn-success";
   toggleReadBtn.innerText = myLibrary[i].check ? "Yes" : "No"; // ternary operator
   wasReadCell.appendChild(toggleReadBtn);

   toggleReadBtn.addEventListener("click", function () {
   myLibrary[i].check = !myLibrary[i].check;
   render();
});

    //add delete button to every row and render again
    let deleteBtn = document.createElement("button");
    deleteBtn.dataset.index = i;
    deleteCell.appendChild(deleteBtn);
    deleteBtn.className = "btn btn-warning";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
  }
}
