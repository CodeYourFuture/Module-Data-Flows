const myLibrary = [];

window.addEventListener("load", function () {                                                 // 'e' parameter is not used
  populateStorage();
  render();
});

function Book(title, author, pages, isRead) {                                                 // Changed 'check' to 'isRead' for more descriptive parameter name
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function populateStorage() {
  if (myLibrary.length == 0) {
    const book1 = new Book("Robinson Crusoe", "Daniel Defoe", 252, true);                     // Changed page numbers to actual numbers, not strings
    const book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true);
    myLibrary.push(book1);
    myLibrary.push(book2);
    //render();                                                                               // Already called in 'load' event
  }
}

document.getElementById("book-form").addEventListener("submit", function (e) {                // Added event listener to stop page reload on form submit
  e.preventDefault();
  submitForm();
});

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submitForm() {                                                                       // Rename function to avoid confusion with global 'submit' function
  const title = document.getElementById("title");                                             // Moved form elements previously declared outside of function / in global scope
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const check = document.getElementById("check");

  const titleValue = title.value.trim();
  const authorValue = author.value.trim();
  const pagesValue = pages.value.trim();
  const minLength = 3;


  if (titleValue.length < minLength || authorValue.length < minLength) {
    alert(`Title and Author must each be at least ${minLength} characters long.`);
    return;
  }

  const allowedCharacters = /^[\w\s&.,:;!()\-']+$/;                                           // Relaxed regex to allow digits and common punctuation

  if (!allowedCharacters.test(titleValue) || !allowedCharacters.test(authorValue)) {
    alert("Title and Author contain invalid characters.");
    return;
  }

  if (titleValue === "" || authorValue === "" || pagesValue === "") {                         // Removed unnecessary null checks: instead, alert if strings are empty
    alert("Please fill in all fields!");
    return;
  }

  if (!/^\d+$/.test(pagesValue)) {
    alert("Page number must be a whole number.");                                             // Added validation to reject values with decimals
    return;
  }

  const newBook = new Book(titleValue, authorValue, parseInt(pagesValue, 10), isRead.checked); // parseInt for page numbers 
  myLibrary.push(newBook);
  render();

  title.value = "";                                                                           // Clear form fields and reset after successful submission
  author.value = "";
  pages.value = "";
  check.checked = false;
}

function render() {
  const table = document.getElementById("display");
  //delete old table
  const tbody = table.querySelector("tbody");                                                 // Clear table efficiently by setting innerHTML to empty string
  tbody.innerHTML = "";

  //insert updated row and cells
  myLibrary.forEach((book, index) => {
    const row = tbody.insertRow();                                                            // tbody to insert rows
    const titleCell = row.insertCell(0);                                                      // Change to 'const' for variables
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const statusCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);

    titleCell.textContent = book.title;                                                       // TextContent not innerHTML to avoid unintended HTML rendering
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;

    //add and wait for action for read/unread button
    const toggleButton = document.createElement("button");                                    // Create read status toggle button
    toggleButton.className = "btn btn-sm btn-success";
    toggleButton.textContent = book.isRead ? "Read" : "Not Read";                             // Ternary operator for improved readability

    toggleButton.setAttribute("data-index", index);                                           // Add data-index attribute for consistency

    toggleButton.addEventListener("click", function () {
      const i = parseInt(this.getAttribute("data-index"), 10);
      myLibrary[i].isRead = !myLibrary[i].isRead;
      render();
    });

    statusCell.appendChild(toggleButton);                                                     // Append the button to the status cell

    //add delete button to every row and render again
    const deleteButton = document.createElement("button");                                    // Improved variable names for readability and consistency
    deleteButton.className = "btn btn-warning";
    deleteButton.innerHTML = "Delete";
    deleteButton.setAttribute("data-index", index);                                           // Use data-index attribute to identify book index
    deleteCell.appendChild(deleteButton);

    deleteButton.addEventListener("click", function () {                                      // 'click' not 'clicks'
      const i = parseInt(this.getAttribute("data-index"), 10);                                // Get index and convert from string to number (base 10)
      if (confirm(`You're about to delete "${myLibrary[i].title}". Continue?`)) {             // Require user confirmation before deletion
        myLibrary.splice(i, 1);
        render();
      }
    });

    deleteCell.appendChild(deleteButton);
  });
}