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
  // Trim 
  const title = titleInput.value ? titleInput.value.trim() : "";
  const author = authorInput.value ? authorInput.value.trim() : "";
  const pagesRawInput = pagesInput.value ? pagesInput.value.trim() : "";
  const pages = Number(pagesRawInput);

  // Input validation
  if (!title || !author || !pagesRawInput) {
    alert("Please fill all fields!");
    return false;
  }
  if (title.length === 0 || author.length === 0) {
    alert("Title and author cannot be empty or only spaces.");
    return false;
  }
  // Author name must only contain letters and spaces
  if (!/^[A-Za-z\s]+$/.test(author)) {
    alert("Author name must only contain letters and spaces.");
    return false;
  }
  if (pagesRawInput === "" || isNaN(pages) || !Number.isInteger(pages) || pages <= 0) {
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
  // while loop for efficiently removing all rows except the header
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
  // Insert updated rows and cells
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = table.insertRow(1);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);
    titleCell.innerHTML = myLibrary[i].title;
    authorCell.innerHTML = myLibrary[i].author;
    pagesCell.innerHTML = myLibrary[i].pages;

    // Add and wait for action for read/unread button
    let changeBut = document.createElement("button");
    changeBut.id = i;
    changeBut.className = "btn btn-success";
    wasReadCell.appendChild(changeBut);
    let readStatus = myLibrary[i].check ? "Yes" : "No";
    changeBut.innerText = readStatus;

    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    // Add delete button to every row and render again
    let delBut = document.createElement("button");
    delBut.id = i + 5;
    deleteCell.appendChild(delBut);
    delBut.className = "btn btn-warning";
    delBut.innerHTML = "Delete";
    delBut.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
  }
}
