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

function submit() {
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const pages = parseInt(document.getElementById("pages").value);
  const read = document.getElementById("check").checked;

if (!title || !author || isNaN(pages) || pages <= 0) {
    alert("Please fill in all fields correctly.");
    return;
  }
  
   myLibrary.push(new Book(title, author, pages, read));
  render();
}

document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("check").checked = false;


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
