(function () {
  let myLibrary = [];

  // ---------------------------
  // Book constructor
  // ---------------------------
  function Book(title, author, pages, check) {
    this.title = title;
    this.author = author;
    this.pages = pages; // Always number
    this.check = check;
  }

  // ---------------------------
  // DOM element references
  // CHANGED: Renamed for clarity (added Input suffix)
  // ---------------------------
  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const pagesInput = document.getElementById("pages");
  const checkInput = document.getElementById("check");

  // ---------------------------
  // Populate storage
  // CHANGED: Removed render() call here — now render only runs in onload
  // ---------------------------
  function populateStorage() {
    if (myLibrary.length === 0) {
      myLibrary.push(
        new Book("Robinson Crusoe", "Daniel Defoe", 252, true),
        new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true)
      );
    }
  }

  // ---------------------------
  // Render the library table
  // ---------------------------
  function render() {
    const table = document.getElementById("display");

    // CHANGED: Efficiently clear table body (instead of deleting rows in loop)
    if (table.tBodies.length > 0) {
      table.tBodies[0].innerHTML = "";
    }

    // Insert updated rows
    myLibrary.forEach((book, i) => {
      let row = table.insertRow(1);
      let titleCell = row.insertCell(0);
      let authorCell = row.insertCell(1);
      let pagesCell = row.insertCell(2);
      let wasReadCell = row.insertCell(3);
      let deleteCell = row.insertCell(4);

      // CHANGED: Use textContent instead of innerHTML for safety
      titleCell.textContent = book.title;
      authorCell.textContent = book.author;
      pagesCell.textContent = book.pages;

      // ---------------------------
      // Toggle read button
      // CHANGED: Renamed to toggleReadBtn, no id — using dataset index
      // ---------------------------
      let toggleReadBtn = document.createElement("button");
      toggleReadBtn.dataset.index = i;
      toggleReadBtn.className = "btn btn-success";
      toggleReadBtn.textContent = book.check ? "Yes" : "No";
      wasReadCell.appendChild(toggleReadBtn);

      toggleReadBtn.addEventListener("click", function (e) {
      const idx = e.target.dataset.index;
      myLibrary[idx].check = !myLibrary[idx].check;
      render();
      });

      // ---------------------------
      // Delete button
      // CHANGED: Renamed to deleteBtn, no id, confirm before deletion
      // ---------------------------
      let deleteBtn = document.createElement("button");
      deleteBtn.dataset.index = i;
      deleteBtn.className = "btn btn-warning";
      deleteBtn.textContent = "Delete";
      deleteCell.appendChild(deleteBtn);

      deleteBtn.addEventListener("click", function (e) {
      const idx = e.target.dataset.index;
      const confirmDelete = confirm(
        `Are you sure you want to delete title: ${myLibrary[idx].title}?`
      );
      if (confirmDelete) {
        myLibrary.splice(idx, 1);
        render();
          // Optional: Post-delete notification
          // alert(`Book "${book.title}" deleted successfully.`);
        }
      });
    });
  }

  // ---------------------------
  // Handle form submission
  // CHANGED: Added trim(), validation, consistent types
  // ---------------------------
  function submit() {
    const titleVal = titleInput.value.trim();
    const authorVal = authorInput.value.trim();
    const pagesVal = pagesInput.value.trim();

    // CHANGED: Reject empty or whitespace-only inputs
    if (!titleVal || !authorVal || !pagesVal) {
      alert("Please fill all fields without only spaces!");
      return false;
    }

    // CHANGED: Convert to number before storing
    const pagesNum = Number(pagesVal);
    if (!Number.isInteger(pagesNum) || pagesNum <= 0) {
      alert("Please enter a valid positive integer for page number.");
      pagesInput.value = "";
      pagesInput.focus();
      return false;
    }

    myLibrary.push(new Book(titleVal, authorVal, pagesNum, checkInput.checked));
    render();

    // Clear form
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    checkInput.checked = false;

    return false; // Prevent form submission
  }

  // Make submit() available globally for form onsubmit
  window.submit = submit;

  // ---------------------------
  // Initialize on page load
  // CHANGED: render() only runs once here
  // ---------------------------
  window.addEventListener("load", function () {
    populateStorage();
    render();
  });
})();
