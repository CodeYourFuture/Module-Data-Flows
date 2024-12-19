let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage(); // Populate initial books
  render(); // Render the table after loading
});

function populateStorage() {
  // This adds some initial books to the library if it's empty
  if (myLibrary.length === 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", "252", true);
    let book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", "127", true);
    myLibrary.push(book1);
    myLibrary.push(book2);
    render(); // Render the initial books
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

// Add event listener to the Submit button
document.querySelector(".btn-primary").addEventListener("click", function (e) {
  e.preventDefault();  // Prevent form submission
  submit();  // Call the submit function
});

// Check if input is valid and then add the book
function submit() {
  // Validate inputs
  if (
    title.value.trim() === "" ||  // Check for empty title
    author.value.trim() === "" || // Check for empty author
    pages.value.trim() === ""     // Check for empty pages
  ) {
    alert("Please fill all fields!");
    return false;
  } else {
    // Corrected to add author and title properly
    let book = new Book(title.value, author.value, pages.value, check.checked);
    myLibrary.push(book);  // Push to myLibrary, not library
    render();
    resetForm(); // Reset the form after adding the book
  }
}

// Book constructor function
function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = check;  // Renamed 'check' to 'read' for clarity
}

// Render the table with books
function render() {
  let table = document.getElementById("display");
  let rowsNumber = table.rows.length;

  // Delete old rows (except the header)
  for (let n = rowsNumber - 1; n > 0; n--) {
    table.deleteRow(n);
  }

  // Insert updated rows and cells
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = table.insertRow(1); // Insert at index 1 to avoid inserting at the last row
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);

    cell1.innerHTML = myLibrary[i].title;
    cell2.innerHTML = myLibrary[i].author;
    cell3.innerHTML = myLibrary[i].pages;

    // Create button for Read/Unread and toggle status
    let changeBut = document.createElement("button");
    changeBut.id = i;
    changeBut.className = myLibrary[i].read ? "btn btn-success" : "btn btn-danger"; // Corrected class based on read status
    cell4.appendChild(changeBut);

    // Set the button text based on the read status
    changeBut.innerHTML = myLibrary[i].read ? "Read" : "Not Read";

    changeBut.addEventListener("click", function () {
      myLibrary[i].read = !myLibrary[i].read;
      render();  // Re-render after status change
    });

    // Add delete button for each book row
    let delBut = document.createElement("button");
    delBut.id = i + 5;
    delBut.className = "btn btn-warning";
    delBut.innerHTML = "Delete";
    cell5.appendChild(delBut);

    // Delete the book on button click
    delBut.addEventListener("click", function () {
      alert(`You've deleted the book: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1); // Remove book from the library
      render(); // Re-render the table after deletion
    });
  }
}

// Reset the form inputs after submitting a new book
function resetForm() {
  title.value = "";    // Clear title input
  author.value = "";   // Clear author input
  pages.value = "";    // Clear pages input
  check.checked = false; // Reset the checkbox
}

