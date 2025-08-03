let myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", "252", true);
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

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  
   const trimmedTitle = title.value.trim();
   const trimmedPages = pages.value.trim();
   const trimmedAuthor = author.value.trim();

  if (!trimmedTitle || !trimmedAuthor || !trimmedPages){
    alert("Please fill all fields!");
    return false;
  }
   if (isNaN(trimmedPages) || Number(trimmedPages) <= 0){
    alert("Please enter a valid positive number for pages!");
    return false;
   }
  
  
    let book = new Book(trimmedTitle, trimmedAuthor, trimmedPages, check.checked);
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
  const tableBody = document.querySelector("#display tbody");
  tableBody.innerHTML = "";
  

 
  //insert updated row and cells
  
  myLibrary.forEach((book, index) => {
    let row = tableBody.insertRow();
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;

    //add and wait for action for read/unread button
    const toggleReadButton = document.createElement("button");
    toggleReadButton.className = "btn btn-success";
    toggleReadButton.innerText = book.check ? "Yes" : "No";
    toggleReadButton.addEventListener("click",  () => {
      myLibrary[index].check = !myLibrary[index].check;
      render();
    });
    wasReadCell.appendChild(toggleReadButton);

    //add delete button to every row and render again
    const deleteButton = document.createElement("button");
    
    deleteButton.className = "btn btn-warning";
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click",  () => {
      const deletedTitle = book.title;
     myLibrary.splice(index, 1);
      render();
      alert(`You've deleted title: ${deletedTitle}`);
    });   
       deleteCell.appendChild(deleteButton);
  
  });
}
