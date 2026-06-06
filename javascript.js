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

function displayBooks() {
    const libraryContainer = document.querySelector('.library');
    for (const book of myLibrary) {
        // book card container
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        // book card content
        const title = document.createElement('h3');
        const author = document.createElement('h4');
        const pageCount = document.createElement('p');
        const readStatus = document.createElement('p');
        const removeButton = document.createElement('button');
        const changeReadButton = document.createElement('button');

        // edit book card content
        title.textContent = book.title;
        author.textContent = `By ${book.author}`;
        pageCount.textContent = `${book.pages} pages`;
        if (book.read) {
            readStatus.textContent = 'Read';
            readStatus.classList.add('book-read');
        } else {
            readStatus.textContent = 'Not Read';
            readStatus.classList.add('book-not-read');
        }
        removeButton.textContent = 'Remove';
        changeReadButton.textContent = 'Change Read Status';
        
        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pageCount);
        bookCard.appendChild(readStatus);
        bookCard.appendChild(removeButton);
        bookCard.appendChild(changeReadButton);
        libraryContainer.appendChild(bookCard);
    }
}

addBookToLibrary('test1', 'tester1', 1, false);
addBookToLibrary('test2', 'tester2', 2, true);
addBookToLibrary('test3', 'tester3', 3, false);
addBookToLibrary('test4', 'tester4', 4, false);
addBookToLibrary('test5', 'tester5', 5, true);
addBookToLibrary('test6', 'tester6', 6, true);

displayBooks();