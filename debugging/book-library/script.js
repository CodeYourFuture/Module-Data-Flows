let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
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
    render();
  }
}

const titleInputEl = document.getElementById("title");
const authorInputEl = document.getElementById("author");
const pagesInputEl = document.getElementById("pages");
const checkInputEl = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  const validation = validationDataInput(
    titleInputEl.value,
    authorInputEl.value,
    pagesInputEl.value
  );
  if (!validation.valid) {
    alert(validation.message);
    return false;
  }
  const cleanTitle = santilizationDataInput(titleInputEl.value);
  const cleanAuthor = santilizationDataInput(authorInputEl.value);
  const cleanPages = santilizationDataInput(pagesInputEl.value);

  let book = new Book(
    cleanTitle,
    cleanAuthor,
    Number(cleanPages),
    checkInputEl.checked
  );
  myLibrary.push(book);
  render();

  titleInputEl.value = "";
  authorInputEl.value = "";
  pagesInputEl.value = "";
  checkInputEl.checked = false;
  return true;
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
  //delete old table rows
  let tableTbody = document.querySelector("#display tbody");
  tableTbody.innerHTML = "";
  //insert updated row and cells
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = tableTbody.insertRow(-1);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);
    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    //add and wait for action for read/unread button
    let changeButton = document.createElement("button");

    changeButton.className = "btn btn-success";
    wasReadCell.appendChild(changeButton);
    let readStatus = "";
    if (myLibrary[i].check == false) {
      readStatus = "No";
    } else {
      readStatus = "Yes";
    }
    changeButton.innerText = readStatus;

    changeButton.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again
    let delButton = document.createElement("button");

    deleteCell.appendChild(delButton);
    delButton.className = "btn btn-warning";
    delButton.innerHTML = "Delete";
    delButton.addEventListener("click", function () {
      if (confirm(`Are you sure you want to delete: ${myLibrary[i].title}`)) {
        myLibrary.splice(i, 1);
        render();
        alert("Book deleted successfully.");
      }
    });
  }
}

function validationDataInput(title, author, pages) {
  if (title.trim() === "" || author.trim() === "" || pages.trim() === "") {
    return { valid: false, message: "Please fill all fields!" };
  }
  if (title.trim().length > 100) {
    return {
      valid: false,
      message: "Book Title must be less than 100 character!",
    };
  }
  if (author.trim().length > 50) {
    return {
      valid: false,
      message: "Book Author must be less than 50 character!",
    };
  }
  if (!Number.isInteger(Number(pages)) || Number(pages) <= 0) {
    return { valid: false, message: "Please enter a valid number of pages." };
  }
  return { valid: true };
}

function santilizationDataInput(inputData) {
  return inputData
    .trim()
    .replace(/<[^>]*>?/gm, "")
    .replace(/\s+/g, " ");
}