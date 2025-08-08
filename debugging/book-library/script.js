let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", "252", true);
    let book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      "127",
      true
    );
    myLibrary.push(book1);
    myLibrary.push(book2);
  }
}

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const checkBox = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  if (
    /^\d+$/.test(titleInput.value) ||
    /^\d+$/.test(authorInput.value)
  ) {
    alert("Title and author cannot be only numbers!");
    return false;
  }
  if (
    titleInput.value.trim() === "" ||
    authorInput.value.trim() === ""
  ) {
    alert("Title and author cannot be empty or only spaces!");
    return false;
  }
  const pageCount = Number(pagesInput.value);
  if (isNaN(pageCount) || pageCount <= 0) {
    alert("Please enter a valid positive number for pages!");
    return false;
  } else {
    let book = new Book(titleInput.value.trim(), authorInput.value.trim(), pagesInput.value, checkBox.checked);
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
  let table = document.getElementById("display");
  let rowsNumber = table.rows.length;
  //delete old table
  for (let n = rowsNumber - 1; n > 0; n--) {
    table.deleteRow(n);
  }
  //insert updated row and cells
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = table.insertRow(1);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);
    titleCell.innerHTML = myLibrary[i].title;
    authorCell.innerHTML = myLibrary[i].author;
    pagesCell.innerHTML = myLibrary[i].pages;

    //add and wait for action for read/unread button
    let changeButton = document.createElement("button");
    changeButton.id = i;
    changeButton.className = "btn btn-success";
    wasReadCell.appendChild(changeButton);
    let readStatus = "";
    if (myLibrary[i].check == false) {
      readStatus = "No";
    } else {
      readStatus = "Yes";
    }
    changeButton.innerText = readStatus;

    changeButton.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again
    let deleteButton = document.createElement("button");
    deleteButton.id = i + 5;
    deleteCell.appendChild(deleteButton);
    deleteButton.className = "btn btn-warning";
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", function () {
      const deletedTitle = myLibrary[i].title;
      myLibrary.splice(i, 1);
      render();
      setTimeout(() => {
        alert(`You've deleted title: ${deletedTitle}`);
      }, 0);
    });
  }
}
