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

const titleInpEl   = document.getElementById("title");
const authorInpEl  = document.getElementById("author");
const pagesInpEl   = document.getElementById("pages");
const readCheckEl    = document.getElementById("check");


//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  // console.log(typeof titleInpEl.value+"its type");
  const title = titleInpEl.value.trim();
  const author = authorInpEl.value.trim();
  const pages = pagesInpEl.valueAsNumber;
 if (!title || !author || !Number.isFinite(pages)) {
  console.log( title+"its type");
    alert("Please fill all fields!");
    return;
  }
  if (!Number.isInteger(pages) || pages < 1) {
    alert("Please enter a valid number of pages!");
    return;
  }
  else {
    let book = new Book(title, author, pages, readCheckEl.checked);

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
  console.log(rowsNumber);
 



  //delete old rows (not the headers)
 let tbody = table.getElementsByTagName("tbody")[0];
tbody.innerHTML = ""; 
  //insert updated row and cells
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = tbody.insertRow();// new row 
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);
    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    //add and wait for action for read/unread button
    let btnChange = document.createElement("button");
    btnChange.id = i;
    btnChange.className = "btn btn-success";
    wasReadCell.appendChild(btnChange);
    let readStatus = "";
    if (myLibrary[i].check == true) {
      readStatus = "Yes";
    } else {
      readStatus = "No";
    }
    btnChange.textContent = readStatus;

    btnChange.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again
    let btnDelete = document.createElement("button");
    btnDelete.id = `del${i}`;
    deleteCell.appendChild(btnDelete);
    btnDelete.className = "btn btn-warning";
    btnDelete.textContent = "Delete";
    btnDelete.addEventListener("click", function () {

      const deletedTitle = myLibrary[i].title;
            myLibrary.splice(i, 1);
      render();
      alert(`You've deleted title: ${deletedTitle}`);

    });
  }
}
