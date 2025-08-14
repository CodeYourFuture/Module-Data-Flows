let myLibrary = [];


const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readCheckbox = document.getElementById("check");
const form = document.getElementById("book-form")
const tbody = document.getElementById("book-list");


window.addEventListener("load", function () {
  populateStorage();
  render();
});

form.addEventListener("submit", handleSubmit);

function populateStorage() {
  if (myLibrary.length == 0) {
     myLibrary.push(
       new Book("Robison Crusoe", "Daniel Defoe", "252", true),
       new Book("The Old Man and the Sea", "Ernest Hemingway", "127", true)
     );
  }
}

function handleSubmit(event) {
  event.preventDefault();

  const bookData = {
    title: titleInput.value.trim(),
    author: authorInput.value.trim(),
    pages: Number(pagesInput.value),
    read: readCheckbox.checked
  };

  if (!isValidBook(bookData)) {
    alert("Please enter valid book details.");
    return;
  }

  myLibrary.push(new Book(bookData.title, bookData.author, bookData.pages, bookData.read));
  render();
  clearForm();
}

// Validation
function isValidBook({ title, author, pages }) {
  return title && author && Number.isInteger(pages) && pages > 0;
}

// Reset form
function clearForm() {
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

function render() {
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
    toggleReadBtn.type = "button";
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
