let myLibrary = [];

window.addEventListener("load", function () {
  populateLibrary();
  render();
  // Hook up the form submission
  document.getElementById("bookForm").addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent page refresh
      submitBook ();
  });
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function populateLibrary() {
  if (myLibrary.length === 0) {
    const book1 = new Book("Robison Crusoe", "Daniel Defoe", "252", true);
    const book2 = new Book("The Old Man and the Sea","Ernest Hemingway",
    "127",true);
    myLibrary.push(book1, book2);
  }
}

function submitBook() {
  const titleInput = document.getElementById("title").value;
  const authorInput = document.getElementById("author").value;
  const pagesInput = document.getElementById("pages").value;
  const readInput = document.getElementById("check").checked;

  if (!titleInput || !authorInput || !pagesInput) {
    alert("Please fill all fields!");
    return;
  }

  const newBook = new Book(titleInput, authorInput, parseInt(pagesInput), readInput);
  myLibrary.push(newBook);
  render();
  // Optionally reset the form
  document.getElementById("bookForm").reset();
}

function render() {
  const table = document.getElementById("display");
  const oldTbody = table.querySelector("tbody");
  if (oldTbody) {
    table.removeChild(oldTbody);

    const newTbody = document.createElement("tbody");
    myLibrary.forEach((book, index) => {
      const row = document.createElement("tr");
      const titleCell = document.createElement("td");
      const authorCell = document.createElement("td");
      const pagesCell = document.createElement("td");
      const readCell = document.createElement("td");
      const toggleBtn = document.createElement("button");
      toggleBtn.className = "btn btn-success";
      toggleBtn.innerText = book.read ? "Yes" : "No";
      toggleBtn.addEventListener("click", () => {
        book.read = !book.read;
        render();
      });
      readCell.appendChild(toggleBtn);

      const actionCell = document.createElement("td");
      const deleteBtn = document.createElement("button");
      deleteBtn.className = "btn btn-warning";
      deleteBtn.innerText = "Delete";
      deleteBtn.addEventListener("click", () => {
        alert(`Deleted: ${book.title}`);
        myLibrary.splice(index, 1);
        render();
      });
      actionCell.appendChild(deleteBtn);

      row.appendChild(actionCell);
      row.appendChild(titleCell);
      row.appendChild(authorCell);
      row.appendChild(pagesCell);
      row.appendChild(readCell);

      newTbody.appendChild(row);
    });
    table.appendChild(newTbody);
  }