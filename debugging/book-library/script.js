let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", 252, true);
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

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

function submit() {
  const titleText = title.value.trim();
  const authorText = author.value.trim();
  const pagesNumber = Number(pages.value.trim());

  if (!titleText || !authorText || !pages.value.trim()) {
    alert("Please fill all fields!");
    return;
  }

  if (!Number.isFinite(pagesNumber) || pagesNumber <= 0) {
    alert("Pages must be a positive number.");
    return;
  }

  const alreadyExists = myLibrary.some(
    (book) => book.title.toLowerCase() === titleText.toLowerCase()
  );
  if (alreadyExists) {
    alert("This book is already in your library!");
    return;
  }

  const book = new Book(titleText, authorText, pagesNumber, check.checked);
  myLibrary.push(book);
  render();

  title.value = "";
  author.value = "";
  pages.value = "";
  check.checked = false;
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  const tbody = document.getElementById("bookRows");
  tbody.textContent = "";

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];

    const row = tbody.insertRow();

    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const wasReadCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;

    const changeBtn = document.createElement("button");
    changeBtn.className = "btn btn-success";
    changeBtn.textContent = book.check ? "Yes" : "No";
    changeBtn.addEventListener("click", function () {
      book.check = !book.check;
      render();
    });
    wasReadCell.appendChild(changeBtn);

    let delBtn = document.createElement("button");
    delBtn.className = "btn btn-warning";
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", function () {
      const bookIndex = myLibrary.indexOf(book);
      if (bookIndex === -1) return;

      myLibrary.splice(bookIndex, 1);
      render();
      alert(`You've deleted title: ${book.title}`);
    });
    deleteCell.appendChild(delBtn);
  }
}
