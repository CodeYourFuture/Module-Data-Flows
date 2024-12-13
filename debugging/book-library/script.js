let myLibrary = [];

// Initialize the library with example books
window.addEventListener("load", function () {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", "252", true);
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

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

// Book constructor function
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Add a new book and render the table
function submit() {
  if (!title.value.trim() || !author.value.trim() || !pages.value.trim()) {
    alert("Please fill all fields!");
    return;
  }

  const newBook = new Book(
    title.value.trim(),
    author.value.trim(),
    pages.value.trim(),
    check.checked
  );
  myLibrary.push(newBook);
  render();

  // Clear input fields after submission
  title.value = "";
  author.value = "";
  pages.value = "";
  check.checked = false;
}

// Render the library table
function render() {
  const table = document.getElementById("display");
  const rowsNumber = table.rows.length;

  // Delete all rows except the header
  for (let n = rowsNumber - 1; n > 0; n--) {
    table.deleteRow(n);
  }

  // Populate the table with library books
  myLibrary.forEach((book, i) => {
    const row = table.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);

    cell1.innerHTML = book.title;
    cell2.innerHTML = book.author;
    cell3.innerHTML = book.pages;

    // Read/Unread button
    const changeBut = document.createElement("button");
    changeBut.className = "btn btn-success";
    changeBut.innerHTML = book.read ? "Yes" : "No";
    changeBut.addEventListener("click", function () {
      myLibrary[i].read = !myLibrary[i].read;
      render();
    });
    cell4.appendChild(changeBut);

    // Delete button
    const delBut = document.createElement("button");
    delBut.className = "btn btn-warning";
    delBut.innerHTML = "Delete";
    delBut.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
    cell5.appendChild(delBut);
  });
}
