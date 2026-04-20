const myLibrary = [];
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

window.addEventListener("load", function () {
  populateStorage();
  render();
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
  }
}

function addBook() {
  const cleanedTitle = title.value.trim();
  const cleanedAuthor = author.value.trim();
  const cleanedPages = pages.value.trim();

  if (cleanedTitle === "" || cleanedAuthor === "" || cleanedPages === "") {
    alert("Please fill all fields!");
    return;
  }

  let book = new Book(
    cleanedTitle,
    cleanedAuthor,
    Number(cleanedPages),
    check.checked
  );
  myLibrary.push(book);
  render();

  title.value = "";
  author.value = "";
  pages.value = "";
  check.checked = false;
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  let tbody = document.querySelector("#display tbody");
  tbody.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    let row = tbody.insertRow();

    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);

    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    let changeBut = document.createElement("button");
    changeBut.className = myLibrary[i].check
      ? "btn btn-success"
      : "btn btn-secondary";
    changeBut.innerText = myLibrary[i].check ? "Yes" : "No";

    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    wasReadCell.appendChild(changeBut);

    let delButton = document.createElement("button");
    delButton.className = "btn btn-warning";
    delButton.innerHTML = "Delete";

    delButton.addEventListener("click", function () {
      const deletedTitle = myLibrary[i].title;
      myLibrary.splice(i, 1);
      render();
      alert(`You've deleted title: ${deletedTitle}`);
    });

    deleteCell.appendChild(delButton);
  }
}
