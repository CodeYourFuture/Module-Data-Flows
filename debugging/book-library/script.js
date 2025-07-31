const myLibrary = [];

window.addEventListener("load", function () {                                                     // 'e' parameter is not used
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    const book1 = new Book("Robinson Crusoe", "Daniel Defoe", "252", true);
    const book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", "127", true);
    myLibrary.push(book1);
    myLibrary.push(book2);
    //render();                                                                                   // Already called in 'load' event
  }
}

document.getElementById("book-form").addEventListener("submit", function (e) {                    // Add event listener to stop page reload on form submit
  e.preventDefault();
  submitForm();
});

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submitForm() {                                                                           // Rename function to avoid confusion with global 'submit' function
  const title = document.getElementById("title");                                                 // Move form elements previously declared outside of function / in global scope
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const check = document.getElementById("check");
  const titleValue = title.value.trim();
  const authorValue = author.value.trim();
  const minLength = 3;

if (
  titleValue.length < minLength ||
  authorValue.length < minLength ||
  !/^(?=(?:.*[A-Za-z]){3,})[A-Za-z ]+$/.test(titleValue) ||                                       // Validate input for minimum length and character type
  !/^(?=(?:.*[A-Za-z]){3,})[A-Za-z ]+$/.test(authorValue)
) {
  alert(`Title and Author must each be at least ${minLength} characters long and contain only letters.`); 
  return;
}

  if (
    title.value == null ||                                                                        // Clear form fields after successful submission
    title.value == "" ||
    author.value == null ||                                                                       
    author.value == "" ||
    pages.value == null ||
    pages.value == ""
  ) {
    alert("Please fill all fields!");
    return false;
  } else {
    const book = new Book(title.value, author.value, pages.value, check.checked);                 // Correct 'author' key
    myLibrary.push(book);                                                                         // Correct array name
    render();

    title.value = "";
    author.value = "";
    pages.value = "";
    check.checked = false;
  }
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  const table = document.getElementById("display");
  const rowsNumber = table.rows.length;
  //delete old table
  for (let n = rowsNumber - 1; n > 0; n--) {                                                      // Add missing closing bracket
    table.deleteRow(n);
  }
  //insert updated row and cells
  const length = myLibrary.length;                                                                // Change to 'const' for variables
  for (let i = 0; i < length; i++) {
    const row = table.insertRow(1);
    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const wasReadCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);
    titleCell.innerHTML = myLibrary[i].title;
    authorCell.innerHTML = myLibrary[i].author;
    pagesCell.innerHTML = myLibrary[i].pages;

    //add and wait for action for read/unread button
    const changeBut = document.createElement("button");
    changeBut.id = i;
    changeBut.className = "btn btn-success";
    wasReadCell.appendChild(changeBut);
    let readStatus = "";
    readStatus = myLibrary[i].check ? "Yes" : "No";                                               // Correct read status logic for not read
    changeBut.innerText = readStatus;
    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again
    const delButton = document.createElement("button");
    delButton.className = "btn btn-warning";                                                      // Correct delButton variable name
    delButton.innerHTML = "Delete";
    delButton.setAttribute("data-index", i);                                                      // Add data attribute to identify the book index
    deleteCell.appendChild(delButton);

    delButton.addEventListener("click", function () {                                             // Click not clicks
      const index = parseInt(this.getAttribute("data-index"), 10);                                // Get index from button's data attribute and convert from string to number (base 10)
      if (confirm(`You're about to delete "${myLibrary[index].title}". Continue?`)) {             // Require user confirmation before deletion
        myLibrary.splice(index, 1);
        render();
      }
    });
  }
}