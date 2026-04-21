let myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
  render(); // only called once now
});

function populateStorage() {
  if (myLibrary.length === 0) {
    const book1 = new Book("Robison Crusoe", "Daniel Defoe", 252, true);
    const book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      127,
      true
    );

    myLibrary.push(book1, book2);

    // removed extra render() here
  }
}

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readCheckbox = document.getElementById("check");

function submit() {
  if (title.value == "" || author.value == "" || pages.value == "") {
    alert("Please fill all fields!");
    return false;

    let book = new Book(title.value, author.value, pages.value, check.checked);
    myLibrary.push(book);
    render();
  }

  const book = new Book(title, author, pages, readCheckbox.checked);

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
  for (let n = rowsNumber - 1; n > 0; n--) {
    table.deleteRow(n);
  }

    //add and wait for action for read/unread button
    let changeBut = document.createElement("button");
    changeBut.id = i;
    changeBut.className = "btn btn-success";
    wasReadCell.appendChild(changeBut);
    let readStatus = "";
    if (myLibrary[i].check == true) {
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
    let delButton = document.createElement("button");
    delButton.id = i + 5;
    deleteCell.appendChild(delButton);
    delButton.className = "btn btn-warning";
    delButton.innerHTML = "Delete";
    delButton.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
  }
}
