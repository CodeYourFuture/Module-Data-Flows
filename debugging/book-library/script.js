class Book {
  constructor(title, author, pages, check) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.check = check;
  }
}

const myLibrary = [];

// DOM Node References
const bookForm = document.getElementById("book-form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const checkInput = document.getElementById("check");
const displayTableBody = document.querySelector("#display tbody");

// -----------------------------------------------------------------------------
// NON-BLOCKING NOTIFICATION SYSTEM (BOOTSTRAP 4 COMPATIBLE)
// -----------------------------------------------------------------------------

function showNotification(message, type = "success") {
  const notificationArea =
    document.getElementById("notification-area") ||
    (() => {
      const el = document.createElement("div");
      el.id = "notification-area";
      el.style.cssText =
        "position: fixed; top: 20px; right: 20px; z-index: 1060; max-width: 350px;";
      document.body.appendChild(el);
      return el;
    })();

  const alertEl = document.createElement("div");
  alertEl.className = `alert alert-${type} alert-dismissible fade show shadow-sm mb-2`;
  alertEl.role = "alert";

  // Bootstrap 4 syntax: data-dismiss instead of data-bs-dismiss
  alertEl.innerHTML = `
    <div>${message}</div>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  `;

  notificationArea.appendChild(alertEl);

  setTimeout(() => {
    alertEl.classList.remove("show");
    setTimeout(() => alertEl.remove(), 200);
  }, 3500);
}

// -----------------------------------------------------------------------------
// LOCAL STORAGE PERSISTENCE
// -----------------------------------------------------------------------------

const STORAGE_KEY = "myLibraryData";

function saveLibraryToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(myLibrary));
}

function loadLibraryFromStorage() {
  const storedData = localStorage.getItem(STORAGE_KEY);

  if (storedData) {
    const parsedData = JSON.parse(storedData);
    myLibrary.length = 0;
    parsedData.forEach((b) =>
      myLibrary.push(new Book(b.title, b.author, b.pages, b.check))
    );
  } else {
    const book1 = new Book("Robinson Crusoe", "Daniel Defoe", 252, true);
    const book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      127,
      true
    );
    myLibrary.push(book1, book2);
    saveLibraryToStorage();
  }
}

// -----------------------------------------------------------------------------
// PREPROCESSING PIPELINE (Normalization & Validation)
// -----------------------------------------------------------------------------

function normalizeString(str) {
  if (typeof str !== "string") return "";
  return str.trim().replace(/\s+/g, " ");
}

function preprocessBookInput(rawTitle, rawAuthor, rawPages, rawCheck) {
  const cleanTitle = normalizeString(rawTitle);
  const cleanAuthor = normalizeString(rawAuthor);
  const cleanPagesNum = Number(rawPages);
  const cleanCheck = Boolean(rawCheck);

  const errors = [];

  if (cleanTitle === "") {
    errors.push("Title cannot be empty or contain only space characters.");
  } else if (cleanTitle.length > 150) {
    errors.push("Title must be 150 characters or less.");
  }

  if (cleanAuthor === "") {
    errors.push("Author cannot be empty or contain only space characters.");
  } else if (cleanAuthor.length > 100) {
    errors.push("Author must be 100 characters or less.");
  }

  if (!Number.isInteger(cleanPagesNum) || cleanPagesNum <= 0) {
    errors.push("Pages must be a whole positive number greater than 0.");
  }

  if (errors.length > 0) {
    showNotification(
      `<strong>Validation Error:</strong><br>${errors.join("<br>")}`,
      "danger"
    );
    return null;
  }

  return {
    title: cleanTitle,
    author: cleanAuthor,
    pages: cleanPagesNum,
    check: cleanCheck,
  };
}

// -----------------------------------------------------------------------------
// EVENT HANDLERS & DYNAMIC RENDERING
// -----------------------------------------------------------------------------

function handleFormSubmit(event) {
  event.preventDefault();

  const processedData = preprocessBookInput(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    checkInput.checked
  );

  if (!processedData) return;

  const book = new Book(
    processedData.title,
    processedData.author,
    processedData.pages,
    processedData.check
  );

  myLibrary.push(book);
  saveLibraryToStorage();
  bookForm.reset();
  render();

  const tempDiv = document.createElement("div");
  tempDiv.textContent = book.title;
  showNotification(`"${tempDiv.innerHTML}" added to your library.`, "success");
}

function render() {
  displayTableBody.innerHTML = "";

  const fragment = document.createDocumentFragment();

  myLibrary.forEach((book, index) => {
    const rowEl = document.createElement("tr");

    // Text cells (Title, Author, Pages)
    ["title", "author", "pages"].forEach((prop) => {
      const cellEl = document.createElement("td");
      cellEl.textContent = book[prop];
      rowEl.appendChild(cellEl);
    });

    // Read status toggle button
    const wasReadCellEl = document.createElement("td");
    const toggleBtn = document.createElement("button");
    toggleBtn.type = "button";
    toggleBtn.className = book.check
      ? "btn btn-success btn-sm"
      : "btn btn-secondary btn-sm";
    toggleBtn.textContent = book.check ? "Yes" : "No";

    toggleBtn.addEventListener("click", () => {
      book.check = !book.check;
      saveLibraryToStorage();
      render();
    });

    wasReadCellEl.appendChild(toggleBtn);
    rowEl.appendChild(wasReadCellEl);

    // Delete button
    const deleteCellEl = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "btn btn-danger btn-sm";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      const deletedTitle = book.title;
      myLibrary.splice(index, 1);
      saveLibraryToStorage();
      render();

      const tempDiv = document.createElement("div");
      tempDiv.textContent = deletedTitle;
      showNotification(`"${tempDiv.innerHTML}" deleted successfully.`, "info");
    });

    deleteCellEl.appendChild(deleteBtn);
    rowEl.appendChild(deleteCellEl);

    fragment.appendChild(rowEl);
  });

  displayTableBody.appendChild(fragment);
}

document.addEventListener("DOMContentLoaded", () => {
  loadLibraryFromStorage();
  render();

  // Guard check placed directly within the listener assignment
  if (bookForm) {
    bookForm.addEventListener("submit", (event) => {
      handleFormSubmit(event);
    });
  }
});
