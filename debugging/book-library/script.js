class Book {
  constructor(title, author, pages, check) {
    this.title = title.trim();
    this.author = author.trim();
    this.pages = Number(pages);
    this.check = check;
  }
}

let myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    const book1 = new Book("Robinson Crusoe", "Daniel Defoe", 252, true);
    const book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      127,
      true
    );
    myLibrary.push(book1);
    myLibrary.push(book2);
  }
}

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readCheckbox = document.getElementById("check");

function submit() {
  const titleValue = titleInput.value.trim();
  const authorValue = authorInput.value.trim();
  const pagesValue = Number(pagesInput.value);

  if (
    titleValue === "" ||
    authorValue === "" ||
    !Number.isInteger(pagesValue) ||
    pagesValue <= 0
  ) {
    alert("Please fill all fields and enter a whole page count greater than 0.");
    return false;
  }

  const book = new Book(
    titleValue,
    authorValue,
    pagesValue,
    readCheckbox.checked
  );

  myLibrary.push(book);
  render();

  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readCheckbox.checked = false;
}

function render() {
  const table = document.getElementById("display");
  const rowsNumber = table.rows.length;

  for (let n = rowsNumber - 1; n > 0; n--) {
    table.deleteRow(n);
  }

  for (let i = 0; i < myLibrary.length; i++) {
    const row = table.insertRow(1);
    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const wasReadCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);

    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    const toggleReadButton = document.createElement("button");
    toggleReadButton.className = "btn btn-success";
    toggleReadButton.textContent = myLibrary[i].check ? "Yes" : "No";
    wasReadCell.appendChild(toggleReadButton);

    toggleReadButton.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-warning";
    deleteButton.textContent = "Delete";
    deleteButton.dataset.index = i;
    deleteCell.appendChild(deleteButton);

    deleteButton.addEventListener("click", function (e) {
      const index = Number(e.target.dataset.index);
      const deletedTitle = myLibrary[index].title;

      myLibrary.splice(index, 1);
      render();
      alert(`You've deleted title: ${deletedTitle}`);
    });
  }
}