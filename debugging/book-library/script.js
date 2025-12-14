const myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  document.getElementById("submit").addEventListener("click", submit);
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

// Check the right input from forms and if its ok -> add the new book (object in array)
// via Book function and start render function
function submit() {
  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const pagesInput = document.getElementById("pages");
  const isReadInput = document.getElementById("check");

  const titleValue = titleInput.value.trim();
  const authorValue = authorInput.value.trim();
  const pagesValue = Number(pagesInput.value);

  if (titleValue.length === 0 || authorValue.length === 0) {
    alert("Title or author cannot be blank!");
    return false;
  } else if (Number.isNaN(pagesValue) || pagesValue < 1) {
    alert("Pages must be a number and not a negative number or zero!");
    return false;
  } else {
    let book = new Book(
      titleValue,
      authorValue,
      pagesValue,
      isReadInput.checked
    );

    myLibrary.push(book);
    render();
  }
}

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function render() {
  let table = document.getElementById("display");
  const tableBody = table.querySelector("tbody");

  // Delete old table
  if (!tableBody) return;
  tableBody.innerHTML = "";

  // Insert updated row and cells
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

    // Add and wait for action for read/unread button
    let changeButton = document.createElement("button");
    changeButton.className = "btn btn-success";
    wasReadCell.appendChild(changeButton);
    changeButton.innerText = myLibrary[i].isRead ? "Yes" : "No";

    changeButton.addEventListener("click", function () {
      myLibrary[i].isRead = !myLibrary[i].isRead;
      render();
    });

    // Add delete button to every row and render again
    let deleteButton = document.createElement("button");
    deleteCell.appendChild(deleteButton);
    deleteButton.className = "btn btn-warning";
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
      const bookTitle = myLibrary[i].title;
      myLibrary.splice(i, 1);
      render();
      alert(`You've deleted title: ${bookTitle}`);
    });
  }
}
