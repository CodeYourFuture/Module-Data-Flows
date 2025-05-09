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
    render();
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  const titleValue =title.value.trim();
  const authorValue = author.value.trim();
  const pagesValue = pages.value.trim();
  if (!titleValue || !authorValue || !pagesValue) {
    alert("Please fill all fields!");
    return false;
  }
  
  const pagesInt = parseInt(pagesValue, 10);
  if (isNaN(pagesInt) || pagesInt <= 0) {
    alert("Please enter a valid number of pages!");
    return false;
    
   
  } 
    let book = new Book(title.value, author.value, pagesInt, check.checked);
    myLibrary.push(book);
    render();
  }

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  let table = document.getElementById("display");
  let tbody =  table.querySelector("tbody");


  //delete old table
  tbody.innerHTML = ""; 
""
   
  //insert updated row and cells
  myLibrary.forEach((book, index) => {
    let row = tbody.insertRow();
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;
    
    //add and wait for action for read/unread button
    let changeReadStatusButton = createButton("btn btn-success", book.check ? "yes" : "No");
    wasReadCell.appendChild(changeReadStatusButton);
    changeReadStatusButton.addEventListener("click", function () {
      book.check = !book.check;
      render();
    });
    

    //add delete button to every row and render again
    let deleteButton = createButton("btn btn-warning", "Delete");
    deleteCell.appendChild(deleteButton);
    deleteButton.addEventListener("click", function () {
        alert(`You've deleted title: ${book.title}`);
        myLibrary.splice(index, 1); // Remove the book from the array
        render(); 
    });
  });
}
function createButton(className, text) {
  let button = document.createElement("button");
  button.className = className;
  button.textContent = text;
  return button;
}


