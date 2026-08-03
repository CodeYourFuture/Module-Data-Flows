const myLibrary = [];
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const checkInput = document.getElementById("check");

function populateStorage() {
  if (myLibrary.length === 0) {
    myLibrary.push(new Book("Robison Crusoe", "Daniel Defoe", 252, true));
    myLibrary.push(
      new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true)
    );
  }
}

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  const titleVal = titleInput.value.trim();
  const authorVal = authorInput.value.trim();
  const pagesVal = Number(pagesInput.value);

  if (!titleVal || pagesVal <= 0 || !Number.isInteger(pagesVal)) {
    alert("Please fill all fields with valid values!");
    return;
  }

  const book = new Book(titleVal, authorVal, pagesVal, checkInput.checked);
  myLibrary.push(book);
  render();

  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  checkInput.checked = false;
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  const tbody = document.getElementById("displayBody");
  tbody.innerHTML = "";

  //insert updated row and cells
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const row = tbody.insertRow();

    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const wasReadCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);
    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;

    //add and wait for action for read/unread button
    const markReadButton = document.createElement("button");
    markReadButton.className = "btn btn-success";
    markReadButton.textContent = book.check ? "Yes" : "No";
    markReadButton.addEventListener("click", function () {
      book.check = !book.check;
      render();
    });

    wasReadCell.appendChild(markReadButton);

    //add delete button to every row and render again
    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-warning";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      const deletedTitle = book.title;
      myLibrary.splice(i, 1);
      render();
      showMessage(`You've deleted title: ${deletedTitle}`);
    });
    deleteCell.appendChild(deleteButton);
  }
}

function showMessage(text) {
  const msgDiv = document.createElement("div");
  msgDiv.className = "alert alert-info";
  msgDiv.textContent = text;
  document.body.insertBefore(msgDiv, document.getElementById("display"));
  setTimeout(() => msgDiv.remove(), 3000);
}

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

document.getElementById("submitBtn").addEventListener("click", submit);
