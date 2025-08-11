let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", "252", true);
    let book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      "127",
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

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  titleInput.value = titleInput.value.trim().replace(/\s+/g, " ");
  authorInput.value = authorInput.value.trim().replace(/\s+/g, " ");
  pagesInput.value = pagesInput.value.trim();

  if (
    titleInput.value === "" ||
    authorInput.value === "" ||
    pagesInput.value === ""  
  ) {
    alert("Please fill all fields!");
    return false;
  } 

  if (isNaN(pagesInput.value) || pagesInput.value <= 0 || pagesInput.value > 10000) {
  alert("Please enter a valid page count (1–10000).");
  return false;
  }

  let book = new Book(
    titleInput.value,
    authorInput.value,
    parseInt(pagesInput.value, 10),
    readCheckbox.checked
  );

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
  let tbody = document.querySelector("#display tbody");

  //Clear all rows at once
  tbody.innerHTML = "";

  //insert updated row and cells
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = tbody.insertRow(0);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);
    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    //add and wait for action for read/unread button
    let readBtn = document.createElement("button");
   
    readBtn.className = "btn btn-success";
    wasReadCell.appendChild(readBtn);
    let readStatus = "";
    if (myLibrary[i].check == false) {
      readStatus = "No";
    } else {
      readStatus = "Yes";
    }
    readBtn.innerText = readStatus;

    readBtn.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again
    let deleteBtn = document.createElement("button");
   
    deleteCell.appendChild(deleteBtn);
    deleteBtn.className = "btn btn-warning";
    deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
  }
}
