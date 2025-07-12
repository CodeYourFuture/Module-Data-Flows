
  let myLibrary = [];

  // Move constructor function to the top
  function Book(title, author, pages, check) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.check = check;
  }

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

  // ... rest of the code (submit(), render()) remains unchanged ...

