let myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
  render();
  document.getElementById("submitBtn").addEventListener("click", submit);
});

function populateStorage() {
  if (myLibrary.length === 0) {
    myLibrary.push(new Book("Robinson Crusoe", "Daniel Defoe", 252, true));
    myLibrary.push(new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true));
  }
}

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readCheckBox = document.getElementById("check");

function submit() {
  const titleVal = titleInput.value.trim();
  const authorVal = authorInput.value.trim();
  const pagesVal = pagesInput.value.trim();

  if (!titleVal || !authorVal || !pagesVal) {
    alert("Please fill all fields!");
    return false;
  }

  if (isNaN(Number(pagesVal)) || Number(pagesVal) <= 0) {
    alert("Please enter a valid number of pages!");
    return false;
  }

  const book = new Book(titleVal, authorVal, Number(pagesVal), readCheckBox.checked);
  myLibrary.push(book);

  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readCheckBox.checked = false;

  render();
  return true;
}

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = Boolean(hasRead);
}

function render() {
  const tbody = document.querySelector("#display tbody");
  tbody.innerHTML = "";

  myLibrary.forEach((book, i) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td></td>
      <td></td>
    `;

    const readButton = document.createElement("button");
    readButton.className = "btn btn-success";
    readButton.textContent = book.hasRead ? "Yes" : "No";
    readButton.addEventListener("click", () => {
      book.hasRead = !book.hasRead;
      render();
    });

    row.children[3].appendChild(readButton);

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-warning";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      alert(`You deleted: ${book.title}`);
      myLibrary.splice(i, 1);
      render();
    });

    row.children[4].appendChild(deleteButton);

    tbody.appendChild(row);
  });
}
