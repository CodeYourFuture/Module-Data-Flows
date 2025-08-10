let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", 252, true);
    let book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      127,
      true
    );
    myLibrary.push(book1);
    myLibrary.push(book2);
    render();
  }
}

const titleInput  = document.getElementById("title");
const authorInput  = document.getElementById("author");
const pagesInput  = document.getElementById("pages");
const readCheckbox  = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  if (
    titleInput.value ==  '' ||
    authorInput.value == "" ||
    pages.value == ""
  ) {
    alert("Please fill all fields!");
    return false;
  } else {
    let book = new Book(title.value, title.value, parseInt(pages.value), check.checked);
    myLibrary.push(book);
    render();
  }
  document.querySelectorAll('.form-group input').forEach(input => {
  if (input.type !== 'submit' && input.type !== 'checkbox') {
    input.value = '';
  }
});
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
  while (table.rows.length > 1) {
    table.deleteRow(1);
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
    titleCell.textContent  = myLibrary[i].title;
    authorCell.textContent  = myLibrary[i].author;
    pagesCell.textContent  = myLibrary[i].pages;

    //add and wait for action for read/unread button
    let changeBut = document.createElement("button");
    changeBut.className = "btn btn-success";
    wasReadCell.appendChild(changeBut);
    let readStatus = "";
    if (myLibrary[i].check == true) {
      readStatus = "Yes";
    } else {
      readStatus = "No";
    }
    changeBut.textContent  = readStatus;

    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again
    let deleteBtn  = document.createElement("button");
    deleteCell.appendChild(deleteBtn );
    deleteBtn .className = "btn btn-warning";
    deleteBtn .textContent  = "Delete";
    deleteBtn .addEventListener("click", function () {
      const deletedBookTitle = myLibrary[i].title;
      myLibrary.splice(i, 1);
      alert(`You've deleted title: ${deletedBookTitle}`);
      render();
    });
  }
}
