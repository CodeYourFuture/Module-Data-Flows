let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", "252", true);
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
  // Letters + spaces only (authors)
  const lettersOnly = /^[A-Za-z\s]+$/;

  // Title: letters + numbers + spaces (no special characters)
  const titleAllowed = /^[A-Za-z0-9\s]+$/;

  // Empty field check
  if (
    title.value.trim() === "" ||
    author.value.trim() === "" ||
    pages.value.trim() === ""
  ) {
    alert("Please fill all fields!");
    return false;
  }

  // Title validation
  if (!titleAllowed.test(title.value)) {
    alert("Title must contain only letters, numbers, and spaces!");
    return false;
  }

  // Author validation
  if (!lettersOnly.test(author.value)) {
    alert("Author name must contain only letters!");
    return false;
  }

  // Pages >= 1
  let pagesNum = Number(pages.value);

  if (isNaN(pagesNum) || pagesNum < 1) {
    alert("Pages must be a number greater than or equal to 1!");
    return false;
  }

  // Create and save the book
  let book = new Book(title.value, author.value, pages.value, check.checked);
  myLibrary.push(book);

  // Clear inputs (optional)
  title.value = "";
  author.value = "";
  pages.value = "";
  check.checked = false;

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
  let rowsNumber = table.rows.length;
  // delete old table rows (keep header row 0)
  for (let n = rowsNumber - 1; n > 0; n--) {
    table.deleteRow(n);
  }
  //insert updated row and cells
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = table.insertRow(1);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);
    titleCell.innerHTML = myLibrary[i].title;
    authorCell.innerHTML = myLibrary[i].author;
    pagesCell.innerHTML = myLibrary[i].pages;

    //add and wait for action for read/unread button
    let changeBut = document.createElement("button");
    changeBut.id = "read-btn-" + i;
    changeBut.className = "btn btn-success";
    wasReadCell.appendChild(changeBut);
    let readStatus = "";
    // show "Yes" when check is true (read), otherwise "No"
    if (myLibrary[i].check === true) {
      readStatus = "Yes";
    } else {
      readStatus = "No";
    }
    changeBut.innerText = readStatus;

    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again
    let delBut = document.createElement("button");
    delBut.id = "del-btn-" + i;
    delBut.className = "btn btn-warning";
    delBut.innerHTML = "Delete";
    deleteCell.appendChild(delBut);

    delBut.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
  }
}


// Book Library bugs fixed and Book Library working normal. 