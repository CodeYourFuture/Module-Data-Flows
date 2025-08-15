const myLibrary = JSON.parse(localStorage.getItem("library")) || [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", 252, true);
    let book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
       127,
      true);
    myLibrary.push(book1, book2);
    localStorage.setItem("library", JSON.stringify(myLibrary));
  }
}
const titleEl = document.getElementById("title");
const authorEl = document.getElementById("author");
const pagesEl = document.getElementById("pages");
const checkEl = document.getElementById("check");


//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  if (
    titleEl.value.trim() === "" ||
    authorEl.value.trim() === "" ||
    pagesEl.value.trim() === "" 
  
   ) {
    alert("Please fill all fields!");
    return false;
  } 
  let pageCount = parseInt(pagesEl.value.trim());
  if (pageCount <= 0 || isNaN(pageCount)) {
    alert("Please enter a valid page number");
    return false;
  }
    let book = new Book(
      titleEl.value.trim(),
       authorEl.value.trim(),
        pageCount,
         checkEl.checked
    );   
    myLibrary.push(book);
    localStorage.setItem("library", JSON.stringify(myLibrary));
    render();
    document.getElementById("book-form").reset();
    $("#demo").collapse("hide");
  }


function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  const tableBody = document.querySelector("#display tbody");
  tableBody.innerHTML = "";//clears the rows
  
  //insert updated row and cells
    myLibrary.forEach((book,i) => {
      let row = tableBody.insertRow();

    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);

    titleCell.innerText = book.title;
    authorCell.innerText = book.author;
    pagesCell.innerText = book.pages;

    //add and wait for action for read/unread button
    let changeBut = document.createElement("button");
    changeBut.className = "btn btn-success";
    changeBut.innerText = book.check ? "Yes" : "No";
    changeBut.addEventListener("click",() => {
      book.check = !book.check;
      localStorage.setItem("library", JSON.stringify(myLibrary));
      render();
    });
    wasReadCell.appendChild(changeBut);

    //add delete button to every row and render again
    let delBut = document.createElement("button");
    delBut.className = "btn btn-warning";
    delBut.innerHTML = "Delete";
    delBut.addEventListener("click",() => {
      
      myLibrary.splice(i, 1);
      localStorage.setItem("library", JSON.stringify(myLibrary));
      render();
      alert(`You've deleted title: ${book.title}`);
      

    });
    deleteCell.appendChild(delBut);
  });
}
// Run submit() when the form is submitted
document.getElementById("book-form").addEventListener("submit", function(e) {
  e.preventDefault();
  submit();
});
