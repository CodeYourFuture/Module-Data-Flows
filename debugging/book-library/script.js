const myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    const book1 = new Book("Robinson Crusoe", "Daniel Defoe", "252", true);
    const book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", "127", true);

    myLibrary.push(book1);
    myLibrary.push(book2);
    //render();                                                                                   // already called in 'load' event
  }
}

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {

  const title = document.getElementById("title");                                                 // move form elements previously declared outside of function / in global scope
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const check = document.getElementById("check");

  if (
    title.value == null || 
    title.value == "" ||
    author.value == null ||                                                                       // reset all form field after submission
    author.value == "" ||
    pages.value == null ||
    pages.value == ""
  ) {
    alert("Please fill all fields!");
    return false;
  } else {
    const book = new Book(title.value, author.value, pages.value, check.checked);                 // correct 'author' key
    myLibrary.push(book);                                                                         // correct array name
    render();
    title.value = "";
    author.value = "";
    pages.value = "";
    check.checked = false;
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
  const rowsNumber = table.rows.length;
  //delete old table
  for (let n = rowsNumber - 1; n > 0; n--) {                                                      // add missing closing bracket
    table.deleteRow(n);
  }
  //insert updated row and cells
  const length = myLibrary.length;                                                                // change to 'const' for variables
  for (let i = 0; i < length; i++) {
    const row = table.insertRow(1);
    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const wasReadCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);
    titleCell.innerHTML = myLibrary[i].title;
    authorCell.innerHTML = myLibrary[i].author;
    pagesCell.innerHTML = myLibrary[i].pages;

    //add and wait for action for read/unread button
    const changeBut = document.createElement("button");
    changeBut.id = i;
    changeBut.className = "btn btn-success";
    wasReadCell.appendChild(changeBut);
    let readStatus = "";

    readStatus = myLibrary[i].check ? "Yes" : "No";                                                // correct read status logic for not read
    
    changeBut.innerText = readStatus;

    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again
    const delButton = document.createElement("button");
    delButton.id = i + 5;
    deleteCell.appendChild(delButton);                                                             // correct delButton variable name
    delButton.className = "btn btn-warning";
    delButton.innerHTML = "Delete";
    delButton.addEventListener("click", function () {                                              // click not clicks 
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
  }
}
