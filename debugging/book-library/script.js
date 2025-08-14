let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length == 0) {
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

const formElTitle = document.getElementById("title");
const formElAuthor = document.getElementById("author");
const formElPages = document.getElementById("pages");
const formElCheck = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  // Store pre-processed/sanitized/normalized input into variables
  const title = formElTitle.value.trim();
  const author = formElAuthor.value.trim();
  const pages = parseInt(formElPages.value, 10); // ensure number
  const isRead = formElCheck.checked;

  if (title == "" || author == "" || isNaN(pages)) {
    alert("Please fill all fields!");
    return false;
  }

  // Check added to make sure the page number is positive and within a reasonable range
  // According to Wikipedia, largest book by page count is 100100 pages
  if (pages <= 0 || pages > 100000) {
    alert("Please enter a valid page count (1–100000).");
    return;
  }

  const book = new Book(title, author, pages, isRead);
  myLibrary.push(book);

  // Clear form fields
  formElTitle.value = "";
  formElAuthor.value = "";
  formElPages.value = "";
  formElCheck.checked = false;

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
  let rowsNumber = table.rows.length;
  //delete old table
  for (let n = rowsNumber - 1; n > 0; n--) {
    table.deleteRow(n);
  }
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
    let changeButton = document.createElement("button");
    changeButton.className = "btn btn-success";
    wasReadCell.appendChild(changeButton);
    let readStatus = "";
    myLibrary[i].check ? (readStatus = "Yes") : (readStatus = "No");
    changeButton.innerText = readStatus;

    changeButton.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again
    let delButton = document.createElement("button");
    deleteCell.appendChild(delButton);
    delButton.className = "btn btn-warning";
    delButton.textContent = "Delete";
    delButton.addEventListener("click", function () {
      const deletedBook = myLibrary[i].title;
      myLibrary.splice(i, 1);
      render();
      alert(`You've deleted title: ${deletedBook}`);
    });
  }
}
