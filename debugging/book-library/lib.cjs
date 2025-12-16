class Book {
  constructor(title, author, pages, check) {
    this.title = title;
    this.author = author;
    this.pages = Number(pages);
    this.check = Boolean(check);
  }
  toggleRead() {
    this.check = !this.check;
  }
}

function validateTitle(title) {
  return typeof title === "string" && title.trim().length > 0;
}

function validatePages(pages) {
  const n = Number(pages);
  return Number.isFinite(n) && n > 0;
}

module.exports = { Book, validateTitle, validatePages };
