let myLibrary = [];

window.addEventListener("load", function () {
  loadLibrary();
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
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", "252", true);
    let book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", "127", true);
    myLibrary.push(book1, book2);
    saveLibrary();
  }
}

function saveLibrary() {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function loadLibrary() {
  const stored = localStorage.getItem("myLibrary");
  if (stored) {
    const parsed = JSON.parse(stored);
    myLibrary = parsed.map(book => new Book(book.title, book.author, book.pages, book.check));
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

function submit() {
  if (!title.value || !pages.value) {
    alert("Please fill all fields!");
    return false;
  } else {
    let book = new Book(title.value, author.value, pages.value, check.checked);
    myLibrary.push(book);
    saveLibrary();
    render();
  }
}

function render() {
  let table = document.getElementById("display");
  let rowsNumber = table.rows.length;

  // Clear old rows
  for (let n = rowsNumber - 1; n > 0; n--) {
    table.deleteRow(n);
  }

  for (let i = 0; i < myLibrary.length; i++) {
    let row = table.insertRow(1);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);

    titleCell.innerHTML = myLibrary[i].title;
    authorCell.innerHTML = myLibrary[i].author;
    pagesCell.innerHTML = myLibrary[i].pages;

    let changeBut = document.createElement("button");
    changeBut.id = i;
    changeBut.className = "btn btn-success";
    changeBut.innerText = myLibrary[i].check ? "Yes" : "No";
    wasReadCell.appendChild(changeBut);

    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      saveLibrary();
      render();
    });

    let delBut = document.createElement("button");
    delBut.id = i + 5;
    delBut.className = "btn btn-warning";
    delBut.innerHTML = "Delete";
    deleteCell.appendChild(delBut);

    delBut.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      saveLibrary();
      render();
    });
  }
}
