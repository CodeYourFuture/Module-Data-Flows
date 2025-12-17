let myLibrary = [];

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const isReadInput = document.getElementById("check");

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", submit);

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

//just one thing need to check
function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", 252, true);
    let book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      127,
      true
    );
    myLibrary.push(book1);
    myLibrary.push(book2);
  }
}

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  //if any of the information is missing show an alert
  const titleValue = titleInput.value.trim();
  const authorValue = authorInput.value.trim();
  const pagesValue = Number(pagesInput.value);
  if (!titleValue || !authorValue || !pagesValue || pagesValue < 0) {
    alert("Please fill all fields!");
    return;
  } else {
    let book = new Book(
      titleValue,
      authorValue,
      pagesValue,
      isReadInput.checked
    );
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
  const tableBody = document.getElementById("tbody");
  tableBody.textContent = "";
  //insert updated row and cells
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = tableBody.insertRow(); // why (1) not i+1 insert <tr> with four <td>
    let titleCell = row.insertCell(0); // the table.rows and row.cells are HTMLCollection,not a real array, but they behave like array(indexed,length) . they are DOM collections
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4); // it is like insert for <td> </td>
    titleCell.textContent = myLibrary[i].title; //filling the cells    why innerHTML
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    //add and wait for action for read/unread button
    let changeReadBut = document.createElement("button");
    changeReadBut.className = "btn btn-success";
    wasReadCell.appendChild(changeReadBut);
    let readStatus = "";
    if (myLibrary[i].check === true) {
      readStatus = "Yes";
    } else {
      readStatus = "No";
    }
    changeReadBut.textContent = readStatus;

    changeReadBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again

    let deleteBut = document.createElement("button");
    deleteCell.appendChild(deleteBut);
    deleteBut.className = "btn btn-warning";
    deleteBut.textContent = "Delete";
    deleteBut.addEventListener("click", function () {
      //
      
      myLibrary.splice(i, 1);
      alert(`You've deleted title: ${myLibrary[i].title}`);
      render();
    });
  }
}
