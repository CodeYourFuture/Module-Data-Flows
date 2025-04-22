let myLibrary = [];

window.addEventListener("load", () => {
  if (myLibrary.length === 0) {
    myLibrary.push(new Book("Robinson Crusoe", "Daniel Defoe", 252, true));
    myLibrary.push(new Book("The Old Man and the Sea", "Ernest Hemingway", 127, false));
  }
  render();
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

/*function populateStorage() {
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
}*/
function submit() {
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const pages = parseInt(document.getElementById("pages").value);
  const read = document.getElementById("check").checked;

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
if (!title || !author || isNaN(pages) || pages <= 0) {
    alert("Please fill in all fields correctly.");
    return;
  }
  
   myLibrary.push(new Book(title, author, pages, read));
  render();
}

function render() {
  const tBody = document.querySelector(".tBody");
  tBody.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const row = tBody.insertRow();

    row.insertCell().textContent = book.title;
    row.insertCell().textContent = book.author;
    row.insertCell().textContent = book.pages;

    const readCell = row.insertCell();
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = book.read ? "Yes" : "No";
    toggleBtn.addEventListener("click", () => {
      book.read = !book.read;
      render();
    });
     readCell.appendChild(toggleBtn);

     /*
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
    changeBut.id = i;
    changeBut.className = "btn btn-success";
    wasReadCell.appendChild(changeBut);
    let readStatus = "";
    if (myLibrary[i].check == false) {
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
    delBut.id = i + 5;
    deleteCell.appendChild(delBut);
    delBut.className = "btn btn-warning";
    delBut.innerHTML = "Delete";
    delBut.addEventListener("clicks", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
  }
}
*/
const deleteCell = row.insertCell();
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      render();
    });
    deleteCell.appendChild(deleteBtn);
  });
}
