let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", "252", true);
    let book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", "127", true);
    myLibrary.push(book1, book2);
  }
  render();
}


const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  if (
    title.value == null ||
    title.value == "" ||
    pages.value == null ||
    pages.value == ""
  ) {
    alert("Please fill all fields!");
    return false;
  }  const book = new Book(title.value, author.value, pages.value, check.checked);
  myLibrary.push(book);
  render();

  // Clear input fields
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
  const table = document.getElementById("display");
  const rows = table.rows.length;
   for (let i = rows - 1; i > 0; i--) {
    table.deleteRow(i);
  }


   myLibrary.forEach((book, i) => {
    const row = table.insertRow();
    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const readCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);

    titleCell.innerText = book.title;
    authorCell.innerText = book.author;
    pagesCell.innerText = book.pages;

    const toggleBtn = document.createElement("button");
    toggleBtn.className = "btn btn-success";
    toggleBtn.innerText = book.check ? "Yes" : "No";
    toggleBtn.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });
    readCell.appendChild(toggleBtn);

    const delButton = document.createElement("button");
    delButton.className = "btn btn-warning";
    delButton.innerText = "Delete";
    delButton.addEventListener("click", function () {
      alert(`You've deleted title: ${book.title}`);
      myLibrary.splice(i, 1);
      render();
    });
    deleteCell.appendChild(delButton);
  });
}