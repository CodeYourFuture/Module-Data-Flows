let myLibrary = [];

window.addEventListener("load", function () {
  console.log("Page loaded, initializing library...");
  populateStorage();
  render();
  const form = document.getElementById("bookForm"); 
  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      addBook();
    });
  }
});

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = parseInt(pages) || 0;
  this.isRead = isRead || false;
}

function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", 252, true);
    let book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true);
    let book3 = new Book("How to Code", "Seddiq Azam", 324, false);

    myLibrary.push(book1, book2, book3);
    console.log("Added initial books:", myLibrary);
  }
}

function addBook() {
  console.log("Add book button clicked!");
  
  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const pagesInput = document.getElementById("pages");
  const checkInput = document.getElementById("check");
  
  if (!titleInput || !authorInput || !pagesInput || !checkInput) {
    showAlert("Form elements not found! Please refresh the page.", "danger");
    return;
  }
  
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const pages = pagesInput.value.trim();
  const isRead = checkInput.checked;
  
  console.log("Form values:", { title, author, pages, isRead });
  
  if (!title || !author || !pages) {
    showAlert("Please fill in all required fields (Title, Author, and Pages)!", "warning");
    highlightEmptyFields(title, author, pages);
    return;
  }
  
  if (isNaN(pages) || parseInt(pages) <= 0) {
    showAlert("Please enter a valid number of pages (greater than 0)!", "warning");
    pagesInput.classList.add("is-invalid");
    return;
  }
  
  const duplicate = myLibrary.find(
    (book) => 
      book.title.toLowerCase() === title.toLowerCase() && 
      book.author.toLowerCase() === author.toLowerCase()
  );
  
  if (duplicate) {
    showAlert(`This book "${title}" by ${author} is already in your library!`, "info");
    return;
  }
  
  const newBook = new Book(title, author, pages, isRead);
  console.log("Created new book:", newBook);
  
  myLibrary.push(newBook);
  console.log("Library after adding book:", myLibrary.length, "total books");
  
  render();
  clearForm();
  
  showAlert(`Successfully added "${title}" by ${author} to your library!`, "success");
  
  if (typeof $ !== 'undefined') {
    $("#demo").collapse('hide');
  }
}

function highlightEmptyFields(title, author, pages) {
  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const pagesInput = document.getElementById("pages");
  
  [titleInput, authorInput, pagesInput].forEach(input => {
    input.classList.remove("is-invalid", "is-valid");
  });
  
  if (!title) titleInput.classList.add("is-invalid");
  if (!author) authorInput.classList.add("is-invalid");
  if (!pages) pagesInput.classList.add("is-invalid");
}

function clearForm() {
  const form = document.getElementById("bookForm"); 
  if (!form) {
    console.error("Form element not found!");
    return;
  }

  form.reset();

  form.querySelectorAll(".is-invalid, .is-valid").forEach(input => {
    input.classList.remove("is-invalid", "is-valid");
  });

  console.log("Form cleared using .reset()");
}

function render() {
  console.log("Rendering library with", myLibrary.length, "books");
  clearTable();
  
  if (typeof $ !== 'undefined') {
    $("#demo").collapse('hide');
  } else {
    const demoElement = document.getElementById("demo");
    if (demoElement && demoElement.classList.contains("show")) {
      demoElement.classList.remove("show");
    }
  }
  
  const tbody = document.querySelector("#display tbody");
  if (!tbody) {
    console.error("Could not find table body element!");
    return;
  }
  
  if (myLibrary.length === 0) {
    showEmptyState("Your library is empty. Add some books to get started!");
    return;
  }
  
  myLibrary.forEach((book, index) => {
    const row = tbody.insertRow();
    
    const titleCell = row.insertCell(0);
    titleCell.textContent = book.title;
    titleCell.style.fontWeight = "bold";
    
    const authorCell = row.insertCell(1);
    authorCell.textContent = book.author;
    
    const pagesCell = row.insertCell(2);
    pagesCell.textContent = book.pages;
    
    const statusCell = row.insertCell(3);
    const statusBtn = createStatusButton(book, index);
    statusCell.appendChild(statusBtn);
    
    const actionCell = row.insertCell(4);
    const deleteBtn = createDeleteButton(book, index);
    actionCell.appendChild(deleteBtn);
  });
}

function createStatusButton(book, index) {
  const btn = document.createElement("button");
  btn.className = book.isRead ? "btn btn-success btn-sm" : "btn btn-danger btn-sm";
  btn.textContent = book.isRead ? "Read" : "Not Read";
  btn.title = `Mark "${book.title}" as ${book.isRead ? "unread" : "read"}`;
  btn.setAttribute("aria-label", btn.title);
  btn.onclick = () => toggleReadStatus(index);
  return btn;
}

function createDeleteButton(book, index) {
  const btn = document.createElement("button");
  btn.className = "btn btn-warning btn-sm";
  btn.textContent = "Delete";
  btn.title = `Delete "${book.title}"`;
  btn.setAttribute("aria-label", `Delete ${book.title}`);
  
  btn.dataset.bookIndex = index;
  btn.onclick = function() {
    const bookIndex = parseInt(this.dataset.bookIndex);
    deleteBook(bookIndex);
  };
  
  return btn;
}

function clearTable() {
  const tbody = document.querySelector("#display tbody");
  if (tbody) {
    tbody.innerHTML = "";
  }
}

function showEmptyState(message) {
  const tbody = document.querySelector("#display tbody");
  if (tbody) {
    const row = tbody.insertRow();
    const cell = row.insertCell(0);
    cell.colSpan = 5;
    cell.className = "text-center text-muted";
    cell.textContent = message;
  }
}

function toggleReadStatus(index) {
  const book = myLibrary[index];
  if (book) {
    book.isRead = !book.isRead;
    console.log(`Toggled read status for "${book.title}" to ${book.isRead ? "Read" : "Not Read"}`);
    render();
    
    const statusMessage = book.isRead ? "marked as read" : "marked as unread";
    showAlert(`"${book.title}" ${statusMessage}!`, "info");
  }
}

function deleteBook(index) {
  console.log("Delete function called with index:", index);
  const book = myLibrary[index];
  console.log("Book to delete:", book);
  
  if (book) {
    if (confirm(`Are you sure you want to delete "${book.title}" from your library?`)) {
      const deletedBook = myLibrary.splice(index, 1)[0];
      console.log(`Deleted book "${deletedBook.title}" from library`);
      render();
      showAlert(`"${deletedBook.title}" has been removed from your library!`, "warning");
    }
  } else {
    console.error("Book not found at index:", index);
  }
}

function viewReadBooks() {
  console.log("Viewing read books only");
  clearTable();
  
  // Hide the form when switching to read books view
  if (typeof $ !== 'undefined') {
    $("#demo").collapse('hide');
  } else {
    const demoElement = document.getElementById("demo");
    if (demoElement && demoElement.classList.contains("show")) {
      demoElement.classList.remove("show");
    }
  }
  
  const tbody = document.querySelector("#display tbody");
  if (!tbody) {
    console.error("Could not find table body element!");
    return;
  }
  
  const readBooks = myLibrary.filter(book => book.isRead);
  
  if (readBooks.length === 0) {
    showEmptyState("You haven't read any books yet!");
    return;
  }
  
  readBooks.forEach((book) => {
    const row = tbody.insertRow();
    
    const titleCell = row.insertCell(0);
    titleCell.textContent = book.title;
    titleCell.style.fontWeight = "bold";
    
    const authorCell = row.insertCell(1);
    authorCell.textContent = book.author;
    
    const pagesCell = row.insertCell(2);
    pagesCell.textContent = book.pages;
    
    const statusCell = row.insertCell(3);
    const statusBtn = document.createElement("button");
    statusBtn.className = "btn btn-success btn-sm";
    statusBtn.textContent = "Read";
    statusBtn.title = `Mark "${book.title}" as unread`;
    statusBtn.onclick = () => {
      book.isRead = !book.isRead;
      render(); // Switch back to full view
    };
    statusCell.appendChild(statusBtn);
    
    const actionCell = row.insertCell(4);
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-warning btn-sm";
    deleteBtn.textContent = "Delete";
    deleteBtn.title = `Delete "${book.title}"`;
    deleteBtn.onclick = () => {
      if (confirm(`Are you sure you want to delete "${book.title}" from your library?`)) {
        const index = myLibrary.indexOf(book);
        if (index !== -1) {
          myLibrary.splice(index, 1);
          viewReadBooks(); // Refresh the filtered view
        }
      }
    };
    actionCell.appendChild(deleteBtn);
  });
}

function showAlert(message, type) {
  const alertContainer = document.getElementById("alertContainer");
  if (!alertContainer) {
    console.error("Alert container not found!");
    return;
  }
  
  const alert = document.createElement("div");
  alert.className = `alert alert-${type} alert-dismissible fade show`;
  alert.innerHTML = `
    ${getAlertIcon(type)}
    ${message}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  `;
  
  alertContainer.appendChild(alert);
  
  setTimeout(() => {
    alert.classList.remove("show");
    setTimeout(() => {
      alertContainer.removeChild(alert);
    }, 150);
  }, 5000);
}

function getAlertIcon(type) {
  switch (type) {
    case "success": return '<i class="fas fa-check-circle"></i> ';
    case "warning": return '<i class="fas fa-exclamation-triangle"></i> ';
    case "danger": return '<i class="fas fa-times-circle"></i> ';
    case "info": return '<i class="fas fa-info-circle"></i> ';
    default: return '';
  }
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    if (typeof $ !== 'undefined') {
      $("#demo").collapse('hide');
    }
  }
});

console.log("Book Library JavaScript loaded successfully!");