let myLibrary = [];

// Function to ensure the DOM is ready

window.addEventListener("load", function () {
  populateStorage();
  render();
});

// Function to prepopulate the library with sample data

function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", 252, true);
    let book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true);
    myLibrary.push(book1, book2);
    render();
  }
}

// Accessing the DOM elements by creating variables

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function

function submit() {
  if (!title.value ||
     !author.value || 
     !pages.value) {
    alert("Please fill all fields!");
    return;
  }

  let book = new Book(
    title.value,
    author.value,
    parseInt(pages.value), // The parseInt method ensure pages is a number
    check.checked
  );
  myLibrary.push(book);
  render();

  // Clear the input fields
  title.value = "";
  author.value = "";
  pages.value = "";
  check.checked = false;
}

// Book constructor function
function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

// THe Function to Render the library to the table
function render() {
  let table = document.getElementById("display");
  let rowsNumber = table.rows.length;

  // Delete old rows (keep header intact)
  for (let n = rowsNumber - 1; n > 0; n--) {
    table.deleteRow(n);
  }


  // Add updated rows
  for (let i = 0; i < myLibrary.length; i++) {
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);

    cell1.textContent = myLibrary[i].title;
    cell2.textContent = myLibrary[i].author;
    cell3.textContent = myLibrary[i].pages;

    // Toggle read status button
    let changeBut = document.createElement("button");
    changeBut.className = "btn btn-success";
    changeBut.textContent = myLibrary[i].check ? "Yes" : "No";
    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });
    cell4.appendChild(changeBut);

    // Implementation of the Delete book button
    let delButton = document.createElement("button");
    delButton.className = "btn btn-warning";
    delButton.textContent = "Delete";
    delButton.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
    cell5.appendChild(delButton);
  }
}
