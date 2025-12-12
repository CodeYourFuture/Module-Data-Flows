let myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
  render();
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", submit);
});

function populateStorage() {
  if (myLibrary.length == 0) {
    const book1 = new Book("Robison Crusoe", "Daniel Defoe", "252", true);
    const book2 = new Book("The Old Man and the Sea","Ernest Hemingway","127", true);
    myLibrary.push(book1);
    myLibrary.push(book2);
  }
}

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readCheckBox = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  if (
    titleInput.value == null ||
    titleInput.value == "" ||
    pagesInput.value == null ||
    pagesInput.value == ""
  ) {
    alert("Please fill all fields!");
    return false;
  } 
  if (isNaN(Number(pagesVal)) || Number(pagesVal) <= 0) {
    alert("Please enter a valid number of pages!");
    return false;
  }

  const book = new Book(titleVal, authorVal, pagesValue, readCheckBox.checked);
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
  const table = document.getElementById("display");
  const tbody = table.querySelector("tbody");
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = book.title;
    row.appendChild(titleCell);

    const authorCell = document.createElement("td");
    authorCell.textContent = book.author;
    row.appendChild(authorCell);

    const pagesCell = document.createElement("td");
    pagesCell.textContent = book.pages;
    row.appendChild(pagesCell);

    const wasReadCell = document.createElement("td");
    const changeBut = document.createElement("button");
    changeBut.className = "btn btn-success";
    changeBut.textContent = book.hasRead ? "Yes" : "No";
    changeBut.dataset.index = i;
    changeBut.addEventListener("click", function () {
      const index = Number(this.dataset.index);
      myLibrary[index].hasRead = !myLibrary[index].hasRead;
      render();
    });
    wasReadCell.appendChild(changeBut);
    row.appendChild(wasReadCell);

    //delete button
    const deleteCell = document.createElement("td");
    const delButton = document.createElement("button");
    delButton.className = "btn btn-warning";
    delButton.textContent = "Delete";
    delButton.dataset.index = i;
    delButton.addEventListener("click", function () {
      const index = Number(this.dataset.index);
      alert(`You've deleted title: ${myLibrary[index].title}`);
      myLibrary.splice(index, 1);
      render();
    });
    deleteCell.appendChild(delButton);
    row.appendChild(deleteCell);

    tbody.appendChild(row);
  }
}
