let myLibrary = [];

window.addEventListener("load", function (e) {
if (localStorage.getItem("myLibrary")) {
    myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
  } else {
    populateStorage();
  }
  render();
});
function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", 252, true);
    let book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true);
    myLibrary.push(book1);
    myLibrary.push(book2);
  }
}

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readCheckBox = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book 
//via Book function and start render function
function submit() {
    const title = titleInput.value.trim(); 
    const author = authorInput.value.trim();
    const pages = pagesInput.value.trim();

   if (!title || !author || !pages || isNaN(pages) || pages <=0) {
    alert("Please fill all fields correctly!");
    return;
  } 
    let book = new Book(title, author, Number(pages), readCheckBox.checked);
    myLibrary.push(book);
    render();
  
}

class Book {
  constructor(title, author, pages, check) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.check = check;
  }
}

function render() {
  const tableBody = document.querySelector("#display tbody");
  tableBody.innerHTML = "";
  
  //insert updated row and cells
  for (let i = 0; i < myLibrary.length; i++) {
    let row = tableBody.insertRow(-1);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);

    titleCell.textContent= myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;
  
       let toggleBtn = document.createElement("button");
    toggleBtn.className = "btn btn-success";
    toggleBtn.textContent = myLibrary[i].check ? "Yes" : "No";
    wasReadCell.appendChild(toggleBtn);

    toggleBtn.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again
     let delBtn = document.createElement("button");
    delBtn.className = "btn btn-warning";
    delBtn.textContent = "Delete";
    deleteCell.appendChild(delBtn);

    delBtn.addEventListener("click", function () {
      if(confirm(`Are you sure you want to delete " ${myLibrary[i].title}"?`)){
      myLibrary.splice(i, 1);
      render();
    }
    });
  }
  //  Save updated library to localStorage
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

