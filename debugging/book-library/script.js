let myLibrary = [];

window.addEventListener("load", function (e) {
  loadLibrary();
  if(myLibrary.length===0){
    populateStorage();
  }
  render();
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
    saveLibrary();
  }
}

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput= document.getElementById("pages");
const checkInput = document.getElementById("check");
const bookForm = document.getElementById("book-form");



function submit() {

  const title =titleInput.value.trim();
  const author=authorInput.value.trim();
  const pages=Number(pagesInput.value.trim());


  if (title === "" || author === "" || pages === "") {
    alert("Please fill all fields!");
    return false;
  } 

  if (isNaN(pages) || pages <= 0) {
    alert("Please enter a valid positive number for pages.");
    return false;
  }
  let book = new Book(title, author, pages, checkInput.checked);
  myLibrary.push(book);
  saveLibrary();
  render();

  bookForm.reset(); 
}


function saveLibrary(){
  localStorage.setItem("myLibrary" , JSON.stringify(myLibrary));
}

function loadLibrary() {
  const storedLibrary = localStorage.getItem("myLibrary");
  if (storedLibrary) {
    myLibrary = JSON.parse(storedLibrary).map(
      book => new Book(book.title, book.author, book.pages, book.check)
    );
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
  let tBody= table.tBodies[0];

  tBody.innerHTML="";
  
  myLibrary.forEach((book , i) => {
    const row = tBody.insertRow();

    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const wasReadCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;

    let changeButton = document.createElement("button");
    changeButton.className = "btn btn-success";
    changeButton.textContent = book.check ? "Yes" : "No";
    changeButton.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      saveLibrary();
      render();
  });
  wasReadCell.appendChild(changeButton);
  let deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-warning";
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", function () {
    const deletedTitle = myLibrary[i].title;
    myLibrary.splice(i, 1);
    saveLibrary();
    render();
    alert(`You've deleted title: ${deletedTitle}`);
    
    });
    deleteCell.appendChild(deleteButton);
  });
}

