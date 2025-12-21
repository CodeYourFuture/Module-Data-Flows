let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
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

const titleElem = document.getElementById("title");
const authorElem = document.getElementById("author");
const pagesElem = document.getElementById("pages");
const checkBox = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
export function submit() {
  
  if (!Number.isInteger(Number(pagesElem.value))){
    alert("Pages must be an integer !");
    return false;
  }
  else if (
    titleElem.value.trim() == "" ||
    authorElem.value.trim() == "" ||
    pagesElem.value == ""||
    pagesElem.value <= 0 
  ) {
    alert("Please fill all fields!");
    return false;
  } else {
    let book = new Book(titleElem.value.toString().trim(), authorElem.value.trim(), Number(pagesElem.value), checkBox.checked);
    myLibrary.push(book);
    render();
    titleElem.value = "";
    authorElem.value = "";
    pagesElem.value = "";
    checkBox.checked = false;
  }
}

document.querySelector('#submitButton').addEventListener('click', () => {
  submit();
})

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  let table = document.getElementById("display");
  let tableBody = document.querySelector('tbody');
  
  tableBody.innerHTML = "";
  
  //insert updated row and cells
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = tableBody.insertRow(0);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);
    titleCell.innerText = myLibrary[i].title;
    authorCell.innerText = myLibrary[i].author;
    pagesCell.innerText = myLibrary[i].pages;

    //add and wait for action for read/unread button
    let changeButton = document.createElement("button");
    changeButton.id = i;
    changeButton.className = "btn btn-success";
    wasReadCell.appendChild(changeButton);
    let readStatus = "";
    if (myLibrary[i].check === false) {
      readStatus = "No";
    } else {
      readStatus = "Yes";
    }
    changeButton.innerText = readStatus;

    changeButton.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again
    let delButton = document.createElement("button");
    delButton.id = i + 5;
    deleteCell.appendChild(delButton);
    delButton.className = "btn btn-warning";
    delButton.innerText = "Delete";
    delButton.addEventListener("click", function () {
      const deletedTitle = myLibrary[i].title;
      myLibrary.splice(i, 1);
      render();
      setTimeout(() => {
        alert(`You've deleted title: ${deletedTitle}`);
      }, 0)
    });
  }
}
