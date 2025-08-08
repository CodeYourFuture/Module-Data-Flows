let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  //render();
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

const titleEl = document.getElementById("title");
const authorEl = document.getElementById("author");
const pagesEl = document.getElementById("pages");
const checkEl = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  const pageNumber = Number(pages.value);
  if (
    titleEl.value.trim() === "" ||
    authorEl.value.trim() === "" ||
    isNaN(pageNumber) ||
    pageNumber <= 0
  ) {
    alert("Please fill all fields correctly!");
    return false;
  } else {
    let book = new Book(titleEl.value.toLowerCase().replace(/\b\w/g, s => s.toUpperCase()), authorEl.value.toLowerCase().replace(/\b\w/g, s => s.toUpperCase()), pageNumber, checkEl.checked);
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
  let tbody = table.getElementsByTagName("tbody")[0];

  // Set the innerHTML of the tbody to an empty string to clear all rows
  if (tbody) {
    tbody.innerHTML = "";
  }
  
  //insert updated row and cells
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = tbody.insertRow();
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);
    titleCell.innerHTML = myLibrary[i].title;
    authorCell.innerHTML = myLibrary[i].author;
    pagesCell.innerHTML = myLibrary[i].pages;

    //add and wait for action for read/unread button
    let changeBut = document.createElement("button");
    changeBut.id = i;
    changeBut.className = "btn btn-success";
    wasReadCell.appendChild(changeBut);

    changeBut.innerText = myLibrary[i].check ? "Yes" : "No";
 
    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again
    let delBut = document.createElement("button");
    deleteCell.appendChild(delBut);
    delBut.className = "btn btn-warning";
    delBut.innerText = "Delete";
    delBut.addEventListener("click", function () {
      const nameBookDeleted = myLibrary[i].title;
      myLibrary.splice(i, 1);
      alert(`You've deleted title: ${nameBookDeleted}`);
      render();
    });
  }
}
