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
    let book3 = new Book("Pride and Prejudice","Jane Austen",147, false);
    let book4 = new Book("Rich dad Poor dad"," Robert Kiyosaki", 336, true);
    myLibrary.push(book1);
    myLibrary.push(book2);
    myLibrary.push(book3);
    myLibrary.push(book4)
  }
  render()
}

const inputTitle = document.getElementById("title");
const inputAuthor = document.getElementById("author");
const inputPages = document.getElementById("pages");
const check = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  // the .value is a string.
  //  we do not need to check if the .value is null as input element will always return a string even empty one.
  let pagesToNumber = Number(inputPages.value)
  if (
    inputTitle.value.trim() === "" ||
    inputAuthor.value.trim() === "" ||
    isNaN(pagesToNumber) ||
    pagesToNumber<= 0
  ) {
    alert("Please fill all fields!");
    return false;
  } else {
    let book = new Book(inputTitle.value,inputAuthor.value, pagesToNumber, check.checked);
    myLibrary.push(book);
    render();
    inputTitle.value ="";
    inputAuthor.value = "";
    inputPages.value = "";
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
  let tableBody = document.getElementById("display").getElementsByTagName("tbody")[0];
  tableBody.innerHTML = ''
  
  let length = myLibrary.length;

  for (let i = 0; i < length; i++) {
    let row = tableBody.insertRow(0);
    let titleCell = row.insertCell(0);
    titleCell.textContent = myLibrary[i].title;
    let authorCell = row.insertCell(1);
    authorCell.textContent = myLibrary[i].author;
    let pagesCell = row.insertCell(2);
    pagesCell.textContent = myLibrary[i].pages;
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);
    //change from innerHTML to textContent to ensures that user input is treated as plain text and not as executable HTML, preventing XSS attacks

    //add and wait for action for read/unread button
    let changeReadStatusBtn= document.createElement("button");
    changeReadStatusBtn.className = "btn btn-success";
    wasReadCell.appendChild(changeReadStatusBtn);
    let readStatus = "";
    if (myLibrary[i].check == true) {
      readStatus = "Yes";
    } else {
      readStatus = "No";
    }
    changeReadStatusBtn.textContent = readStatus;

    changeReadStatusBtn.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again
    let deleteBtn = document.createElement("button");
    deleteCell.appendChild(deleteBtn);
    deleteBtn .className = "btn btn-warning";
    deleteBtn .textContent = "Delete";
    deleteBtn .addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
  }
}

//Questions : 
//Should title and author be allowed to contain only space characters leading or trailing space characters?
//Yes, title and author fields can contain leading or trailing space characters, but these should be trimmed before the data is stored or displayed.

//What type of value should we use to store the page count?
// the input field, which is a string, should be converted to a number using a function like Number() or parseInt()

//What kinds of input values should be rejected?
//1. Empty or whitespace-only strings for the title and author.
//2. Non-numeric values for the page count.
//3. Zero or negative numbers for the page count.
//4. harmful characters or scripts. 
