let myLibrary = [];

window.addEventListener("load", () => {
  populateStorage();
  render(); 
});
  
function populateStorage() {
  if (myLibrary.length == 0) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", 252, true);
    let book2 = new Book("The Old Man and the Sea","Ernest Hemingway", 127, true);
    let book3 = new Book("Gifted Hands", "Ben Carson", 320, false);
    let book4 = new Book("48 Laws of Power", "Robert Greene", 452, false);
    myLibrary.push(book1);
    myLibrary.push(book2);
    myLibrary.push(book3);
    myLibrary.push(book4);
  }
}
const titleInputE1 = document.getElementById("title");
const authorInputE1 = document.getElementById("author");
const pagesInputE1 = document.getElementById("pages");
const checkInputE1 = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  let title = titleInputE1.value.trim();
  let author = authorInputE1.value.trim();
  let pages = Number(pagesInputE1.value);
  let check = checkInputE1.checked;

  if (!title || !author || isNaN(pages) || pages <= 0) {
    alert("Please enter valid book details!");
    return false;
  } else {
    const book = new Book(title, author, pages, check);
    myLibrary.push(book);
    render();
    document.getElementById("form").reset();
  }
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}
function render () {
  let table = document.getElementById("display");
  let rowsNumber = table.rows.length;
  //delete old table
let tbody = table.tBodies[0];
tbody.innerHTML = "";
//insert updated row and cells
let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = table.insertRow(1);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);
    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    //add and wait for action for read/unread button
    let readBtn = document.createElement("button");
    readBtn.className = "btn btn-success";
    wasReadCell.appendChild(readBtn);
    let readStatus = myLibrary[i].check ? "Yes" : "No";
    readBtn.textContent = readStatus;

    readBtn.addEventListener("click", () => {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-warning";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      const confirmDelete = confirm(`Are you sure you want to delete "${myLibrary[i].title}"?`);
      if (!confirmDelete) return;
      myLibrary.splice(i, 1);
      render();
      alert(`Deleted: "${myLibrary[i].title}"`);
    });
    deleteCell.appendChild(deleteBtn);
  }
}
