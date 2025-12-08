class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}


const library = [
  new Book("Robinson Crusoe", "Daniel Defoe", 252, true),
  new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true),
];


const bookForm = document.getElementById("bookForm");
const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const pagesInput = document.getElementById("pagesInput");
const readCheckbox = document.getElementById("readCheckbox");
const tableBody = document.querySelector("#displayTable tbody");


bookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const pages = Number(pagesInput.value);
  const read = readCheckbox.checked;


  if (!title || !author || !Number.isInteger(pages) || pages <= 0) {
    alert("Please enter valid book details.");
    return;
  }


  library.push(new Book(title, author, pages, read));


  bookForm.reset();


  render();
});


function render() {

  tableBody.innerHTML = "";

  library.forEach((book, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>
        <button 
          class="btn btn-sm ${book.read ? "btn-success" : "btn-secondary"}"
          data-index="${index}" 
          data-action="toggle"
        >
          ${book.read ? "Yes" : "No"}
        </button>
      </td>
      <td>
        <button 
          class="btn btn-sm btn-danger"
          data-index="${index}" 
          data-action="delete"
        >
          Delete
        </button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}


tableBody.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const index = Number(button.dataset.index);
  const action = button.dataset.action;


  if (action === "toggle") {
    library[index].read = !library[index].read;
    render();
  }


  if (action === "delete") {
    const removedTitle = library[index].title;
    library.splice(index, 1);
    render();
    alert(`Deleted: ${removedTitle}`);
  }
});


render();
