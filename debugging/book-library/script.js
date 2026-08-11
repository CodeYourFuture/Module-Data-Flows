let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  //render(); delete the duplicate render since populateStorage is called
});

function populateStorage() {
  if (myLibrary.length === 0) {
    // strict Equality
    let book1 = new libraryBook("Robison Crusoe", "Daniel Defoe", "252", true);
    let book2 = new libraryBook(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      "127",
      true
    );
    myLibrary.push(book1);
    myLibrary.push(book2);
    render();
  }
}

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readCheckbox = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  if (
    !titleInput.value.trim() ||
    !authorInput.value.trim() ||
    !pagesInput.value.trim()
  ) {
    alert("Please fill all fields!");
    return false;
  } else {
    let book = new libraryBook(
      title.value,
      author.value, // i think it was meant to author and title was duplicated
      pages.value,
      check.checked
    );
    myLibrary.push(book);
    render();
  }
}
// fixing naming issue
function libraryBook(title, author, pages, check) {
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
    let row = table.insertRow(-1);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);
    titleCell.innerHTML = myLibrary[i].title;
    authorCell.innerHTML = myLibrary[i].author;
    pagesCell.innerHTML = myLibrary[i].pages;

    //add and wait for action for read/unread button
    // fixing naming issue
    let changeBut = document.createElement("button");
    changeBut.id = `readBtn-${i}`; // to avoid confusion.
    changeBut.className = "btn btn-success";
    wasReadCell.appendChild(changeBut);

    let readStatus = myLibrary[i].check ? "Yes" : "No";
    changeBut.innerText = readStatus;

    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again
    let delButton = document.createElement("button");
    delButton.id = `delBtn${i}`; //to avoid confusion
    deleteCell.appendChild(delButton);
    delButton.className = "btn btn-warning";
    delButton.innerHTML = "Delete";

    delButton.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
  }
}
