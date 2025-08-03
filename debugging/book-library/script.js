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
  
  for (let i = 0; i < myLibrary.length; i++) {
    let row = tableBody.insertRow();
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);

    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;

    //add and wait for action for read/unread button
    const changeBut = document.createElement("button");
    changeBut.className = "btn btn-success";
    changeBut.innerText = myLibrary[i].check ? "Yes" : "No";
    changeBut.addEventListener("click",  () => {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });
    wasReadCell.appendChild(changeBut);

    //add delete button to every row and render again
    const delButton = document.createElement("button");
    
    delButton.className = "btn btn-warning";
    delButton.innerText = "Delete";
    deleteCell.appendChild(delButton);

    delButton.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
  }
}
