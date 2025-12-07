let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", 252, true);
    let book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      127,
      true
    );
    myLibrary.push(book1);
    myLibrary.push(book2);
    render();
  }
}
const submitBtn   = document.getElementById("submitBtn");
submitBtn.addEventListener("click", () => {
  submit();
})

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() { 
  let titleInput    = document.getElementById("title").value.trim();
  let authorInput   = document.getElementById("author").value.trim();
  const pagesInput  = Number(document.getElementById("pages").value);
  const checkBtn    = document.getElementById("check");

  titleInput  = titleInput.replace(/</g, "");
  authorInput = authorInput.replace(/</g, "");

  if (  titleInput  == ""  || authorInput == ""  || pagesInput  == ""  ) {
    alert("Please fill all fields!");
    return false;
  }
  
  if (!Number.isInteger(pagesInput) || pagesInput <= 0) {
    alert("Pages must be a valid number");
    return false;
  }
  
  let book = new Book(titleInput, authorInput, pagesInput, checkBtn.checked);
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
  let tableBody = document.getElementById("tableBody");

  //delete old table
  tableBody.innerHTML = "";

  //insert updated row and cells
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row         = tableBody.insertRow(0);
    let titleCell   = row.insertCell(0);
    let authorCell  = row.insertCell(1);
    let pagesCell   = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell  = row.insertCell(4);
    titleCell.textContent  = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent  = myLibrary[i].pages;

    //add and wait for action for read/unread button
    let changeButton = document.createElement("button");
    changeButton.className = "btn btn-success";
    wasReadCell.appendChild(changeButton);

    changeButton.innerText = myLibrary[i].check ? "Yes" : "No";

    changeButton.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again
    let deleteButtton = document.createElement("button");
    deleteButtton.id = i
    deleteCell.appendChild(deleteButtton);
    deleteButtton.className = "btn btn-warning";
    deleteButtton.innerHTML = "Delete";
    deleteButtton.addEventListener("click", function () {
      const currentBookTitle = myLibrary[i].title;
      if (myLibrary.splice(i, 1)) {
        alert(`You've deleted title: ${currentBookTitle}`);
      }
      render();
    });
  }
}
