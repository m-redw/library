const myLibrary = [];

function Book(title, author, pages, read) {
    if (!new.target) throw Error("Use 'new' operator!");

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

for (let i = 0; i < 5; i++) {
    addBookToLibrary('test', 'test', 1, false);
}