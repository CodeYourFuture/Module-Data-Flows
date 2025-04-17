let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

function populateStorage() {

  const storedLibrary = localStorage.getItem("myLibrary");

  if (storedLibrary) {
    myLibrary = JSON.parse(storedLibrary);
  } else {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", "252", true);
    let book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      "127",
      true
    );
    myLibrary.push(book1);
    myLibrary.push(book2);
  }
    render();
  }


const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  if (!title.value.trim() || !author.value.trim() ||
    !pages.value.trim()) {
    alert("Please fill all fields!");
    return false;
  } 
  if (isNaN(pages.value) || Number(pages.value) <= 0) {
    alert("Please enter a valid number of pages!");
    return false;
  }

  const isValidText = (text) => /^[a-zA-Z\s]{3,}$/.test(text);

  if (!isValidText(title.value)) {
    alert("Please enter a valid title with at least 3 alphabetic characters!");
    return false;
  }

  if (!isValidText(author.value)) {
    alert("Please enter a valid author name with at least 3 alphabetic characters!");
    return false;
  }

  // Check if the author's name is the same as the book title
  if (title.value.trim().toLowerCase() === author.value.trim().toLowerCase()) {
    alert("The author's name cannot be the same as the book title!");
    return false;
  }

  const isDuplicate = myLibrary.some(
    (book) =>
      book.title.toLowerCase() === title.value.toLowerCase() &&
      book.author.toLowerCase() === author.value.toLowerCase()
  );

  if (isDuplicate) {
    alert("This book already exists in your library!");
    return false;
  }

    const book = new Book(title.value, author.value, pages.value, check.checked);
    myLibrary.push(book);
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    render();
  
  title.value = ""; // to reset the form when the book is added 
  author.value = "";
  pages.value = "";
  check.value = false;
}

class Book {
  constructor(title, author, pages, check) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.check = check;
  }
}

function render() {
  const tableBody = document.querySelector("#display tbody");

  //clear all rows except the header
  tableBody.innerHTML = "";
  
  //insert updated rows
  
  myLibrary.forEach((book, i) => {
    let row = tableBody.insertRow();

    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;

    //add and wait for action for read/unread button
    let changeBut = document.createElement("button");
    changeBut.className = "btn btn-success";
    wasReadCell.appendChild(changeBut);
    
    changeBut.innerText = book.check ? "Yes" : "No";
    changeBut.addEventListener("click", () => {
      book.check = !book.check;
      localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
      render();
    });

    //add delete button to every row and render again
    let delBut = document.createElement("button");
    deleteCell.appendChild(delBut);
    delBut.className = "btn btn-warning";
    delBut.innerHTML = "Delete";
    delBut.addEventListener("click", function () {
      alert(`You've deleted title: ${book.title}`);
      myLibrary.splice(i, 1);
      localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
      render();
    });
  });
}

