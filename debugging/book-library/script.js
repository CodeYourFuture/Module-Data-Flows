let myLibrary = [];

// Event listener that runs the function when the window is loaded
// ---> Deleted a parameter e. <---
window.addEventListener("load", function () {
  populateStorage(); // Fills the library with default books if it's empty
  render(); // Renders the books in the library on the page
});

// Function to populate the library with initial books if it's empty
function populateStorage() {
  // ---> Added the closing parenthesis <---
  if (myLibrary.length == 0) { // Check if the library is empty
    // Creating book objects and adding them to the library
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", "252", true);
    let book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      "127",
      true
    );
    myLibrary.push(book1); // Add first book to the library
    myLibrary.push(book2); // Add second book to the library
    render(); // Re-render the updated library
  }
}

// Get form elements by their IDs
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  // Check if any required field is empty
  if (
    title.value == null ||
    title.value == "" ||
    pages.value == null ||
    pages.value == ""
  ) {
    alert("Please fill all fields!"); // Alert if a field is missing
    return false; // Do not add the book if fields are missing
  } else {
    // Create a new book object with values from the form inputs
    // ---> Fixed the second title.value to author.value <---
    let book = new Book(title.value, author.value, pages.value, check.checked);
    // ---> Fixed the library.push(book) to myLibrary.push(book) <---
    myLibrary.push(book); // Add the new book to the library
    render(); // Re-render the library to display the new book
  }
}

// Constructor function to create a new Book object
function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

// Function to render the library on the page
function render() {
  let table = document.getElementById("display"); // Get the table element
  let rowsNumber = table.rows.length; // Get the current number of rows in the table
  // Delete all rows except the header
  for (let n = rowsNumber - 1; n > 0; n--) {
    table.deleteRow(n); // Remove each row
  }
  //insert updated row and cells
  // Loop through the books in the library and add a row for each book
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    // Create a new row for each book
    let row = table.insertRow(1);

    // Create cells for the book's title, author, pages, read status, and delete button
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);

    // Fill the cells with the book data
    titleCell.innerHTML = myLibrary[i].title;
    authorCell.innerHTML = myLibrary[i].author;
    pagesCell.innerHTML = myLibrary[i].pages;

    //add and wait for action for read/unread button
    // Create a button to change the read status of the book
    let changeBut = document.createElement("button");
    changeBut.id = i; // Use the book index as the button's ID
    changeBut.className = "btn btn-success"; // Set the button's class for styling
    wasReadCell.appendChild(changeBut); // Append the button to the 'Read' column
    // Set the read status text  
    let readStatus = "";
    // ---> Changed the false to true <---
    if (myLibrary[i].check == true) {
      readStatus = "Yes";
    } else {
      readStatus = "No";
    }
    changeBut.innerText = readStatus; // Display the read status

    // Add an event listener to toggle the read status when the button is clicked
    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check; // Toggle the read status
      render(); // Re-render the library after updating the read status
    });

    //add delete button to every row and render again
    // ---> Renamed delBut to delButton <---
    let delButton = document.createElement("button");
    delButton.id = i + 5; // Set a unique ID for the delete button
    deleteCell.appendChild(delButton); // Append the delete button to the delete column
    delButton.className = "btn btn-warning"; // Set the button's class for styling
    delButton.innerHTML = "Delete"; // Set the button text

    // Add an event listener to delete the book when the button is clicked
    // ---> Changed the event listener from "clicks" to "click" <---
    delButton.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`); // Show an alert with the deleted book's title
      myLibrary.splice(i, 1); // Remove the book from the library array
      render(); // Re-render the library after the deletion
    });
  }
}

// ---> Summary of Fixes <---
// Ensure populateStorage() and render() are called properly on page load.
// Replace library.push(book) with myLibrary.push(book) when adding a new book.
// Correctly pass author.value for the author's name when creating the book object.
// Fix the event listener for the delete button to use "click" instead of "clicks".
// Fix the logic for the "Read" status to correctly reflect the checkbox state ("Yes" for checked, "No" for unchecked).