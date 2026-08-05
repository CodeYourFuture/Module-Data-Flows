let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", "252", true);
    let book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      "127",
      true
    );
    myLibrary.push(book1);
    myLibrary.push(book2);
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

// Rename 'submit' to 'addBook' to avoid naming collisions
function addBook(e) {
  if (e) e.preventDefault(); // Stops page from reloading on submit

  if (!title.value || !author.value || !pages.value) {
    alert("Please fill all fields!");
    return false;
  } else {
    let book = new Book(title.value, author.value, pages.value, check.checked);
    myLibrary.push(book);

    // Clear text boxes after adding
    title.value = "";
    author.value = "";
    pages.value = "";
    check.checked = false;

    render();
  }
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

  // Clear old rows except header
  for (let n = rowsNumber - 1; n > 0; n--) {
    table.deleteRow(n);
  }

  // Insert updated rows in correct chronological order
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = table.insertRow(-1); // Fix: Append to end instead of index 1
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);

    titleCell.innerText = myLibrary[i].title;
    authorCell.innerText = myLibrary[i].author;
    pagesCell.innerText = myLibrary[i].pages;

    // Read status toggle button
    let changeBut = document.createElement("button");
    changeBut.className = myLibrary[i].check
      ? "btn btn-success"
      : "btn btn-secondary";
    changeBut.innerText = myLibrary[i].check ? "Yes" : "No";
    wasReadCell.appendChild(changeBut);

    const index = i; // Store current index scope
    changeBut.addEventListener("click", function () {
      myLibrary[index].check = !myLibrary[index].check;
      render();
    });

    // Delete button
    let delBut = document.createElement("button");
    deleteCell.appendChild(delBut);
    delBut.className = "btn btn-warning";
    delBut.innerText = "Delete";
    delBut.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[index].title}`);
      myLibrary.splice(index, 1);
      render();
    });
  }
}
