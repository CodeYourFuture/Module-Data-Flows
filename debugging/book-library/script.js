let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  //render();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", 252, true);
    let book2 = new Book("The Old Man and the Sea","Ernest Hemingway",127,true);
    myLibrary.push(book1);
    myLibrary.push(book2);
    render();
  }
}

const titleEl = document.getElementById("title");
const authorEl = document.getElementById("author");
const pagesEl = document.getElementById("pages");
const checkEl = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  const titleVal = titleEl.value.trim();
  const authorVal = authorEl.value.trim();
  const pagesVal = Number(pagesEl.value);
  if (
    !titleVal ||
    !pagesVal ||
    !authorVal
  ) {
    alert("Please fill all fields!");
    return false;
  } else {
    //fix: change title.value to author.value
    let book = new Book(titleVal, authorVal, pagesVal, checkEl.checked);
    //Fix: change library.push(book) to myLibrary.push(book).
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
  // Fix : add a ) to the end of the for loop condition
  // to avoid syntax error.
  const tbody = table.querySelector("tbody");
  tbody.innerHTML = "";
  //insert updated row and cells
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = table.insertRow(1);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);
    titleCell.innerText = myLibrary[i].title;
    authorCell.innerText = myLibrary[i].author;
    pagesCell.innerText = myLibrary[i].pages;

    //add and wait for action for read/unread button
    let readBtn = document.createElement("button");
    readBtn.id = `readBtn-${i}`;
    readBtn.className = "btn btn-success";
    wasReadCell.appendChild(readBtn);
    let readStatus = "";
    // Fix: change myLibrary[i].check to myLibrary[i].check == true
    // to check if the book is read or not.
    if (myLibrary[i].check == true) {
      readStatus = "Yes";
    } else {
      readStatus = "No";
    }
    readBtn.innerText = readStatus;

    readBtn.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again
    // Fix : 
    // change delBut to delButton because we declare it.
    // The event listener is "clicks" instead of "click".
    let deleteBtn = document.createElement("button");
    deleteBtn.id = `deleteBtn-${i}`;
    deleteCell.appendChild(deleteBtn);
    deleteBtn.className = "btn btn-warning";
    deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
  }
}
