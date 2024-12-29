let myLibrary = [];

window.addEventListener("load", function () {
    populateStorage();
    render();
});

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

// Check the input from forms and, if valid, add the new book (object in array)
// via Book constructor and start render function
function submit() {
    if (
        title.value == null ||
        title.value === "" ||
        pages.value == null ||
        pages.value === ""
    ) {
        showError("Please fill all fields!");
        return false;
    }

    if (myLibrary.some(b => b.title === title.value && b.author === author.value)) {
        showError("This book already exists!");
        return;
    }

    if (!isNaN(title.value.trim()) || !isNaN(author.value.trim())) {
        showError("Title and Author must be text!");
        return;
    }

    let book = new Book(title.value, author.value, pages.value, check.checked);
    myLibrary.push(book);
    render();
}

// Clear any previous error messages
document.getElementById("error-message").style.display = "none";

function Book(title, author, pages, check) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.check = check;
}

function render() {
    let table = document.getElementById("display");
    let rowsNumber = table.rows.length;

    // Delete old table rows
    for (let n = rowsNumber - 1; n > 0; n--) {
        table.deleteRow(n);
    }

    // Insert updated rows and cells
    let length = myLibrary.length;
    for (let i = 0; i < length; i++) {
        let row = table.insertRow(1);
        let titleCell = row.insertCell(0);
        let authorCell = row.insertCell(1);
        let pagesCell = row.insertCell(2);
        let wasReadCell = row.insertCell(3);
        let deleteCell = row.insertCell(4);

        titleCell.innerHTML = myLibrary[i].title;
        authorCell.innerHTML = myLibrary[i].author;
        pagesCell.innerHTML = myLibrary[i].pages;

        // Add and configure read/unread button
        let changeBut = document.createElement("button");
        changeBut.id = i;
        changeBut.className = "btn btn-primary";
        wasReadCell.appendChild(changeBut);

        let readStatus = myLibrary[i].check ? "Yes" : "No";
        changeBut.innerHTML = readStatus;

        if (myLibrary[i].check) {
            changeBut.className = "btn btn-success";
        }

        changeBut.addEventListener("click", function () {
            myLibrary[i].check = !myLibrary[i].check;
            render();
        });

        // Add delete button to each row
        let delBut = document.createElement("button");
        delBut.id = i + 5;
        delBut.className = "btn btn-warning";
        delBut.innerHTML = "Delete";
        deleteCell.appendChild(delBut);

        delBut.addEventListener("click", function () {
            showError(`You've deleted title: ${myLibrary[i].title}`);
            myLibrary.splice(i, 1);
            render();
        });
    }
}

// Handle error messages
function showError(message) {
    let errorMessCont = document.getElementById("errorMessage");
    errorMessCont.textContent = message;
    errorMessCont.classList.add("show");

    setTimeout(() => {
        errorMessCont.classList.remove("show");
    }, 3000);
}
