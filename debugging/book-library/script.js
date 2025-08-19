let myLibrary = [];

window.onload = function () {
  // Cache DOM elements with clear suffixes
  const titleInputEl = document.getElementById("title");
  const authorInputEl = document.getElementById("author");
  const pagesInputEl = document.getElementById("pages");
  const readCheckEl = document.getElementById("check");
  const submitBtnEl = document.getElementById("submitBtn");
  const bookFormEl = document.getElementById("bookForm");
  const tbodyEl = document.querySelector("#display tbody");

  // Initial setup
  populateStorage();
  render();

  // Event listeners
  submitBtnEl.addEventListener("click", addBook);

  // --- Functions ---
  function populateStorage() {
    if (myLibrary.length === 0) {
      let book1 = new Book("Robison Crusoe", "Daniel Defoe", "252", true);
      let book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", "127", true);
      myLibrary.push(book1, book2);
      render();
    }
  }

  function addBook() {
    // Preprocess & validate input
    const title = titleInputEl.value.trim();
    const author = authorInputEl.value.trim();
    const pages = pagesInputEl.value.trim();
    const read = readCheckEl.checked;

    if (!title || !author || !pages || isNaN(Number(pages)) || Number(pages) <= 0) {
      alert("Please fill all fields with valid values (no empty spaces, pages must be a positive number).");
      return;
    }
    if (!title || title.length < 2) {
  alert("Title must be at least 2 characters long.");
  return;
}
if (!author || author.length < 2) {
  alert("Author must be at least 2 characters long.");
  return;
}
const pageNum = Number(pages);
if (!Number.isInteger(pageNum) || pageNum <= 0 || pageNum > 10000) {
  alert("Pages must be a positive whole number (1–10,000).");
  return;
}

    // Add book
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    render();
    bookFormEl.reset();
  }

  function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  function render() {
    tbodyEl.innerHTML = "";

    myLibrary.forEach((book, i) => {
      let row = tbodyEl.insertRow();

      row.insertCell(0).textContent = book.title;
      row.insertCell(1).textContent = book.author;
      row.insertCell(2).textContent = book.pages;

      // read/unread button
      let wasReadCell = row.insertCell(3);
      let changeBtnEl = document.createElement("button");
      changeBtnEl.className = "btn btn-success";
      changeBtnEl.textContent = book.read ? "Yes" : "No";
      changeBtnEl.addEventListener("click", () => {
        book.read = !book.read;
        render();
      });
      wasReadCell.appendChild(changeBtnEl);

      // delete button
      let deleteCell = row.insertCell(4);
      let delBtnEl = document.createElement("button");
      delBtnEl.className = "delete-btn";
      delBtnEl.textContent = "Delete";
      delBtnEl.addEventListener("click", () => {
        myLibrary.splice(i, 1);
        render();
        alert(`The book "${book.title}" has been deleted successfully.`);
      });
      deleteCell.appendChild(delBtnEl);
    });
  }
};
