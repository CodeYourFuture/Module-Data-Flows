let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", 252, true);
    let book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      127,
      true
    );
    myLibrary.push(book1);
    myLibrary.push(book2);
  }
}

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const checkInput = document.getElementById("check");

function submit() {
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const pages = parseInt(pagesInput.value);
  const isRead = checkInput.checked;

  if (!title || !author || isNaN(pages) || pages <= 0) {
    alert("Please fill all fields correctly!");
    return false;
  } else {
    let book = new Book(title, author, pages, isRead);
    myLibrary.push(book);
    render();
  }
}

class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

function render() {
  let tableBody = document.querySelector("#display tbody");
  tableBody.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    let row = tableBody.insertRow();
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let readCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);

    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    // Read status button
    let readBtn = document.createElement("button");
    readBtn.className = "btn btn-success";
    readCell.appendChild(readBtn);

    readBtn.textContent = myLibrary[i].isRead ? "Yes" : "No";

    readBtn.addEventListener("click", function () {
      myLibrary[i].isRead = !myLibrary[i].isRead;
      render();
    });

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteCell.appendChild(deleteBtn);
    deleteBtn.className = "btn btn-warning";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
      const deletedTitle = myLibrary[i].title;
      myLibrary.splice(i, 1);
      render();
      alert(`You've deleted: ${deletedTitle}`);
    });
  }
}

window.submit = submit;
