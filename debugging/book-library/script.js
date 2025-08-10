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
    protectMyLibrary();
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");


function submit() {
  if (
    title.value == null ||
    title.value == "" ||
    pages.value == null ||
    pages.value == "" ||
    author.value=="" ||
    author.value==null
  ) {
    alert("Please fill all fields!");
    return false;
  } else {
    let book = new Book(title.value, author.value, pages.value, check.checked);
    myLibrary.push(book);
    protectMyLibrary();
    render();
    
    title.value = "";
    author.value = "";
    pages.value = "";
    check.checked = false;
  }
}

function protectMyLibrary(){
  localStorage.setItem("myLibrary" , JSON.stringify(myLibrary));
}

function loadLibrary() {
  const storedLibrary = localStorage.getItem("myLibrary");
  if (storedLibrary) {
    myLibrary = JSON.parse(storedLibrary);
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

    let changeBut = document.createElement("button");
    changeBut.className = "btn btn-success";
    changeBut.textContent = book.check ? "Yes" : "No";
    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      protectMyLibrary();
      render();
  });
  wasReadCell.appendChild(changeBut);
  let delBut = document.createElement("button");
    delBut.className = "btn btn-warning";
    delBut.innerText = "Delete";
    delBut.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      protectMyLibrary();
      render();
    
    });
    deleteCell.appendChild(delBut);
  });
}

