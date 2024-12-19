# My Book Library

## topics: debugging, DOM

My website should be able to:

- View a list of books that I've read
- Add books to a list of books that I've read
  - Including title, author, number of pages and if I've read it
  - If any of the information is missing it shouldn't add the book and should show an alert
- Remove books from my list

## Bugs to be fixed

1. Website loads but doesn't show any books
2. Error in console when you try to add a book
3. It uses the title name as the author name
4. Delete button is broken
5. When I add a book that I say I've read - it saves the wrong answer

I think there are other some other small bugs in my code...but I'm lazy so I can't fix them all.

I wish somebody would help me!

_______________________________MY DEBUGGING PROCESSUS__________________________________________

Bug 1: Website loads but doesn't show any books.
I Fixed a typo: render() wasn't rendering correctly because populateStorage() wasn't initializing correctly.

Bug 2: Error when adding a book.
I Corrected a typo: The function attempted to push to a non-existent variable library. Replaced it with myLibrary.

Bug 3: Title name used as author name.
I Fixed in submit() function where the title was passed twice to the Book constructor.

Bug 4: Delete button is broken.
I Fixed the clicks typo (should be click) and ensured correct indexing when removing books from the array.

Bug 5: Saves wrong read status.
I Updated the Book constructor to use the check.checked value properly.