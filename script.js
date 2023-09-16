const bookLibrary = [];


const pageLibrary = document.querySelector('.library');
const addBookButton = document.querySelector('#add-book');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = true;
}

function addBookToArray() {
    let bookName = '';
    let authorName = '';
    let bookPage = '';
    let bookRead = true;
    let bookObject = new Book(bookName, authorName, bookPage, bookRead);
    bookLibrary.push(bookObject);
}

function addBookToLibrary() {
    for(let i=0; 0<=i<=bookLibrary.length(); i++) {
        let createBookDiv = document.createElement('div');
        pageLibrary.appendChild(createBookDiv);
        createBookDiv.classList.add('book');

        let createTitle = document.createElement('h2');
        createBookDiv.appendChild(createTitle);
        createTitle.classList.add('title');
        createTitle.textContent = `Book: ${bookLibrary[0+i].title}`

        let createAuthor = document.createElement('p');
        createBookDiv.appendChild(createAuthor);
        createAuthor.classList.add('author');
        createAuthor.textContent = `Author: ${bookLibrary[0+i].author}`

        let createPages = document.createElement('p');
        createBookDiv.appendChild(createPages);
        createPages.classList.add('pages');
        createPages.textContent = `Pages: ${bookLibrary[0+i].pages}`

        let createRead = document.createElement('p');
        createBookDiv.appendChild(createRead);
        createRead.classList.add('read');
        if (bookLibrary[0+i].read === true) {
            createRead.textContent = "Read: Yes"
        } else {
            createRead.textContent = "Read: Not Yet"
        };

        let createButtonDiv = document.createElement('div');
        createBookDiv.appendChild(createButtonDiv);
        createButtonDiv.classList.add('button-group');

        let createButtonRead = document.createElement('button');
        createButtonDiv.appendChild(createButtonRead);
        createButtonRead.classList.add('change-read');

        let createButtonDelete = document.createElement('button');
        createButtonDiv.appendChild(createButtonDelete);
        createButtonDelete.classList.add('delete');

    }
}

