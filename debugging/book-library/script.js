let myLibrary = [];

window.addEventListener("load", function () {
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

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  if (
    title.value.trim() === "" || // Check for empty or whitespace-only title
    author.value.trim() === "" || // Check for empty or whitespace-only author
    pages.value.trim() === "" // Check for empty pages
  ) {
    alert("Please fill all fields!");
    return false;
  } else {
    // Validate the "pages" input (must be a positive integer)
    if (isNaN(pages.value) || pages.value <= 0 || !Number.isInteger(Number(pages.value))) {
      alert("Please enter a valid number of pages (positive integer).");
      return false;
    }

    //pass author value correctly
    let book = new Book(title.value, author.value, pages.value, check.checked);
    //Replace library.push(book) with myLibrary.push(book)
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
  let tbody = table.getElementsByTagName("tbody")[0];  // Get the existing <tbody> element

  // Clear all rows in the tbody (except the header row)
  tbody.innerHTML = "";  // Clears all rows (including the initial empty one)
  
  
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
    let toggleReadButton = document.createElement("button");
    //changeBut.id = i; No need to assign an ID here
    toggleReadButton.className = "btn btn-success";
    wasReadCell.appendChild(toggleReadButton);
    let readStatus = myLibrary[i].check ? "Yes" : "No";
    toggleReadButton.innerText = readStatus;

    toggleReadButton.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again
    let deleteButton = document.createElement("button");
    //delButton.id = i; // Use `i` directly for the delete button's ID
    deleteCell.appendChild(deleteButton);
    deleteButton.className = "btn btn-warning";
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
  }
}
