let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", 252, true);
    let book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true);
    myLibrary.push(book1);
    myLibrary.push(book2);
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  if (
    title.value.trim() === "" ||
    author.value.trim() === "" ||
    pages.value === ""
  ) {
    alert("Please fill all fields!");
    return false;
  } 
  if (isNaN(parseInt(pages.value)) || parseInt(pages.value) <= 0) {
    alert("Please enter a valid positive number for pages!");
    return false;
  }  
    let book = new Book(title.value.trim(), author.value.trim(), parseInt(pages.value), check.checked);
    myLibrary.push(book);
}

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  submit();
  render();
  title.value = "";
  author.value = "";
  pages.value = "";
  check.checked = false;
});

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
  let tbody = table.querySelector('tbody')
  tbody.innerHTML = "";
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
    changeBut.dataset.index = i;
    changeBut.className = "btn btn-success";
    wasReadCell.appendChild(changeBut);
    let readStatus = myLibrary[i].check ? "Yes" : "No";
    changeBut.innerText = readStatus;

    changeBut.addEventListener("click", function () {
      const index = parseInt(this.dataset.index);
      myLibrary[index].check = !myLibrary[index].check;
      render();
    });

    //add delete button to every row and render again
    let delBut = document.createElement("button");
    delBut.dataset.index = i;
    deleteCell.appendChild(delBut);
    delBut.className = "btn btn-warning";
    delBut.innerHTML = "Delete";
    delBut.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      const index = parseInt(this.dataset.index);
      myLibrary.splice(index, 1);
      render();
    });
  }
}
