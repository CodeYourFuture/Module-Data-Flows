let myLibrary = [];

window.addEventListener("load", () => {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    myLibrary.push(new Book("Robison Crusoe", "Daniel Defoe", 252, true));
    myLibrary.push(new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true));
  }
}

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const checkInput = document.getElementById("check");

function submit() {
  const titleValue = titleInput.value.trim();
  const authorValue = authorInput.value.trim();
  const pagesValue = pagesInput.value.trim();

  if (!titleValue || !authorValue || !pagesValue) {
    alert("Please fill all fields!");
    return;
  }

  const pagesNumber = Number(pagesValue);
  if (!Number.isInteger(pagesNumber) || pagesNumber <= 0) {
    alert("Pages must be a positive whole number!");
    return;
  }

  const book = new Book(titleValue, authorValue, pagesNumber, checkInput.checked);
  myLibrary.push(book);

  render();
  clearForm();
}

function clearForm() {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  checkInput.checked = false;
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  const table = document.getElementById("display");
  const tbody = table.querySelector("tbody");
  tbody.innerHTML = "";

  myLibrary.forEach((book, i) => {
    const row = tbody.insertRow();

    const titleCell = row.insertCell();
    const authorCell = row.insertCell();
    const pagesCell = row.insertCell();
    const readCell = row.insertCell();
    const deleteCell = row.insertCell();

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;

    const toggleBtn = document.createElement("button");
    toggleBtn.className = "btn btn-success";
    toggleBtn.textContent = book.check ? "Yes" : "No";
    toggleBtn.addEventListener("click", () => {
      book.check = !book.check;
      render();
    });
    readCell.appendChild(toggleBtn);

    const delBtn = document.createElement("button");
    delBtn.className = "btn btn-warning";
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => {
      const deletedTitle = book.title;
      myLibrary.splice(i, 1);
      render();
      alert(`You've deleted: ${deletedTitle}`);
    });
    deleteCell.appendChild(delBtn);
  });
}
