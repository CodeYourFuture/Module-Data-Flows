let myLibrary = [];

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
            true
        );
        myLibrary.push(book1);
        myLibrary.push(book2);
        render();
    }
}

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readCheckbox = document.getElementById("check");

function submitBook() {
    const titleValue = titleInput.value.trim();
    const authorValue = authorInput.value.trim();
    const pagesValue = pagesInput.value.trim();

    if (titleValue === "" || authorValue === "" || pagesValue === "") {
        alert("Please fill in all fields!");
        return;
    }

    if (titleValue.length === 0) {
        alert("Title cannot be just spaces!");
        return;
    }

    const pagesNumber = parseInt(pagesValue, 10);
    if (isNaN(pagesNumber) || pagesNumber < 1 || !Number.isInteger(pagesNumber)) {
        alert("Please enter a valid positive integer for pages!");
        return;
    }

    let book = new Book(titleValue, authorValue, pagesNumber, readCheckbox.checked);
    myLibrary.push(book);
    render();

    // Clear the form
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readCheckbox.checked = false;
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function render() {
    const table = document.getElementById("display");
    const rowsNumber = table.rows.length;

    console.log(myLibrary);

    // Delete old table rows (except the header)
    for (let n = rowsNumber - 1; n > 0; n--) {
        table.deleteRow(n);
    }

    const libraryLength = myLibrary.length;
    for (let i = 0; i < libraryLength; i++) {
        const row = table.insertRow(1);
        const titleCell = row.insertCell(0);
        const authorCell = row.insertCell(1);
        const pagesCell = row.insertCell(2);
        const wasReadCell = row.insertCell(3);
        const deleteCell = row.insertCell(4);

        titleCell.textContent = myLibrary[i].title;
        authorCell.textContent = myLibrary[i].author;
        pagesCell.textContent = myLibrary[i].pages;

        const changeReadButton = document.createElement("button");
        changeReadButton.id = i;
        changeReadButton.className = "btn btn-success";
        changeReadButton.textContent = myLibrary[i].read ? "Yes" : "No";
        wasReadCell.appendChild(changeReadButton);

        changeReadButton.addEventListener("click", function () {
            myLibrary[i].read = !myLibrary[i].read;
            changeReadButton.textContent = myLibrary[i].read ? "Yes" : "No";
        });

        const deleteButton = document.createElement("button");
        deleteButton.id = `delete-${i}`;
        deleteButton.className = "btn btn-warning";
        deleteButton.textContent = "Delete";
        deleteCell.appendChild(deleteButton);

        deleteButton.addEventListener("click", function () {
            alert(`You've deleted title: ${myLibrary[i].title}`);
            myLibrary.splice(i, 1);
            render();
        });
    }
}