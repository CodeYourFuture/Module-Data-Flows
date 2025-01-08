let myLibrary = [];

// Event listener to populate data and render books on page load
window.addEventListener("load", function () {
  populateStorage();
  render();
});

// Function to populate initial storage (from localStorage or default)
function populateStorage() {
  if (localStorage.getItem("myLibrary") === null) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", "252", true);
    let book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", "127", true);
    myLibrary.push(book1, book2);
    render();
  } else {
    myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
    render();
  }
}

// Function to save the current library to localStorage
function saveToLocalStorage() {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

// Get form elements
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

// Submit button event listener
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent form submission (page reload)
  submit();
});

// Function to submit the form and add the new book
function submit() {
  // Ensure all fields are filled and pages is a positive number
  if (title.value === "" || author.value === "" || pages.value === "") {
    alert("Please fill all fields!");
    return false;
  }

  if (parseInt(pages.value) <= 0) {
    alert("Please enter a valid number of pages.");
    return false;
  }

  // Create a new Book object
  let book = new Book(title.value, author.value, pages.value, check.checked);
  myLibrary.push(book);
  saveToLocalStorage(); // Save to localStorage

  // Reset the form fields after the book is added
  const form = document.querySelector("form");
  form.reset();

  render();  // Re-render the table
}

// Book class definition
class Book {
  constructor(title, author, pages, check) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.check = check;
  }
}

// Render function to display the books in the table
function render() {
  let table = document.getElementById("display");
  let tableBody = table.getElementsByTagName("tbody")[0];
  tableBody.innerHTML = ''; // Clear all existing rows

  for (let i = 0; i < myLibrary.length; i++) {
    let row = tableBody.insertRow();

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);

    cell1.innerHTML = myLibrary[i].title;
    cell2.innerHTML = myLibrary[i].author;
    cell3.innerHTML = myLibrary[i].pages;

    // Create the "Read" button with conditional styling
    let changeBut = document.createElement("button");
    changeBut.className = "btn";

    // Set the text and style for the button based on the read status
    let readingStatus = myLibrary[i].check ? "Yes" : "No";
    changeBut.innerHTML = readingStatus;
    
    // Apply conditional styling: green for "Read" and red for "Unread"
    if (myLibrary[i].check) {
      changeBut.classList.add("btn-success");  // Green button for "Read"
    } else {
      changeBut.classList.add("btn-danger");   // Red button for "Unread"
    }

    cell4.appendChild(changeBut);

    // Toggle the read status when the button is clicked
    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      saveToLocalStorage();  // Save to localStorage
      render();
    });

    // Create the "Delete" button with a confirmation prompt
    let delButton = document.createElement("button");
    delButton.className = "btn btn-warning";
    delButton.innerHTML = "Delete";
    cell5.appendChild(delButton);

    // Confirm deletion before removing the book
    delButton.addEventListener("click", function () {
      if (confirm(`Are you sure you want to delete the title: ${myLibrary[i].title}?`)) {
        myLibrary.splice(i, 1);
        saveToLocalStorage();  // Save to localStorage
        render();
      }
    });
  }
}
