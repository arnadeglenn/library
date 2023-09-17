const bookLibrary = [];


const pageLibrary = document.querySelector('.library');
const addBookButton = document.querySelector('#add-book');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const inputBook = document.querySelector('#input-title');
const inputAuthor = document.querySelector('#input-author');
const inputPages = document.querySelector('#input-pages');
const inputRead = document.querySelector('#input-read');
const inputBookButton = document.querySelector('#add-book-form');


addBookButton.addEventListener('click', (e) => {
    modal.showModal();
})

closeModal.addEventListener('click', (e) => {
    modal.close();
})

inputBookButton.addEventListener('click', (e) =>{
    e.preventDefault();
    callBothFunctions(e);
})


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToArray() {
    let bookName = inputBook.value;
    console.log(bookName);
    let authorName = inputAuthor.value;
    let bookPage = inputPages.value;
    let bookRead = inputRead.value;
    let bookObject = new Book(bookName, authorName, bookPage, bookRead);
    bookLibrary.push(bookObject);
}

function addBookToLibrary() {
    for(let i=0; i<bookLibrary.length; i++) {
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
        createButtonRead.textContent = 'Read?';

        let createButtonDelete = document.createElement('button');
        createButtonDiv.appendChild(createButtonDelete);
        createButtonDelete.classList.add('delete');
        createButtonDelete.textContent = 'Delete';

    }
}

function callBothFunctions() {
    addBookToArray();
    addBookToLibrary();
    modal.close();
}



