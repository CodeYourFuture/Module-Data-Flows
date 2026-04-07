# General Feedback for Possible Improvement

## `index.html`

### Check for syntax error in HTML and CSS
Have you validated the code in `index.html` using https://validator.w3.org/? (The original HTML have some errors)

### Loading script as an ES module 
Suggestion: Consider loading `script.js` as an ES module to isolate its scope from the global context as:

`<script src="script.js" type="module"></script>`

This ensures that variables, functions, and imports in script.js don't leak into the global namespace, 
helps prevent naming conflicts, and enables the use of modern JavaScript features like import and export.

Note: With `type="module"`, `defer` is automatically enforced.

### Input validation
We can (and should) enforce a baseline level of input validation directly in HTML. 
Attributes like `required`, `type`, `pattern`, `min`, `max`, etc. help catch invalid 
input early and improve user experience with minimal effort.

---
## `script.js`

### Remove unnecessary code
On page load, a function is unnecessarily called twice.
Can you remove this unnecessary function call?

What kinds of code are considered unnecessary?
Are there any more unnecessary code that should also be removed?

### Is the data stored in the proper data type?
Should "page count" be consistently represented as a string or a number in the app?

### Meaningful variable names
```javascript
// These variable names do not clearly reflect that they store DOM nodes.
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");
```
Using descriptive and consistent suffixes (like `El`, `Input`, `Btn`, `Form`, etc.) for variables that store DOM nodes can improve code readability and maintainability.

### What is the data type of `.value`?
In `submit()`, do we need to check if `.value` is `null`?

### Preprocessing input  
Before using input in an app, we should properly preprocess it (even if basic validation has already been enforced in HTML):
  - **Input Validation** - Check whether the input meets expected formats, types, and constraints
  - **Input Sanitization** - Clean input to exclude unwanted or potentially harmful data
  - **Input Normalization/Conversion** - Transform input into the correct data type or a standardized, usable format

Questions to consider:
  - Should `title` and `author` be allowed to contain only space characters?
  - Should `title` and `author` be allowed to contain leading or trailing space characters?
  - What type of value should we use to store the page count?
  - What kinds of input values (if any) should be rejected?

### Efficient approach to remove rows in `<table>`
In `render()`, instead of deleting table rows one by one, we could delete all rows in one operation by clearing their container.

### Differences among `.innerHTML`, `innerText`, and `textContent`
When setting the text content of an HTML element, there are subtle but important differences between using `.innerHTML`, `innerText`, and `textContent`.

In `render()`, are the text values assigned to the appropriate property of each DOM node?

### Value of `id` attribute
In `render()`,
- Are the values assigned to the `id` attributes unique? 
- Is there any need to assign an `id` attribute to the buttons?

### Naming consistency
The names given to the two buttons, `changeBut` and `delButton`, are not consistent.

### Simplifying if-else 
```javascript
    let readStatus = "";
    if (myLibrary[i].check == true) {
      readStatus = "Yes";
    } else {
      readStatus = "No";
    }
    changeBut.innerText = readStatus;
```

This block of code can be reduced to one statement using the `? :` operator.

### Confirmation message timing issue
In the callback function of the delete button, the alert message is shown before the book is actually deleted;
the deletion only occurs after the alert dialog is dismissed. This introduces a risk that the operation may
not complete (e.g., if the user closes the browser before dismissing the alert).

In general, it's better to display a confirmation message only after the associated operation has successfully
completed.

**Stretch**: `window.alert()` can block the page from being updated. Can you figure out a way to show the 
"You've deleted title ..." message without using `window.alert()`?

### Refactoring code
- Change `let` to `const` for variables not being reassigned a value


