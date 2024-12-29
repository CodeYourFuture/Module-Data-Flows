let myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
  render();

  function populateStorage() {
    if (myLibrary.length === 0) {
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
  }

  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const check = document.getElementById("check");
  const submitButton = document.querySelector('[data-atr="submit"]');

  function submit() {
    if (
      title.value == null ||
      title.value === "" ||
      pages.value == null ||
      pages.value === ""
    ) {
      alert("Please fill all fields!");
      return false;
    } else {
      let book = new Book(
        title.value,
        author.value,
        pages.value,
        check.checked
      );
      myLibrary.push(book);
      render();
    }
  }

  submitButton.addEventListener("click", submit);

  function Book(title, author, pages, check) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.check = check;
  }

  function render() {
    let table = document.getElementById("display");
    // Clear the previous rows, excluding the header
    const rowsNumber = table.rows.length;
    for (let n = rowsNumber - 1; n > 0; n--) {
      table.deleteRow(n);
    }

    // Insert updated rows and cells
    myLibrary.forEach((book, i) => {
      let row = table.insertRow();
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);
      let cell5 = row.insertCell(4);

      cell1.innerHTML = book.title;
      cell2.innerHTML = book.author;
      cell3.innerHTML = book.pages;

      // Add a button for changing read/unread status
      let changeBut = document.createElement("button");
      changeBut.className = "btn btn-success";
      cell4.appendChild(changeBut);
      let readStatus = book.check ? "No" : "Yes"; 
      changeBut.innerHTML = readStatus;

      changeBut.addEventListener("click", function () {
        book.check = !book.check;
        render();
      });

      // Add a delete button
      let delButton = document.createElement("button");
      delButton.className = "btn btn-warning";
      delButton.innerHTML = "Delete";
      cell5.appendChild(delButton);
      delButton.addEventListener("click", function () {
        alert(`You've deleted title: ${book.title}`);
        myLibrary.splice(i, 1);
        render();
      });
    });
  }
});
