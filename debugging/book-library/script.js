let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});


function populateStorage() {
  if (myLibrary.length == 0) {
     myLibrary.push(
       new Book("Robison Crusoe", "Daniel Defoe", "252", true);
       new Book("The Old Man and the Sea", "Ernest Hemingway", "127", true)
     );
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const pages = Number(pagesInput.value);
  const read = readCheckbox.checked;

  
  if (
    !title ||
    !author ||
    !Number.isInteger(pages) ||
    pages <= 0
  ) {
    alert("Please enter valid book details.");
    return false;
  }

  myLibrary.push(new Book(title, author, pages, read));
  render();

  
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readCheckbox.checked = false;
}

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
   const tbody = document.getElementById("book-list");
   tbody.innerHTML = ""; 

  myLibrary.forEach((book, index) => {
    const row = tbody.insertRow();

    
    const titleCell = row.insertCell();
    titleCell.textContent = book.title;

    
    const authorCell = row.insertCell();
    authorCell.textContent = book.author;

    
    const pagesCell = row.insertCell();
    pagesCell.textContent = book.pages;

    
    const readCell = row.insertCell();
    const toggleReadBtn = document.createElement("button");
    toggleReadBtn.className = "btn btn-success";
    toggleReadBtn.textContent = book.read ? "Yes" : "No";
    toggleReadBtn.addEventListener("click", function () {
      book.read = !book.read;
      render();
    });
    readCell.appendChild(toggleReadBtn);

    
    const deleteCell = row.insertCell();
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-warning";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      if (confirm(`Are you sure you want to delete "${book.title}"?`)) {
        myLibrary.splice(index, 1);
        render();
      }
    });
    deleteCell.appendChild(deleteBtn);
  });
}
