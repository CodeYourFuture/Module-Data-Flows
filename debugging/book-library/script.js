let myLibrary = [];
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");
window.addEventListener("load", function () {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", "252", true);
    let book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", "127", true);
    myLibrary.push(book1, book2);
  }
}
function submit() {
  if (!title.value || !author.value || !pages.value) {
    alert("Please fill all fields!");
    return;
  }
  let book = new Book(title.value, author.value, pages.value, check.checked);
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
  let table = document.getElementById("display").getElementsByTagName("tbody")[0];
  table.innerHTML = ""; // Clear previous rows

  myLibrary.forEach((book, index) => {
    let row = table.insertRow();
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td><button class="btn toggle-read ${book.check ? 'btn-success' : 'btn-danger'}">${book.check ? "Yes" : "No"}</button></td>
      <td><button class="btn btn-warning delete-book">Delete</button></td>
    `;

    row.querySelector(".toggle-read").addEventListener("click", () => {
      book.check = !book.check;
      render();
    });

    row.querySelector(".delete-book").addEventListener("click", () => {
      alert(`You've deleted title: ${book.title}`);
      myLibrary.splice(index, 1);
      render();
    });
  });
}
