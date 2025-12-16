let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage(); // just if myLibrary is empty put two book on it with a specific details
  render();
});

//just one thing need to check 
function populateStorage() {
  if (myLibrary.length == 0) {   //why there is just == not ===
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
// clear associated with HTML
const title = document.getElementById("title");   
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  //if any of the information is missing show an alert
  if (
    title.value == null ||    // == checks both null and undefined . === only null 
    title.value == "" ||         // why you use the way and where author check??
    pages.value == null ||     // if(!title.value||author.value|| page.value) is more clear and readable 
    pages.value == ""
  )
   {
    alert("Please fill all fields!");  // alert is a built-in JS function
    return false;
  } else {
    let book = new Book(title.value, title.value, pages.value, check.checked);
    library.push(book);   // ???? the var called MyLibrary bro  
    render();             // tell now where as submit event maybe later I will check
  }
}
 let book1 = new Book("Robison Crusoe", "Daniel Defoe", "252", true); ///why i have this in populteStorage and here

//function to create a new book as an object 
 function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  let table = document.getElementById("display");
  let rowsNumber = table.rows.length;
  //delete old table
  for (let n = rowsNumber - 1; n > 0; n--) {  //n>0 because we will delete all rows except the first one header
    table.deleteRow(n);     //.deleteRow is a built-in JS function it remove the row by index 
  }
  //insert updated row and cells
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = table.insertRow(1);    // why (1) not i+1 insert <tr> with four <td>
    let titleCell = row.insertCell(0);   // the table.rows and row.cells are HTMLCollection,not a real array, but they behave like array(indexed,length) . they are DOM collections
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);  
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);          // it is like insert for <td> </td> 
    titleCell.innerHTML = myLibrary[i].title;    //filling the cells    why innerHTML
    authorCell.innerHTML = myLibrary[i].author;
    pagesCell.innerHTML = myLibrary[i].pages;

    //add and wait for action for read/unread button
    let changeBut = document.createElement("button");
    changeBut.id = i;                            // give the button the index of the book object
    changeBut.className = "btn btn-success";
    wasReadCell.appendChild(changeBut);  
    let readStatus = "";
    if (myLibrary[i].check == false) {  // why not ===
      readStatus = "Yes";
    } else {
      readStatus = "No";
    }
    changeBut.innerText = readStatus;  // fill the button with yes or no

    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;            //when we click will change yes to no and no to yes
      render();
    });

    //add delete button to every row and render again 
    //delButton
    let delButton = document.createElement("button");
    delButton.id = i + 5;       // I think there is an issue here if we have more than five books
    deleteCell.appendChild(delButton);
    delButton.className = "btn btn-warning";
    delButton.innerHTML = "Delete";
    delButton.addEventListener("clicks", function () {    // 
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
      //we do rendering after each change to UI
    });
  }
}
