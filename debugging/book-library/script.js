let myLibrary = [];

window.addEventListener("load", () => {
  loadFromStorage();
  render();
});

function saveToStorage() {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function loadFromStorage() {
  const stored = localStorage.getItem("myLibrary");
  if (stored) {
    myLibrary = JSON.parse(stored).map(
      (b) => new Book(b.title, b.author, b.pages, b.check)
    );
  } else {
    populateStorage();
  }
}

function populateStorage() {
  myLibrary.push(
    new Book("Robinson Crusoe", "Daniel Defoe", "252", true),
    new Book("The Old Man and the Sea", "Ernest Hemingway", "127", false)
  );
  saveToStorage();
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");
const message = document.getElementById("message");
const search = document.getElementById("search");

function submit() {
  message.innerText = ""; 

  if (
    title.value.trim() === "" ||
    author.value.trim() === "" ||
    pages.value.trim() === ""
  ) {
    message.innerText = " Please fill all fields.";
    return;
  }

  const duplicate = myLibrary.some(
    (book) => book.title.toLowerCase() === title.value.trim().toLowerCase()
  );
  if (duplicate) {
    message.innerText = " A book with this title already exists.";
    return;
  }

  const newBook = new Book(title.value, author.value, pages.value, check.checked);
  myLibrary.push(newBook);
  saveToStorage();
  render();

  title.value = "";
  author.value = "";
  pages.value = "";
  check.checked = false;
}

function render() {
  const table = document.getElementById("display");
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  const term = search?.value.toLowerCase() || "";

  myLibrary.forEach((book, i) => {
   
    if (
      !book.title.toLowerCase().includes(term) &&
      !book.author.toLowerCase().includes(term)
    ) {
      return; 
    }

    const row = table.insertRow(1);
    row.insertCell(0).innerText = book.title;
    row.insertCell(1).innerText = book.author;
    row.insertCell(2).innerText = book.pages;

    const readCell = row.insertCell(3);
    const readBtn = document.createElement("button");
    readBtn.className = "btn btn-success btn-sm";
    readBtn.innerText = book.check ? "Yes" : "No";
    readBtn.onclick = () => {
      book.check = !book.check;
      saveToStorage();
      render();
    };
    readCell.appendChild(readBtn);

    const deleteCell = row.insertCell(4);
    const delBtn = document.createElement("button");
    delBtn.className = "btn btn-danger btn-sm";
    delBtn.innerText = "Delete";
    delBtn.onclick = () => {
      if (confirm(`Delete: "${book.title}"?`)) {
        myLibrary.splice(i, 1);
        saveToStorage();
        render();
      }
    };
    deleteCell.appendChild(delBtn);
  });
}
