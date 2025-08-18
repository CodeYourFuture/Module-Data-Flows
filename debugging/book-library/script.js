let myLibrary = [];

window.addEventListener("load", function () {
  // console.log("Page loaded, initializing library");
  populateStorage();
  render();
});

// Attach form submit event listener
document.getElementById("book-form").addEventListener("submit", function (event) {
  // console.log("Form submit event triggered");
  event.preventDefault(); // Prevent default form submission
  submit();
});

function populateStorage() {
  const storedLibrary = localStorage.getItem("myLibrary");
  if (storedLibrary) {
    // console.log("Loading myLibrary from localStorage:", storedLibrary);
    myLibrary = JSON.parse(storedLibrary);
  } else {
    // console.log("No data in localStorage, initializing with default books");
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", 252, true);
    let book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true);
    myLibrary.push(book1, book2);
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  }
  render();
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

function submit() {
  // console.log("submit() function called");
  // console.log("Input values:", {
  //   title: title.value,
  //   author: author.value,
  //   pages: pages.value,
  //   read: check.checked
  // });

  // if (!title.value.trim() || !author.value.trim() || !pages.value || isNaN(parseInt(pages.value))) {
  //   console.log("Validation failed: One or more fields are empty or invalid");
  //   alert("Please fill all fields with valid data!");
  //   return;
  // }

  let book = new Book(title.value.trim(), author.value.trim(), parseInt(pages.value), check.checked);
  // console.log("New book created:", book);
  myLibrary.push(book);
  // console.log("myLibrary after push:", myLibrary);
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  render();
  document.querySelector("form").reset();
  // console.log("Form reset");
  $("#demo").collapse("hide");
  // console.log("Form collapsed");
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  // console.log("render() called, myLibrary:", myLibrary);
  let table = document.getElementById("display");
  let rowsNumber = table.rows.length;
  for (let n = rowsNumber - 1; n > 0; n--) {
    table.deleteRow(n);
  }
  for (let i = 0; i < myLibrary.length; i++) {
    let row = table.insertRow(-1);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);
    titleCell.innerHTML = myLibrary[i].title;
    authorCell.innerHTML = myLibrary[i].author;
    pagesCell.innerHTML = myLibrary[i].pages;

    let changeBut = document.createElement("button");
    changeBut.id = `read-${i}`;
    changeBut.className = "btn btn-success";
    changeBut.innerText = myLibrary[i].check ? "Yes" : "No";
    wasReadCell.appendChild(changeBut);
    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
      render();
    });

    let delButton = document.createElement("button");
    delButton.id = `delete-${i}`;
    delButton.className = "btn btn-warning";
    delButton.innerHTML = "Delete";
    deleteCell.appendChild(delButton);
    delButton.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
      render();
    });
  }
}