  <script>
    let myLibrary = [];

    window.addEventListener("load", function () {
      populateStorage();
      render();
    });

    function populateStorage() {
      if (myLibrary.length === 0) {
        let bookList = [
          new Book("Robison Crusoe", "Daniel Defoe", "252", true),
          new Book("The Old Man and the Sea", "Ernest Hemingway", "127", true),
          new Book("The Great Gatsby", "F. Scott Fitzgerald", "180", true),
          new Book("The Catcher in the Rye", "J.D Salinger", "277", true),
          new Book("The Alchemist", "Paulo Coelho", "208", true),
          new Book("Harry Potter", "J.K Rowling", "309", true),
          new Book("The Lord of the Rings", "J.R.R Tolkien", "1178", true),
          new Book("The Hobbit", "J.R.R Tolkien", "310", true),
          new Book("The Three Musketeers", "Alexandre Dumas", "700", true),
          new Book("The Little Prince", "Antoine de Saint-Exupery", "96", true),
          new Book("The Psychology of Money", "Morgan Housel", "256", true),
          new Book("How to Win Friends", "Dale Carnegie", "288", true),
          new Book("Civilization", "Niall Ferguson", "512", true),
          new Book("Around the World in 80 Days", "Jules Verne", "240", true),
          new Book("Animal Farm", "George Orwell", "112", true),
          new Book("Overthinking", "Ryan Creed", "256", true),
          new Book("Get on with Anyone", "Katherine Stothart", "256", true),
          new Book("Critical Thinking", "Jerrell Foreman", "256", true),
          new Book("Emotional Intelligence", "Hanso", "256", true),
          new Book("Fahrenheit 451", "Ray Bradbury", "256", true)
        ];
        myLibrary.push(...bookList);
      }
    }

    function Book(title, author, pages, check) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.check = check;
    }

    function submit() {
      const titleInput = document.getElementById("title").value;
      const authorInput = document.getElementById("author").value;
      const pagesInput = document.getElementById("pages").value;
      const isRead = document.getElementById("check").checked;

      if (!titleInput || !authorInput || !pagesInput) {
        alert("Please fill all fields!");
        return;
      }

      const newBook = new Book(titleInput, authorInput, pagesInput, isRead);
      myLibrary.push(newBook);

      // Clear form inputs
      document.getElementById("title").value = "";
      document.getElementById("author").value = "";
      document.getElementById("pages").value = "";
      document.getElementById("check").checked = false;

      render();
    }

    function render() {
      const table = document.getElementById("display");
      table.innerHTML = ""; // Clear table body

      myLibrary.forEach((book, index) => {
        let row = table.insertRow();

        row.insertCell(0).textContent = book.title;
        row.insertCell(1).textContent = book.author;
        row.insertCell(2).textContent = book.pages;

        // Read toggle button
        let readCell = row.insertCell(3);
        let readBtn = document.createElement("button");
        readBtn.className = "btn btn-sm " + (book.check ? "btn-success" : "btn-secondary");
        readBtn.textContent = book.check ? "Yes" : "No";
        readBtn.onclick = () => {
          myLibrary[index].check = !myLibrary[index].check;
          render();
        };
        readCell.appendChild(readBtn);

        // Delete button
        let deleteCell = row.insertCell(4);
        let delBtn = document.createElement("button");
        delBtn.className = "btn btn-sm btn-danger";
        delBtn.textContent = "Delete";
        delBtn.onclick = () => {
          if (confirm(`Are you sure you want to delete "${book.title}"?`)) {
            // Correct deletion method using splice
            myLibrary.splice(index, 1);
            render(); // Re-render the table after deletion
          }
        };
        deleteCell.appendChild(delBtn);
      });
    }
  </script>
