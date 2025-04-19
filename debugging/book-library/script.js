let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", "252", true);
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

function submit() {
  // Trimming white spaces in values and validating user input
  if (
    title.value.trim() === "" ||
    author.value.trim() === "" ||
    pages.value.trim() === ""
  ) {
    alert("Please fill all fields!");
    return false;
  }
  //Adding validation to check pages is a positive whole number
  const pagesValue = Number(pages.value);
  if (!Number.isInteger(pagesValue) || pagesValue <= 0) {
    alert("Please enter a valid number for pages.");
    return false;
  }

  // GPT: Create and add new Book
  let book = new Book(
    title.value.trim(),
    author.value.trim(),
    pagesValue,
    check.checked
  );
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
  let rowsNumber = table.rows.length;
  //delete old table
  //adding missing closing parenthesis
  for (let n = rowsNumber - 1; n > 0; n--) {
    table.deleteRow(n);
  }
  //insert updated row and cells
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    //appending the row to the end of the table
    let row = table.insertRow(-1);
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
    changeBut.id = i;
    changeBut.className = "btn btn-success";
   

    //setting the button text based on read status (fixing logic by assigning correct boolean value)
    let readStatus = "";
    if (myLibrary[i].check == true) {
      readStatus = "Yes";
    } else {
      readStatus = "No";
    }
    changeBut.innerText = readStatus;
    wasReadCell.appendChild(changeBut);

    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    // fixed: using one consistent button variable
let delButton = document.createElement("button");
delButton.id = `delete-${i}`; // optional: clearer ID
delButton.className = "btn btn-warning";
delButton.innerHTML = "Delete";
deleteCell.appendChild(delButton);

// using correct button variable name
delButton.addEventListener("click", function () {
  alert(`You've deleted title: ${myLibrary[i].title}`);
  myLibrary.splice(i, 1);
  render();
});
  }
}
