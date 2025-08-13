let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length == 0) {
  let book1 = new Book("Robinson Crusoe", "Daniel Defoe", 252, true);
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

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");


function submit() {
 
  if (
    !title.value?.trim() ||
    !author.value?.trim() ||
    !pages.value?.trim()
  ) {
    alert("Please fill all fields!");
    return false;
  }

  const pagesNum = Number(pages.value);
  if (!Number.isInteger(pagesNum) || pagesNum < 1) {
    alert("Pages must be a positive whole number.");
    return false;
  }

  // create and add the book
  const book = new Book(
    title.value.trim(),
    author.value.trim(),
    pagesNum,
    check.checked
  );
  myLibrary.push(book);
  render();
  return true;
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
    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = String(myLibrary[i].pages);

    //add and wait for action for read/unread button
    let changeBut = document.createElement("button");
    changeBut.id = i;
    changeBut.className = "btn btn-success";
    wasReadCell.appendChild(changeBut);
    
    changeBut.textContent = myLibrary[i].check ? "Yes" : "No";

    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    const delBut = document.createElement("button");
    delBut.id = String(i + 5);
    delBut.className = "btn btn-warning";
    delBut.textContent = "Delete";
    delBut.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
});
deleteCell.appendChild(delBut);
  }
}

