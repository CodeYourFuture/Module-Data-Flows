let myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", 252, true);
    let book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true);
    myLibrary.push(book1, book2);
  }
}

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readCheckBox = document.getElementById("check");

function submit() {
  const titleValue = titleInput.value.trim();
  const authorValue = authorInput.value.trim();
  const pagesValue = pagesInput.value.trim();

  if (!titleValue || !authorValue || !pagesValue) {
    alert("Please fill in all fields before submitting!");
    return false;
  }
  if (isNaN(pagesValue) || parseInt(pagesValue) <= 0) {
    alert("Please enter a valid number of pages!");
    return false;
  }

  const book = new Book(titleValue, authorValue, pagesValue, readCheckBox.checked);
  myLibrary.push(book);

  render();
  clearForm();

  return false;

  // Clear the form
  function clearForm() {
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readCheckBox.checked = false;
  }

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = parseInt(pages) || 0;
  this.check = check;
}

function clearTable() {
  const table = document.getElementById("display");
  const tbody = table.querySelector("tbody") || table;
  while (tbody.children.length > 0) {
    tbody.removeChild(tbody.lastElementChild);
  }
}

function render() {
  clearTable();
  let table = document.getElementById("display");

  myLibrary.forEach((book, i) => {
    let row = table.insertRow(1);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;

    let changeBtn = document.createElement("button");
    changeBtn.className = "btn btn-success";
    changeBtn.textContent = book.check ? "Yes" : "No";
    changeBtn.onclick = () => {
      book.check = !book.check;
      render();
    };
    wasReadCell.appendChild(changeBtn);

    let delBtn = document.createElement("button");
    delBtn.className = "btn btn-warning";
    delBtn.textContent = "Delete";
    delBtn.onclick = () => {
      if (confirm(`Are you sure you want to delete the book titled: ${book.title}?`)) {
        myLibrary.splice(i, 1);
        render();
        alert(`You've deleted title: ${book.title}`);
      }
    };
    deleteCell.appendChild(delBtn);
  });
}

function viewReadBooks() {
  clearTable();
  let table = document.getElementById("display");

  myLibrary
    .filter(book => book.check)
    .forEach(book => {
      let row = table.insertRow(1);
      row.insertCell(0).textContent = book.title;
      row.insertCell(1).textContent = book.author;
      row.insertCell(2).textContent = book.pages;
      row.insertCell(3).textContent = "Yes";
      row.insertCell(4).textContent = "-";
    });
}