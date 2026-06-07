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
    displayBooks();
}

function displayBooks() {
    const libraryContainer = document.querySelector('.library');
    
    // Clean up
    while (libraryContainer.firstChild) {
        libraryContainer.removeChild(libraryContainer.firstChild);
    }

    // Add all books into display
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
        
        removeButton.type = 'button';
        changeReadButton.type = 'button';
        removeButton.addEventListener('click', ()=>{
            const index = myLibrary.indexOf(book);
            myLibrary.splice(index, 1);
            bookCard.remove();
        });
        changeReadButton.addEventListener('click', ()=>{
            book.read = !book.read
            if (book.read) {
                readStatus.textContent = 'Read';
                readStatus.classList.add('book-read');
            } else {
                readStatus.textContent = 'Not Read';
                readStatus.classList.add('book-not-read');
        }
        });

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pageCount);
        bookCard.appendChild(readStatus);
        bookCard.appendChild(removeButton);
        bookCard.appendChild(changeReadButton);
        libraryContainer.appendChild(bookCard);
    }
}

const form = document.querySelector('form');
const dialog = document.querySelector('dialog')
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    dialog.close();

    const title = event.target[0].value;
    const author = event.target[1].value;
    const pages = event.target[2].value;
    const read = event.target[3].checked;

    addBookToLibrary(title,author,pages,read);
});