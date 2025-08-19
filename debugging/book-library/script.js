// array
let myLibrary = [];
// form elements
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const checkInput = document.getElementById("check");
// populate the library with some default books if it's empty
function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", 252, true);
    let book2 = new Book("The Old Man and the Sea","Ernest Hemingway", 127, true);
    myLibrary.push(book1);
    myLibrary.push(book2);
    }
}
//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  if (
    titleInput.value.trim == "" || // cant be null so removed all that
    authorInput.value.trim == "" ||
    pagesInput.value.trim == ""
  ) {
    alert("Please fill all fields!");
    return false;
  } else {
    let newBook = new Book(titleInput.value, authorInput.value, parseInt(pagesInput.value), checkInput.checked);
    myLibrary.push(newBook);
    //clear form after adding newBook
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    checkInput.value = false;
    render();
  }
}
// book constructor
function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}
// renders lib data into HTML
function render() {
  let tableBody = document.querySelector("#display tbody");
  tableBody.innerHTML = ''; // get rid of all instead of one by one row deletion
  
  myLibrary.forEach((book, index) => {
    let row = tableBody.insertRow();
    // post debate lets use textContent instead of innerHTML
    row.insertCell(0).textContent = book.title;
    row.insertCell(1).textContent = book.author;
    row.insertCell(2).textContent = book.pages;
    // 'read' status
    const wasReadCell = row.insertCell(3);
    const readStatusBtn = document.createElement("button");
    readStatusBtn.className = "btn btn-success";
    readStatusBtn.textContent = book.check ? "Yes" : "No";
    wasReadCell.appendChild(readStatusBtn);

    readStatusBtn.addEventListener("click", function () {
      book.check = !book.check;
      render();
    });

    const deleteCell = row.insertCell(4);
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-warning";
    deleteBtn.innerHTML = "Delete";
    deleteCell.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", function () {
      const deletedTitle = myLibrary[index].title;
      myLibrary.splice(index, 1);
      render();
      alert(`You've deleted title: ${deletedTitle}`);
    });
  });
}
// moved to end to make sure all is defined before load  
window.addEventListener("load", function () {
  populateStorage();
  render();
});
