let myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    const book1 = new Book("Robinson Crusoe", "Daniel Defoe", "252", true);
    const book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", "127", true);
    myLibrary.push(book1);
    myLibrary.push(book2);
  }
  render();
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

function submit() {
  if (!title.value || !author.value || !pages.value) {
    alert("Please fill all fields!");
    return false;
  } else {
    let book = new Book(title.value, author.value, pages.value, check.checked);
    myLibrary.push(book);
    render();
    clearForm();
  }
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  const table = document.getElementById("display");
  let rowsNumber = table.rows.length;
  
  
  for (let n = rowsNumber - 1; n > 0; n--) {
    table.deleteRow(n);
  }
  
  myLibrary.forEach((book, i) => {
    let row = table.insertRow();
    row.insertCell(0).innerText = book.title;
    row.insertCell(1).innerText = book.author;
    row.insertCell(2).innerText = book.pages;
    
    
    const readButton = document.createElement("button");
    readButton.className = "btn btn-success";
    readButton.innerText = book.check ? "Yes" : "No";
    readButton.addEventListener("click", () => {
      book.check = !book.check;
      render();
    });
    row.insertCell(3).appendChild(readButton);
    
    
    const delButton = document.createElement("button");
    delButton.className = "btn btn-warning";
    delButton.innerText = "Delete";
    delButton.addEventListener("click", () => {
      alert(`You've deleted title: ${book.title}`);
      myLibrary.splice(i, 1);
      render();
    });
    row.insertCell(4).appendChild(delButton);
  });
}

function clearForm() {
  title.value = "";
  author.value = "";
  pages.value = "";
  check.checked = false;
}
