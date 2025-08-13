let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();
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
  }
}

const titleElement = document.getElementById("title");
const authorElement = document.getElementById("author");
const pagesElement = document.getElementById("pages");
const checkElement = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  if (!titleElement.value || !authorElement.value || !pagesElement.value) {
    alert("Please fill all fields!");
    return false;
  } else if (!titleElement.value.match(/^(?=.*[a-zA-Z])[a-zA-Z ]+$/)) {
    alert("Please enter a valid book title!");
    return false;
  } else if (!authorElement.value.match(/^(?=.*[a-zA-Z])[a-zA-Z ]+$/)) {
    alert("Please enter a valid author name!");
    return false;
  } else if (!pagesElement.value.match(/^[0-9]+$/)) {
    alert("Please enter a valid number of pages!");
    return false;
  } else {
    let book = new Book(
      titleElement.value,
      authorElement.value,
      pagesElement.value,
      checkElement.checked
    );

    myLibrary.push(book);
    render();
  }
}

function Book(title, author, pages, check) {
  this.title = title.trim(); //remove leading/trailing spaces
  this.author = author.trim();
  this.pages = Number(pages); // Ensure pages is a number
  this.check = check;
}

function render() {
  //Method 1: To clear the table
  //let table = document.getElementById("display");
  //delete all rows except the first one (header)
  //let rowsNumber = table.rows.length;
  //delete old table
  //for (let n = rowsNumber - 1; n > 0; n--) {
  //table.deleteRow(n);
  //}

  //Method 2: To clear the table in one operation
  //replaceChildren() is a modern method to clear all children of an element
  let tableBody = document.querySelector("tbody");
  tableBody.replaceChildren(); // Clear the table body

  //insert updated row and cells
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = tableBody.insertRow(0); // Insert a new row at the beginning of the table body
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);

    //innerHTML was replaced with textContent for cleaner text handling / code semantics.
    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    //add and wait for action for read/unread button
    let readButton = document.createElement("button");

    // readButton.id = i; /
    // No need for an ID here, as we can use the index directly
    readButton.className = "btn btn-success";
    wasReadCell.appendChild(readButton);
    let readStatus = "";
    if (myLibrary[i].check == false) {
      readStatus = "No";
    } else {
      readStatus = "Yes";
    }
    readButton.innerText = readStatus;

    readButton.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again
    let deleteButton = document.createElement("button");

    // No need to set an ID for the delete button, as we can use the index directly
    //deleteButton.id = i + 5;
    deleteCell.appendChild(deleteButton);
    deleteButton.className = "btn btn-warning";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      const deletedTitle = myLibrary[i].title; //save the title of the book to be deleted
      myLibrary.splice(i, 1); // Remove the book from the library array
      render(); // update the table after deletion

      // Use setTimeout to ensure the alert is shown after the render
      // This is useful to ensure the UI is updated before showing the alert
      setTimeout(() => {
        alert(`You've deleted title: ${deletedTitle}`);
      }, 0.5);
    });
  }
}
