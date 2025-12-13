let myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
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

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

function submit() {
  // Step 1: store preprocessed raw input in variables
  const titleVal = title.value.trim();
  const authorVal = author.value.trim();
  const pagesVal = pages.value.trim();
  const readVal = check.checked;

  // Step 2: validate values
  if (!titleVal || !authorVal || !pagesVal) {
    alert("Please fill all fields!");
    return;
  }

  // Pages validation (must be integer >= 1)
  const pagesNum = Number(pagesVal);
  if (!Number.isInteger(pagesNum) || pagesNum < 1) {
    alert("Pages must be an integer greater than or equal to 1!");
    return;
  }

  // Step 3: create Book using validated variables
  const book = new Book(titleVal, authorVal, pagesNum, readVal);

  myLibrary.push(book);

  // Clear inputs
  title.value = "";
  author.value = "";
  pages.value = "";
  check.checked = false;

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

  // Delete old rows (keep header)
  for (let n = rowsNumber - 1; n > 0; n--) {
    table.deleteRow(n);
  }

  // Insert updated rows
  for (let i = 0; i < myLibrary.length; i++) {
    let row = table.insertRow(1);

    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);

    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    // Read / unread button
    let changeBut = document.createElement("button");
    changeBut.id = "read-btn-" + i;
    changeBut.className = "btn btn-success";
    changeBut.textContent = myLibrary[i].check ? "Yes" : "No";

    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    wasReadCell.appendChild(changeBut);

    // Delete button
    let delBut = document.createElement("button");
    delBut.id = "del-btn-" + i;
    delBut.className = "btn btn-warning";
    delBut.textContent = "Delete";

    delBut.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });

    deleteCell.appendChild(delBut);
  }
}


// Book Library script updated. 