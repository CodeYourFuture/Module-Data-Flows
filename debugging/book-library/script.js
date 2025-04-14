let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", "252", true);
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

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  // Trim the title and check if it's empty
  const trimmedTitle = title.value.trim();
  const trimmedAuthor = author.value.trim();
  
  if (trimmedTitle === "" || trimmedAuthor === "" || pages.value.trim() === "") {
    alert("Please fill all fields!");
    return false;
  }

  // Validate the "pages" field so that it is always a positive integer
  const pagesValue = parseInt(pages.value, 10);
  if (isNaN(pagesValue) || pagesValue <= 0) {
    alert("Please enter a valid number of pages!");
    return false;
  }

  // If all fields are valid, create and add the book to the library
  let book = new Book(trimmedTitle, trimmedAuthor, pages.value, check.checked);
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
  const table = document.getElementById("display");
  const tbody = table.getElementsByTagName("tbody")[0]; // Access the <tbody> directly

  // Clear all rows in tbody
  tbody.innerHTML = '';

  myLibrary.forEach((book, index) => {
    const row = tbody.insertRow();
    row.insertCell(0).innerText = book.title;
    row.insertCell(1).innerText = book.author;
    row.insertCell(2).innerText = book.pages;

    // Toggle Read Button
    const toggleBtn = document.createElement("button");
    toggleBtn.className = "btn btn-success";
    toggleBtn.innerText = book.check ? "Yes" : "No";
    toggleBtn.addEventListener("click", function () {
      book.check = !book.check;
      render();
    });
    row.insertCell(3).appendChild(toggleBtn);

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-warning";
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", function () {
      alert(`You've deleted title: ${book.title}`);
      myLibrary.splice(index, 1);
      render();
    });
    row.insertCell(4).appendChild(deleteBtn);
  });
}
