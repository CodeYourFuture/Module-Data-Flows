let myLibrary = [];

// When page loads, add starter books and render
window.addEventListener("load", function () {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length === 0) {
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

// Check the form and, if OK, add a new book and re-render
function submit() {
  if (
    !title.value.trim() ||
    !author.value.trim() ||
    !pages.value.trim()
  ) {
    alert("Please fill all fields!");
    return false;
  } else {
    let book = new Book(
      title.value.trim(),
      author.value.trim(),
      pages.value.trim(),
      check.checked
    );
    myLibrary.push(book); // ✅ use myLibrary
    render();

    // Optional: clear form after adding
    title.value = "";
    author.value = "";
    pages.value = "";
    check.checked = false;

    return false;
  }
}

// Book constructor
function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check; // true = read, false = not read
}

function render() {
  let table = document.getElementById("display");
  let rowsNumber = table.rows.length;

  // delete old table rows (keep header at index 0)
  for (let n = rowsNumber - 1; n > 0; n--) {  // ✅ fixed ')'
    table.deleteRow(n);
  }

  // insert updated rows and cells
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

    // Read/unread button
    let changeBut = document.createElement("button");
    changeBut.id = i;
    changeBut.className = "btn btn-success";
    wasReadCell.appendChild(changeBut);

    let readStatus = myLibrary[i].check ? "Yes" : "No"; // ✅ true = Yes
    changeBut.innerText = readStatus;

    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    // Delete button
    let delButton = document.createElement("button");
    delButton.id = i + 5;
    delButton.className = "btn btn-warning";
    delButton.innerHTML = "Delete";
    deleteCell.appendChild(delButton);

    delButton.addEventListener("click", function () { // ✅ 'click' not 'clicks'
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
  }
}
  