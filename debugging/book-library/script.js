let myLibrary = [];

window.addEventListener("load", populateStorage);

function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", 252, true);
    let book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true);
    myLibrary.push(book1, book2);
  }
  render();
}

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const checkInput = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  const titleValue = titleInput.value.trim();
  const authorValue = authorInput.value.trim();
  const pagesValue = Number(pagesInput.value);

  const titleOk = titleValue.length > 0;
  const authorOk = authorValue.length > 0;
  const pagesOk = Number.isFinite(pagesValue) && pagesValue > 0 && Number.isInteger(pagesValue);

  if (!titleOk || !authorOk || !pagesOk) {
    alert("Please provide a title, an author, and a positive whole number of pages.");
    return;
  }

  const book = new Book(titleValue, authorValue, pagesValue, checkInput.checked);
  myLibrary.push(book);

  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  checkInput.checked = false;

  render();
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read  = read;
}

function render() {
  let table = document.getElementById("display");
  const tbody = table.querySelector("tbody"); 

  //delete old table
  tbody.innerHTML = "";

  //insert updated row and cells
myLibrary.forEach((book, index) => {
    const row = tbody.insertRow();

    // Use textContent for plain text
    row.insertCell().textContent = book.title;
    row.insertCell().textContent = book.author;
    row.insertCell().textContent = book.pages;

    // Read/Unread toggle button
    const readCell = row.insertCell();
    const readToggleBtn = document.createElement("button");
    readToggleBtn.className = "btn btn-success";
    readToggleBtn.type = "button";
    readToggleBtn.textContent = book.read ? "Yes" : "No";
    readToggleBtn.addEventListener("click", () => {
      myLibrary[index].read = !myLibrary[index].read;
      render();
    });
    readCell.appendChild(readToggleBtn);
    
    // Delete button
    const deleteCell = row.insertCell();
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-warning";
    deleteBtn.type = "button";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      const removedTitle = myLibrary[index].title;
      myLibrary.splice(index, 1); 
      render();                   
      alert(`Deleted: ${removedTitle}`); 
    });
    deleteCell.appendChild(deleteBtn);
  });
}