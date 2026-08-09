const myLibrary = [];
const bookForm = document.getElementById("book-form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const checkInput = document.getElementById("check");

window.addEventListener("load", function () {
  populateStorage();
  render();

  if (bookForm) {
    bookForm.addEventListener("submit", function (event) {
      event.preventDefault();
      submit();
    });
  }

  if (titleInput) {
    titleInput.addEventListener("input", function () {
      titleInput.classList.remove("is-invalid");
    });
  }

  if (authorInput) {
    authorInput.addEventListener("input", function () {
      authorInput.classList.remove("is-invalid");
    });
  }

  if (pagesInput) {
    pagesInput.addEventListener("input", function () {
      pagesInput.classList.remove("is-invalid");
    });
  }
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
  }
}

function submit() {
  const titleValue = titleInput.value.trim();
  const authorValue = authorInput.value.trim();
  const pagesValue = pagesInput.value.trim();
  const pagesNumber = Number(pagesValue);

  const isTitleInvalid = !titleValue;
  const isAuthorInvalid = !authorValue;
  const isPagesInvalid =
    !pagesValue ||
    isNaN(pagesNumber) ||
    pagesNumber <= 0 ||
    !Number.isInteger(pagesNumber);

  if (isTitleInvalid) {
    titleInput.classList.add("is-invalid");
  } else {
    titleInput.classList.remove("is-invalid");
  }

  if (isAuthorInvalid) {
    authorInput.classList.add("is-invalid");
  } else {
    authorInput.classList.remove("is-invalid");
  }

  if (isPagesInvalid) {
    pagesInput.classList.add("is-invalid");
  } else {
    pagesInput.classList.remove("is-invalid");
  }

  if (isTitleInvalid || isAuthorInvalid || isPagesInvalid) {
    return false;
  }

  const book = new Book(
    titleValue,
    authorValue,
    pagesNumber,
    checkInput.checked
  );
  myLibrary.push(book);

  // Reset form values
  if (bookForm) {
    bookForm.reset();
  }

  render();
}

// Attach submit function to global window for inline onclick handler compatibility
window.submit = submit;

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  const tableBody = document.querySelector("#display tbody");
  tableBody.innerHTML = "";

  const length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    const row = tableBody.insertRow();
    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const wasReadCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);

    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    // Read status toggle button
    const toggleReadBtn = document.createElement("button");
    toggleReadBtn.className = "btn btn-success";
    toggleReadBtn.textContent = myLibrary[i].check ? "Yes" : "No";

    toggleReadBtn.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });
    wasReadCell.appendChild(toggleReadBtn);

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-warning";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
      const deletedBook = myLibrary.splice(i, 1)[0];
      render();

      // Non-blocking banner / status message update after state change
      showNotification(`You've deleted title: ${deletedBook.title}`);
    });
    deleteCell.appendChild(deleteBtn);
  }
}

function showNotification(message) {
  let noteEl = document.getElementById("notification");
  if (!noteEl) {
    noteEl = document.createElement("div");
    noteEl.id = "notification";
    noteEl.className = "alert alert-info mt-3";
    document.querySelector(".container, body").prepend(noteEl);
  }
  noteEl.textContent = message;
  setTimeout(() => {
    noteEl.remove();
  }, 3000);
}
