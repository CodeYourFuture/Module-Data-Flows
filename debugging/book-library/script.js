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

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const check = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const pages = Number(pagesInput.value);

  if (!title || !author || !pagesInput.value || !Number.isInteger(pages) || pages <= 0) {
    alert("Please fill all fields correctly. Pages must be a positive integer.");
    return;
  } 
    let book = new Book(title, author, pages, check.checked);
    myLibrary.push(book);    
    render();
  

}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  let table = document.getElementById("display");
  const oldTbody = table.querySelector("tbody");
  const newTbody = document.createElement("tbody");
  table.replaceChild(newTbody, oldTbody);

  myLibrary.forEach((book, index) => {
    const row = newTbody.insertRow();

    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const readCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;

    //add and wait for action for read/unread button
    const changeBtn = document.createElement("button");
    changeBtn.className = "btn btn-success";
    readCell.appendChild(changeBtn);
    let readStatus = "";
    if (book.check == false) {
      readStatus = "No";
    } else {
      readStatus = "Yes";
    }
    changeBtn.innerText = readStatus;

    changeBtn.addEventListener("click", function () {
      book.check = !book.check;
      render();
    });

    //add delete button to every row and render again
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-warning";
    deleteBtn.textContent = "Delete";
    deleteCell.appendChild(deleteBtn);
 
    deleteBtn.addEventListener("click", function () {
      alert(`You've deleted title: ${book.title}`);
      myLibrary.splice(index, 1);
      render();
    });
  });
}
