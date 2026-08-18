let myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    const book1 = new Book(
      "Robinson Crusoe",
      "Daniel Defoe",
      "252",
      true
    );

    const book2 = new Book(
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

function submit() {
  if (
    title.value.trim() === "" ||
    author.value.trim() === "" ||
    pages.value.trim() === ""
  ) {
    alert("Please fill all fields!");
    return false;
  }

  const book = new Book(
    title.value.trim(),
    author.value.trim(),
    pages.value,
    check.checked
  );

  myLibrary.push(book);

  render();

  // Clear the form after adding a book
  title.value = "";
  author.value = "";
  pages.value = "";
  check.checked = false;

  return true;
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  const table = document.getElementById("display");
  const rowsNumber = table.rows.length;

  // Remove old book rows but keep the heading row
  for (let n = rowsNumber - 1; n > 0; n--) {
    table.deleteRow(n);
  }

  for (let i = 0; i < myLibrary.length; i++) {
    const row = table.insertRow(-1);

    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const wasReadCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);

    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    // Read / unread button
    const changeButton = document.createElement("button");

    changeButton.className = "btn btn-success";

    changeButton.textContent = myLibrary[i].check
      ? "Yes"
      : "No";

    changeButton.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    wasReadCell.appendChild(changeButton);

    // Delete button
    const deleteButton = document.createElement("button");

    deleteButton.className = "btn btn-warning";
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
      alert(
        `You've deleted title: ${myLibrary[i].title}`
      );

      myLibrary.splice(i, 1);
      render();
    });

    deleteCell.appendChild(deleteButton);
  }
}