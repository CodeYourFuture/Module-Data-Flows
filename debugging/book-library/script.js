let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();

  // Attach submit listener (prevent default form submission)
  const submitBtn = document.getElementById("submitBtn");
  if (submitBtn) {
    submitBtn.addEventListener("click", function (evt) {
      evt.preventDefault();
      submit();
    });
  }
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
  }
}

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readCheckbox = document.getElementById("check");

// Non-blocking success message (appears briefly and fades out)
function showSuccess(message) {
  const alertEl = document.createElement("div");
  alertEl.className = "alert alert-success";
  alertEl.textContent = message;
  alertEl.style.position = "fixed";
  alertEl.style.top = "1rem";
  alertEl.style.right = "1rem";
  alertEl.style.zIndex = "1050";
  document.body.appendChild(alertEl);

  setTimeout(() => {
    alertEl.style.transition = "opacity 0.3s";
    alertEl.style.opacity = "0";
    setTimeout(() => alertEl.remove(), 300);
  }, 2500);
}

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const pages = Number(pagesInput.value);

  // Validate title and author
  if (title === "" || author === "") {
    alert("Title and author cannot be empty.");
    return;
  }

  // Validate pages
  if (Number.isNaN(pages) || pages <= 0) {
    alert("Pages must be a positive number.");
    return;
  }

  // Create and add book
  let book = new Book(title, author, pages, readCheckbox.checked);
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
  const table = document.getElementById("display");
  const tbody = table.tBodies[0] || table.createTBody();

  // Clear all data rows while preserving the header
  tbody.innerHTML = "";

  const length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    const book = myLibrary[i];
    const row = tbody.insertRow();

    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const wasReadCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;

    // Read/unread toggle button
    const changeBut = document.createElement("button");
    changeBut.className = "btn btn-success";
    changeBut.textContent = book.check ? "Yes" : "No";
    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });
    wasReadCell.appendChild(changeBut);

    // Delete button (confirm before deleting, then show non-blocking success)
    const delBut = document.createElement("button");
    delBut.className = "btn btn-warning";
    delBut.textContent = "Delete";
    delBut.addEventListener("click", function () {
      if (confirm(`Are you sure you want to delete "${book.title}"?`)) {
        myLibrary.splice(i, 1);
        render();
        showSuccess(`Deleted "${book.title}"`);
      }
    });
    deleteCell.appendChild(delBut);
  }
}
