let myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", 252, true);
    let book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true);
    myLibrary.push(book1, book2);
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

// Notification function
function showNotification(message) {
  let notification = document.getElementById("notification");
  notification.textContent = message;
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000); // 3 seconds
}

// Listen for form submission
document.getElementById("bookForm").addEventListener("submit", function(event) {
  event.preventDefault();
  submit();
});

function submit() {
  const titleValue = title.value.trim();
  const authorValue = author.value.trim();
  const pagesValue = pages.value.trim();

  // Additional validation for pages
  const pagesNumber = Number(pagesValue);
  if (!Number.isInteger(pagesNumber) || pagesNumber <= 0) {
    showNotification("Number of pages must be a positive whole number.");
    return;
  }

  let book = new Book(titleValue, authorValue, pagesNumber, check.checked);
  myLibrary.push(book);
  render();

  // Reset form
  title.value = "";
  author.value = "";
  pages.value = "";
  check.checked = false;
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  const table = document.getElementById("display");
  const tbody = table.querySelector("tbody");

  // Clear all existing rows
  tbody.innerHTML = "";

  myLibrary.forEach((book, i) => {
    const row = tbody.insertRow();

    row.insertCell(0).textContent = book.title;
    row.insertCell(1).textContent = book.author;
    row.insertCell(2).textContent = book.pages;

    // Read/unread button
    const wasReadCell = row.insertCell(3);
    const readToggleButton = document.createElement("button");
    readToggleButton.className = "btn btn-success";
    readToggleButton.textContent = book.check ? "Yes" : "No";
    wasReadCell.appendChild(readToggleButton);

    readToggleButton.addEventListener("click", () => {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    // Delete button
    const deleteCell = row.insertCell(4);
    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-warning";
    deleteButton.textContent = "Delete";
    deleteCell.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
      myLibrary.splice(i, 1);  // delete immediately
      render();                 // update the table
      showNotification(`Deleted "${book.title}" successfully.`);
    });
  });
}

// Make header row toggle the form
document.querySelector(".thead-dark tr").addEventListener("click", function () {
  $("#demo").collapse("toggle");
});
