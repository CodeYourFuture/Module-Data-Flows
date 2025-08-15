let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", "252", true);
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
  if (
    !(title.value.trim()) ||
    !(author.value.trim()) ||
    !(pages.value.trim())
  ) {
    alert("Please fill all fields!");
    return false;
  } else {
    let newBook = new Book(title.value, author.value, pages.value, check.checked);
    myLibrary.push(newBook);
    render();
    title.value = "";
    author.value = "";
    pages.value = null;
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
  let table = document.getElementById("display");
  let rowsNumber = table.rows.length;
  //delete old table
  for (let n = rowsNumber - 1; n > 0; n--) {
    table.deleteRow(n);
  }
  //insert updated row and cells
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

    //add and wait for action for read/unread button
    let changeBut = document.createElement("button");
    //changeBut.id = i;
    
    wasReadCell.appendChild(changeBut);
    let readStatus = "";
    if (myLibrary[i].check !== false) {
      readStatus = "Yes";
      changeBut.className = "btn btn-success";
    } else {
      readStatus = "No";
      changeBut.className = "btn btn-danger";
    }
    changeBut.innerText = readStatus;

    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again
    let delButton = document.createElement("button");
    //delButton.id = i + 5;
    deleteCell.appendChild(delButton);
    delButton.className = "btn btn-warning";
    delButton.innerHTML = "Delete";
    delButton.addEventListener("click", function () {
      const confirmDelete = window.confirm("Are you sure you want to delete this book?");
      if (confirmDelete) {
        myLibrary.splice(i, 1);
        render();
        alert(`You've deleted title: ${myLibrary[i].title}`);
      } else {
         console.log("Deletion canceled");
      }});
  }
}
