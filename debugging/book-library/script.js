

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

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  const cleanTitle = title.value.trim();
  const cleanAuthor = author.value.trim();

  if (!/^[1-9]\d*$/.test(pages.value.trim())) {    // plain positive whole numbers like 1, 25, 300 — no letters, no decimal points, no scientific notation 
    alert("Pages must be a positive whole number without letters or symbols.");
    return false;
  }

  const cleanPages = parseInt(pages.value.trim(), 10);

  if (!cleanTitle|| !cleanAuthor) {  // title and author doesn't allowed to contain only space characters
    alert("Title and Author cannot be empty or spaces only."); 
    return false;
    
  } if (isNaN(cleanPages) || cleanPages <= 0) {   // the value of type of pages must be a integer 
    alert("Pages must be a positive whole number.");
    return false;
  } 
    let book = new Book(cleanTitle, cleanAuthor, pages.value, check.checked);  //// title and author be allowed to contain leading or trailing space characters, we storage using parseInt
    myLibrary.push(book);
    render(); 
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  let table = document.getElementById("display");
  //delete old table
  // Keep only the header row
  table.innerHTML = table.rows[0].outerHTML;

  //insert updated row and cells
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = table.insertRow(1);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);
    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    //add and wait for action for read/unread button
    let toggleReadButton = document.createElement("button");
    toggleReadButton.className = "btn btn-success";
    wasReadCell.appendChild(toggleReadButton);
    let readStatus = "";

    readStatus = myLibrary[i].check ? "Yes" : "No";

    toggleReadButton.innerText = readStatus;

    toggleReadButton.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });
    

    //add delete button to every row and render again
    let deleteBookButton = document.createElement("button");
    deleteCell.appendChild(deleteBookButton);
    deleteBookButton.className = "btn btn-warning";
    deleteBookButton.innerHTML = "Delete";
    deleteBookButton.addEventListener("click", function () {
      const deleteTitle = myLibrary[i].title; //store first 
      myLibrary.splice(i, 1);                 // delete it 
      alert(`You have deleted title: ${deleteTitle}`);
      render();
    });
  }
}
