let myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    const book1 = new Book("Robinson Crusoe", "Daniel Defoe", "252", true);
    const book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      "127",
      false
    );
    myLibrary.push(book1, book2);
  }
}

function submit() {
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const pages = document.getElementById("pages").value.trim();
  const check = document.getElementById("check").checked;

  if (!title || !author || !pages || isNaN(pages) || pages <= 0) {
    alert("Please fill all fields with valid data!");
    return false;
  }

  const book = new Book(title, author, pages, check);
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
  const table = document.getElementById("display").getElementsByTagName("tbody")[0];

  // Clear existing rows
  while (table.rows.length > 0) {
    table.deleteRow(0);
  }

  // Insert updated rows
  myLibrary.forEach((book, index) => {
    const row = table.insertRow();
    const readClass = book.check ? "btn-success" : "btn-danger";
    const readText = book.check ? "Yes" : "No";

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td><button class="btn ${readClass}" data-index="${index}">${readText}</button></td>
      <td><button class="btn btn-warning" data-index="${index}">Delete</button></td>
    `;

    // Add event listeners for buttons
    row.querySelector(`.btn.${readClass}`).addEventListener("click", () => {
      book.check = !book.check;
      render();
    });

    row.querySelector(".btn-warning").addEventListener("click", () => {
      alert(`You've deleted title: ${book.title}`);
      myLibrary.splice(index, 1);
      render();
    });
  });
}
