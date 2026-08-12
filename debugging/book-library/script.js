let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  //render(); delete the duplicate render since populateStorage is called
});

function populateStorage() {
  if (myLibrary.length === 0) {
    // strict Equality
    let book1 = new libraryBook("Robinson Crusoe", "Daniel Defoe", "252", true); // name fixed
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
    let newBook = new libraryBook(
      titleInput.value,
      authorInput.value, // i think it was meant to author and title was duplicated
      pagesInput.value,
      readCheckbox.checked
    );
    myLibrary.push(newBook);
    render();
  }
}
// fixing naming issue
function libraryBook(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function render() {
  let table = document.getElementById("display");
  let totalRows = table.rows.length;
  //delete old table
  for (let n = totalRows - 1; n > 0; n--) {
    table.deleteRow(n);
  }
  //insert updated row and cells
  let libraryLength = myLibrary.length;
  for (let i = 0; i < libraryLength; i++) {
    let row = table.insertRow(-1);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let readStatusCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);

    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    //add and wait for action for read/unread button
    // fixing naming issue
    let toggleReadBtn = document.createElement("button");
    toggleReadBtn.id = `readBtn-${i}`; // to avoid confusion.
    toggleReadBtn.className = "btn btn-success";

    readStatusCell.appendChild(toggleReadBtn);

    let readStatus = myLibrary[i].isRead ? "Yes" : "No";
    toggleReadBtn.textContent = readStatus;

    toggleReadBtn.addEventListener("click", function () {
      myLibrary[i].isRead = !myLibrary[i].isRead;
      render();
    });

    //add delete button to every row and render again
    let deleteBtn = document.createElement("button");
    deleteBtn.id = `delBtn${i}`; //to avoid confusion

    deleteBtn.className = "btn btn-warning";
    deleteBtn.textContent = "Delete";
    deleteCell.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
  }
}
