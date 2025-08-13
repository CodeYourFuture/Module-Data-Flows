let myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", 252, true);
    let book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true);
    myLibrary.push(book1, book2);
    render();
  }
}

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readCheckbox = document.getElementById("check");

function addBook() {
  if (
    titleInput.value.trim() === "" ||
    authorInput.value.trim() === "" ||
    pagesInput.value.trim() === ""
  ) {
    alert("Please fill all fields!");
    return;
  }

  if (!Number.isInteger(Number(pagesInput.value)) || Number(pagesInput.value) <= 0) {
    alert("Pages must be a positive number.");
    return;
  }

  let book = new Book(
    titleInput.value.trim(),
    authorInput.value.trim(),
    Number(pagesInput.value),
    readCheckbox.checked
  );
  myLibrary.push(book);
  clearForm();
  render();
}

function clearForm() {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readCheckbox.checked = false;
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  let tableBody = document.querySelector("#display tbody");
  tableBody.innerHTML = "";

  myLibrary.forEach((book, i) => {
    let row = tableBody.insertRow();

    row.insertCell(0).textContent = book.title;
    row.insertCell(1).textContent = book.author;
    row.insertCell(2).textContent = book.pages;

    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);

    let toggleReadBtn = document.createElement("button");
    toggleReadBtn.className = "btn btn-success";
    toggleReadBtn.textContent = book.check ? "Yes" : "No";
    toggleReadBtn.addEventListener("click", function () {
      book.check = !book.check;
      render();
    });
    wasReadCell.appendChild(toggleReadBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-warning";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      if (confirm(`Are you sure you want to delete: ${book.title}?`)) {
        myLibrary.splice(i, 1);
        render();
        alert(`Deleted title: ${book.title}`);
      }
    });
    deleteCell.appendChild(deleteBtn);
  });
}
