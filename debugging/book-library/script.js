let myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
  render();
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function populateStorage() {
  if (myLibrary.length === 0) {
    const book1 = new Book("Robinson Crusoe", "Daniel Defoe", "252", true);
    const book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", "127", true);
    myLibrary.push(book1, book2);
  }
}

// DOM references
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const checkInput = document.getElementById("check");

function submit() {
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const pages = pagesInput.value.trim();
  const read = checkInput.checked;

  if (title === "" || author === "" || pages === "" || isNaN(pages) || parseInt(pages) <= 0) {
    alert("Please fill all fields correctly!");
    return false;
  }

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
  clearForm();
  return false;
}

function clearForm() {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  checkInput.checked = false;
}

function render() {
  const table = document.getElementById("display");
  const rows = table.rows.length;

  // Remove all rows except header
  for (let i = rows - 1; i > 0; i--) {
    table.deleteRow(i);
  }

  myLibrary.forEach((book, index) => {
    const row = table.insertRow(-1);
    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const readCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;

    const toggleReadBtn = document.createElement("button");
    toggleReadBtn.textContent = book.read ? "Yes" : "No";
    toggleReadBtn.className = "btn btn-success";
    toggleReadBtn.style.backgroundColor = book.read ? "green" : "red";
    toggleReadBtn.addEventListener("click", () => {
      myLibrary[index].read = !myLibrary[index].read;
      render();
    });
    readCell.appendChild(toggleReadBtn);

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "btn btn-warning";
    delBtn.addEventListener("click", () => {
      alert(`You've deleted "${book.title}"`);
      myLibrary.splice(index, 1);
      render();
    });
    deleteCell.appendChild(delBtn);
  });
}

