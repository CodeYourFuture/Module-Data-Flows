let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", 252, true);
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

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const checkInput = document.getElementById("check");


function submit() {
  // Trim inputs
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const pagesRawInput = pagesInput.value.trim();
  const pages = Number(pagesRawInput);

  // Input validation
  if (!title || !author || !pagesRawInput) {
    alert("Please fill all fields!");
    return false;
  }
  
  // Author name must only contain letters and spaces
  if (!/^[A-Za-z\s]+$/.test(author)) {
    alert("Author name must only contain letters and spaces.");
    return false;
  }
  if (!Number.isInteger(pages)) {
    alert("Page count must be a positive integer.");
    return false;
  }

  let book = new Book(title, author, pages, checkInput.checked);
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
  let table = document.getElementById("display");
  let tbody = table.querySelector("tbody");
  if(!tbody) {
    tbody = document.createElement("tbody");
    table.appendChild(tbody);
  }
  tbody.innerHTML = ""; // Clear existing rows
  // Insert updated rows and cells
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

    // Add and wait for action for read/unread button
    let changeBut = document.createElement("button");
    changeBut.className = "btn btn-success";
    wasReadCell.appendChild(changeBut);
    let readStatus = myLibrary[i].check ? "Yes" : "No";
    changeBut.textContent = readStatus;

    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    // Add delete button to every row and render again
    let delBut = document.createElement("button");
    deleteCell.appendChild(delBut);
    delBut.className = "btn btn-warning";
    delBut.textContent = "Delete";
    delBut.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
  }
}
