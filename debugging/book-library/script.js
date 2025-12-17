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

function submit() {
  // correct author validation
  if (
    title.value == null ||
    title.value == "" ||
    author.value == null ||
    author.value == "" ||
    pages.value == null ||
    pages.value == ""
  ) {
    alert("Please fill all fields!");
    return false;
  } else {
    //correct changed second title.value to author.value
    let book = new Book(title.value, author.value, pages.value, check.checked);
    
   
    //correct name is myLibrary
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
  
  //correct closing parenthesis
  for (let n = rowsNumber - 1; n > 0; n--) {
    table.deleteRow(n);
  }
  
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = table.insertRow(1);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);
    titleCell.innerHTML = myLibrary[i].title;
    authorCell.innerHTML = myLibrary[i].author;
    pagesCell.innerHTML = myLibrary[i].pages;

    //READ BUTTON
    let changeBut = document.createElement("button");
    changeBut.id = i;
    
 
    //correct color
    
    wasReadCell.appendChild(changeBut);
    let readStatus = "";
    

    //correct If checked is true readStatus Yes
    if (myLibrary[i].check == true) {   
      readStatus = "Yes";
      //green class
      changeBut.className = "btn btn-success";
    } else {
      readStatus = "No";
      //correctred 
      changeBut.className = "btn btn-danger";
    }
    changeBut.innerText = readStatus;

    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //delete btn
    let delButton = document.createElement("button");
    

    //correct delButton
    delButton.id = i + 5;
  
    //correct
    deleteCell.appendChild(delButton);
     //correct
    delButton.className = "btn btn-warning";
       //correct
    delButton.innerHTML = "Delete";
       //correct delButtonand click 
    delButton.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
  }
}