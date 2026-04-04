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
    const book1 = new Book("Robinson Crusoe", "Daniel Defoe", "252", true);
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
  pages.value === "" ||
  Number(pages.value) <= 0
) {
    alert("Please fill all fields!");
    return false;
  } else {
    const book = new Book(
      title.value,
      author.value,
      pages.value,
      check.checked
    );
    myLibrary.push(book);
    render();

    title.value = "";
    author.value = "";
    pages.value = "";
    check.checked = false;
  }
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

    titleCell.innerHTML = myLibrary[i].title;
    authorCell.innerHTML = myLibrary[i].author;
    pagesCell.innerHTML = myLibrary[i].pages;

    const changeBut = document.createElement("button");
    changeBut.className = "btn btn-success";
    changeBut.innerText = myLibrary[i].check ? "Yes" : "No";
    wasReadCell.appendChild(changeBut);

    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    const delButton = document.createElement("button");
    delButton.id = `delButton_${i}`;
    delButton.className = "btn btn-warning";
    delButton.textContent = "Delete";
    delButton.dataset.index = i;
    deleteCell.appendChild(delButton);

    delButton.addEventListener("click", function (e) {
      const index = e.target.dataset.index;
      alert(`You've deleted title: ${myLibrary[index].title}`);
      myLibrary.splice(index, 1);
      render();
    });
  }
}
