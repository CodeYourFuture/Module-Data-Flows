(function () {
  let myLibrary = [];

  // Book constructor
  function Book(title, author, pages, check) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.check = check;
  }

  // Get form elements
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const check = document.getElementById("check");

  // Populate initial storage and render
  function populateStorage() {
    if (myLibrary.length === 0) {
      let book1 = new Book("Robison Crusoe", "Daniel Defoe", 252, true);
      let book2 = new Book(
        "The Old Man and the Sea",
        "Ernest Hemingway",
        127,
        true
      );
      myLibrary.push(book1, book2);
    }
    render(); // Always render, even if library isn't empty
  }

  // Render the library table
  function render() {
    let table = document.getElementById("display");
    let rowsNumber = table.rows.length;
    // Delete old table rows except header
    for (let n = rowsNumber - 1; n > 0; n--) {
      table.deleteRow(n);
    }
    // Insert updated rows and cells
    for (let i = 0; i < myLibrary.length; i++) {
      let row = table.insertRow(1);
      let titleCell = row.insertCell(0);
      let authorCell = row.insertCell(1);
      let pagesCell = row.insertCell(2);
      let wasReadCell = row.insertCell(3);
      let deleteCell = row.insertCell(4);

      titleCell.innerHTML = myLibrary[i].title;
      authorCell.innerHTML = myLibrary[i].author;
      pagesCell.innerHTML = myLibrary[i].pages;

      // Read/unread button
      let changeBut = document.createElement("button");
      changeBut.id = i;
      changeBut.className = "btn btn-success";
      wasReadCell.appendChild(changeBut);
      changeBut.innerText = myLibrary[i].check ? "Yes" : "No";

      changeBut.addEventListener("click", function () {
        myLibrary[i].check = !myLibrary[i].check;
        render();
      });

      // Delete button with confirmation dialog
      let delButton = document.createElement("button");
      delButton.id = i + 5;
      deleteCell.appendChild(delButton);
      delButton.className = "btn btn-warning";
      delButton.innerHTML = "Delete";
      delButton.addEventListener("click", function () {
        const confirmDelete = confirm(
          `Are you sure you want to delete title: ${myLibrary[i].title}?`
        );
        if (confirmDelete) {
          myLibrary.splice(i, 1);
          render();
        }
      });
    }
  }

  // Handle form submission
  function submit() {
    // Validate all fields
    if (
      !title.value ||
      !author.value ||
      !pages.value
    ) {
      alert("Please fill all fields!");
      return false;
    }

    // Validate page number: must be a positive integer
    const pagesNum = Number(pages.value);
    if (
      !Number.isInteger(pagesNum) ||
      pagesNum <= 0
    ) {
      alert("Please enter a valid positive integer for page number.");
      pages.value = "";
      pages.focus();
      return false;
    }

    let book = new Book(title.value, author.value, pagesNum, check.checked);
    myLibrary.push(book);
    render();

    // Optionally clear form fields after submission
    title.value = "";
    author.value = "";
    pages.value = "";
    check.checked = false;
    return false; // Prevent form submission if used in <form onsubmit="return submit()">
  }

  // Expose submit function globally if needed for HTML form
  window.submit = submit;

  // Initialize on page load
  window.addEventListener("load", function () {
    populateStorage();
  });
})();