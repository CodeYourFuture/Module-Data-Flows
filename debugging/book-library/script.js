let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  const form = document.querySelector('form');
  form?.addEventListener("submit", e => {
    e.preventDefault();
  });
  const addBookBtn = document.getElementById("add-book-btn");
  addBookBtn?.addEventListener("click", addBook);
});

function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", 252, true);
    let book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      127,
      true
    );
    myLibrary.push(book1);
    myLibrary.push(book2);
    render();
  }
}


function addBook() {
  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const pagesInput = document.getElementById("pages");
  const checkInput = document.getElementById("check");
  const titleValue = titleInput.value.trim();
  const authorValue = authorInput.value.trim();
  const pagesValue = Number(pagesInput.value);
  if (!titleValue || !authorValue) {
    alert("Please fill in all the fields!");
    return;
  }
  if (pagesValue < 1 || !Number.isInteger(pagesValue)) {
    alert("Pages must be a positive integer!");
    return;
  }
  let book = new Book(titleValue, authorValue, pagesValue, checkInput.checked);
  myLibrary.push(book);
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  checkInput.checked = false;
  alert(`You've added ${book.title} to your library.`);
  render();
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  let table = document.getElementById("display");
  const tbody = table.querySelector('tbody');
  if (tbody) {
    tbody.innerHTML = '';
  }
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = tbody.insertRow(); 
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);
    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;
    let toggleReadButton = document.createElement("button");
    toggleReadButton.type = "button";
    wasReadCell.appendChild(toggleReadButton);
    let readStatus = myLibrary[i].check ? "Yes" : "No";
    toggleReadButton.innerText = readStatus;
    toggleReadButton.className = 'btn ' + (myLibrary[i].check ? 'btn-success' : 'btn-danger');

    toggleReadButton.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again
    let deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteCell.appendChild(deleteButton);
    deleteButton.className = "btn btn-danger";
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function () {
      const deletedTitle = myLibrary[i].title; 
      myLibrary.splice(i, 1);
      render();
      alert(`You've deleted ${deletedTitle} from your library.`);
    });
  }
}
