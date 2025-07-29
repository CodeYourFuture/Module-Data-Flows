let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  console.log(myLibrary)
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
    
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

// Event listener for form submission
document.getElementById("submit-btn").addEventListener("click", function (event) {
  event.preventDefault();
  submit();
});
//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  if (
    title.value.trim() === "" ||
    author.value.trim() === "" ||  //adding a check for author input field as well. using trim() to ensure proper input is entered.
    pages.value.trim() === ""
  ) {
    alert("Please fill all fields!");
    return false;
  } else {
    let book = new Book(title.value, author.value, pages.value, check.checked);
    myLibrary.push(book);
    render();
    //reset the form after submission
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
  let table = document.getElementById("display");
  let rowsNumber = table.rows.length;

  // Delete old rows except the header
  for (let n = rowsNumber - 1; n > 0; n--) {
    table.deleteRow(n);
  }

  // Use forEach for safe indexing and event handling
  myLibrary.forEach((book, index) => {
    let row = table.insertRow(1);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);

    titleCell.innerHTML = book.title;
    authorCell.innerHTML = book.author;
    pagesCell.innerHTML = book.pages;

    // Read toggle button
    let changeButton = document.createElement("button");
    changeButton.className = "btn btn-success";
    changeButton.innerText = book.check ? "Yes" : "No";
    wasReadCell.appendChild(changeButton);

    changeButton.addEventListener("click", () => {
      myLibrary[index].check = !myLibrary[index].check;
      render();
    });

    // Delete button
    let delButton = document.createElement("button");
    delButton.className = "btn btn-warning";
    delButton.innerHTML = "Delete";
    deleteCell.appendChild(delButton);

    delButton.addEventListener("click", () => {
      alert(`You've deleted title: ${book.title}`);
      myLibrary.splice(index, 1);
      render();
    });
  });
}
