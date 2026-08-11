const titleInput = document.getElementById("title"); //rename all variable names
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const checkInput = document.getElementById("check");
const bookForm = document.getElementById("bookForm");
const library = document.getElementById("library"); //newly created id for cleaning all existing row 
const message = document.getElementById("message"); //get element for warning message

const myLibrary = []; //use const to avoid reassignment

/*window.addEventListener("load", function () {
  //delete e as it is never used
  populateStorage();
  render();
}); */

function setup() { // setup () function prepares everything that should happen once 
  // when the page loads and before user starts doing anything
  bookForm.addEventListener("submit", function (event) { //after user submits the book form 
  // this will run submit () function to add book
    event.preventDefault();
    submit();
  });

  populateStorage();
}

setup();

function populateStorage() {
  if (myLibrary.length == 0) {
    const book1 = new Book("Robinson Crusoe", "Daniel Defoe", 252, true); //correct book name
    const book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      127,
      true
    );
    myLibrary.push(book1);
    myLibrary.push(book2);
    render();
  }
}


//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  const title = titleInput.value.trim(); //use .trim() to remove extra spaces
  const author = authorInput.value.trim();
  const pages = Number(pagesInput.value);
  if (
    title === "" ||
     
    author === "" || //need input validation for author value, added this
    
    pagesInput.value === ""
  ) {
    alert("Please fill all fields!");
    return false;
  }
    if (pages < 1) {
    alert("Pages must be at least 1!");
    return false;
  }
  
    const book = new Book(title, author, pages, checkInput.checked); //added author.value by
    // replacing 2nd title.value to author.value
    myLibrary.push(book); //corrected name for original array library > myLibrary
    render();
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
 // delete all old row at once
  
 library.innerHTML = ""; //clean all old rows

  //insert updated row and cells
  const length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    const row = library.insertRow();
    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const wasReadCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);
    titleCell.textContent = myLibrary[i].title; // replaced all innerHTML by textContent
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    //add and wait for action for read/unread button
    const changeButton = document.createElement("button"); //correct changeBut > changeButton
    changeButton.className = "btn btn-success";
    wasReadCell.appendChild(changeButton);
    const readStatus = myLibrary[i].check ? "Yes" : "No";
    changeButton.textContent = readStatus;
    changeButton.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

     

    //add delete button to every row and render again
    let deleteButton = document.createElement("button");
    deleteCell.appendChild(deleteButton);
    deleteButton.className = "btn btn-warning";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      // correct clicks > click
      const deletedTitle = myLibrary[i].title; // store the title which book will delete

       const confirmed = confirm( //use confirm () to handle popup message for ok/cancel
      `Are you sure you want to delete "${deletedTitle}"?`
       );

   if (confirmed) { //if confirm then user click ok and book will delete
    myLibrary.splice(i, 1);
    render(); //updates page 

    message.textContent = `Book "${deletedTitle}" was deleted.`; //after clicking ok, th book delete
    // and the message shows immediately
  }
  });
  }
  
}
