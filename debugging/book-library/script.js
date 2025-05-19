let myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
  render();
  document.getElementById("submitBook").addEventListener("click", submit);
});

function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", "252", true);
    let book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", "127", true);
    myLibrary.push(book1);
    myLibrary.push(book2);
  }
}

const titleInputEl = document.getElementById("title");
const authorInputEl = document.getElementById("author");
const pagesInputEl = document.getElementById("pages");
const checkInputEl = document.getElementById("check");

function submit() {
  if (
    titleInputEl.value.trim() === "" ||
    authorInputEl.value.trim() === "" ||
    pagesInputEl.value.trim() === ""
  ) {
    alert("Please fill all fields!");
    return false;
  } else {
    let book = new Book(titleInputEl.value, authorInputEl.value, pagesInputEl.value, checkInputEl.checked);
    myLibrary.push(book);
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
  const table = document.getElementById("display");
  const oldTbody = table.querySelector("tbody");

  if (oldTbody) {
    table.removeChild(oldTbody);
  }

  const newTbody = document.createElement("tbody");

  for (let i = 0; i < myLibrary.length; i++) {
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = myLibrary[i].title;

    const authorCell = document.createElement("td");
    authorCell.textContent = myLibrary[i].author;

    const pagesCell = document.createElement("td");
    pagesCell.textContent = myLibrary[i].pages;

    const wasReadCell = document.createElement("td");
    const changeBut = document.createElement("button");
    changeBut.className = "btn btn-success";
    changeBut.innerText = myLibrary[i].check ? "Yes" : "No";
    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });
    wasReadCell.appendChild(changeBut);

    const deleteCell = document.createElement("td");
    const delBut = document.createElement("button");
    delBut.className = "btn btn-warning";
    delBut.innerText = "Delete";
    delBut.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
    deleteCell.appendChild(delBut);

    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(pagesCell);
    row.appendChild(wasReadCell);
    row.appendChild(deleteCell);

    newTbody.appendChild(row);
  }

  table.appendChild(newTbody);
}

