let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", 252, true);
    let book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true);
    myLibrary.push(book1, book2);
    render();
  }
}

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const checkInput = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  const pagesNumber = Number(pagesInput.value.trim())
  if (
    titleInput.value.trim() === "" ||
    authorInput.value.trim() === "" ||
    pagesInput.value.trim() === "" || !Number.isInteger(pagesNumber) || pagesNumber <= 0
  ) {
    alert("Please fill all fields correctly!");
    return false;
  } else {
    let book = new Book(titleInput.value.trim(), authorInput.value.trim(), Number(pagesInput.value.trim()), checkInput.checked);
    myLibrary.push(book);
//clear input after submitting
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    checkInput.checked = false;

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

//clear all table in one go except header
  table.tBodies[0].innerHTML = ""

  for (let i = 0; i < myLibrary.length; i++) {
    let row =  table.tBodies[0].insertRow();
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);

    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    //add and wait for action for read/unread button
    let changeButton = document.createElement("button");
    changeButton.className = "btn btn-success";
    wasReadCell.appendChild(changeButton);
    let readStatus = "";
    if (myLibrary[i].check == false) {
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
  let deleteButton = document.createElement("button");
  deleteCell.appendChild(deleteButton);
  deleteButton.className = "btn btn-warning";
  deleteButton.innerHTML = "Delete";

  deleteButton.addEventListener("click", function () {
  if(confirm(`Are you sure you want to delete title: ${myLibrary[i].title}?`)){
  const deletedTitle = myLibrary[i].title;
  myLibrary.splice(i, 1);
  render();
  showToast(`You've deleted title: ${deletedTitle}`);
  }
 });

  }
}

//pop up notification at the bottom of the screen for deletion.
function showToast(message) {
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.classList.add('toast-message');
  document.body.appendChild(toast);
  setTimeout(() => document.body.removeChild(toast), 3000);
}

