const myLibrary = [];

window.addEventListener("load", () => {
  populateStorage();
  render();
});

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function populateStorage() {
  if (myLibrary.length === 0) {
    myLibrary.push(
      new Book("Robinson Crusoe", "Daniel Defoe", 252, true),
      new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true)
    );
  }
}

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const checkInput = document.getElementById("check");

function submit() {
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const pages = Number(pagesInput.value);

  if (title === "" || author === "" || !pages) {
    alert("Please fill all fields!");
    return;
  }

  myLibrary.push(new Book(title, author, pages, checkInput.checked));

  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  checkInput.checked = false;

  render();
}

window.submit = submit;

function render() {
  const tbody = document.querySelector("#display tbody");

  tbody.textContent = "";

  myLibrary.forEach((book, index) => {
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = book.title;

    const authorCell = document.createElement("td");
    authorCell.textContent = book.author;

    const pagesCell = document.createElement("td");
    pagesCell.textContent = book.pages;

    const readCell = document.createElement("td");

    const readButton = document.createElement("button");
    readButton.className = "btn btn-success";
    readButton.textContent = book.check ? "Yes" : "No";

    readButton.addEventListener("click", () => {
      book.check = !book.check;
      render();
    });

    readCell.appendChild(readButton);

    const deleteCell = document.createElement("td");

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-warning";
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => {
      const deletedTitle = book.title;

      myLibrary.splice(index, 1);

      render();

      alert(`You've deleted "${deletedTitle}".`);
    });

    deleteCell.appendChild(deleteButton);

    row.append(titleCell, authorCell, pagesCell, readCell, deleteCell);

    tbody.appendChild(row);
  });
}
