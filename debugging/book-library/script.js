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

const titleEl = document.getElementById("title");
const authorEl = document.getElementById("author");
const pagesEl = document.getElementById("pages");
const checkEl = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
   console.log("Title:", titleEl.value.trim());
  console.log("Author:", authorEl.value.trim());
  console.log("Pages:", pagesEl.value.trim());

  if (
    !titleEl.value.trim() ||
    !authorEl.value.trim() ||
    !pagesEl.value.trim() 
  ) {
    alert("Please fill all fields!");
    return false;
  } 

 if (!/^\d+$/.test(pagesEl.value.trim())) {
  alert("Please enter a valid number of pages (only digits)!");
  return false;
}

  let book = new Book(
      titleEl.value.trim(), 
      authorEl.value.trim(), 
      parseInt(pagesEl.value.trim(), 10), 
      checkEl.checked
    );
    myLibrary.push(book);
    render();

titleEl.value = "";
authorEl.value = "";
pagesEl.value = "";
checkEl.checked = false;
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  let table = document.getElementById("display");
  let tableBody = table.querySelector("tbody");
  tableBody.innerHTML = "";

  //insert updated row and cells
  
  for (let i = 0; i < myLibrary.length; i++) {
    let row = tableBody.insertRow(-1);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);
    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    //add and wait for action for read/unread button
    let changeBut = document.createElement("button");
    changeBut.className = "btn btn-success";
    wasReadCell.appendChild(changeBut);
    let readStatus = myLibrary[i].check ? "Yes" : "No";
    changeBut.innerText = readStatus;

    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again
    let delBut = document.createElement("button");
    deleteCell.appendChild(delBut);
    delBut.className = "btn btn-warning";
    delBut.textContent  = "Delete";

    delBut.addEventListener("click", function () {
      if (confirm(`Are you sure you want to delete "${myLibrary[i].title}"?`)) {
         myLibrary.splice(i, 1);
         render();
      }
    });
  }
}