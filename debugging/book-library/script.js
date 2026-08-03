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
    render();
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

function submit() {
  // Validate all required fields (title, author, and pages)
  if (!title.value.trim() || !author.value.trim() || !pages.value.trim()) {
    alert("Please fill all fields!");
    return false;
  } else {
    // Corrected to pass author.value and push to myLibrary
    let book = new Book(title.value, author.value, pages.value, check.checked);
    myLibrary.push(book);

    // Clear input fields after submission
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

  // Fixed missing parenthesis in loop
  for (let n = rowsNumber - 1; n > 0; n--) {
    table.deleteRow(n);
  }

  // Insert updated rows and cells
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = table.insertRow(-1); // Appends at the end of the table
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);

    titleCell.innerHTML = myLibrary[i].title;
    authorCell.innerHTML = myLibrary[i].author;
    pagesCell.innerHTML = myLibrary[i].pages;

    // Toggle Read status button
    let changeBut = document.createElement("button");
    changeBut.className = myLibrary[i].check
      ? "btn btn-success"
      : "btn btn-secondary";

    // Corrected read status logic
    let readStatus = myLibrary[i].check ? "Yes" : "No";
    changeBut.innerText = readStatus;

    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    wasReadCell.appendChild(changeBut);

    // Fixed variable names (delBut -> delButton) and event listener ("clicks" -> "click")
    let delButton = document.createElement("button");
    delButton.className = "btn btn-danger";
    delButton.innerHTML = "Delete";

    delButton.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });

    deleteCell.appendChild(delButton);
  }
}
