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
const allDeleteButton = document.querySelectorAll('.delete');
const form = document.querySelector('.form');


addBookButton.addEventListener('click', (e) => {
    modal.showModal();
})

closeModal.addEventListener('click', (e) => {
    modal.close();
})

inputBookButton.addEventListener('click', (e) =>{
    e.preventDefault();
    if (!form.checkValidity()) {
        if (!inputBook.validity.valid) {
            validityFunctionCall.bookValidation();
        } else if (!inputAuthor.validity.valid) {
            validityFunctionCall.authorValidation();
        } else if (!inputPages.validity.valid) {
            validityFunctionCall.pageValidation();
        }
    } else {
        functionClass.callBothFunctions(e);
    }
})

pageLibrary.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        const button = e.target;
        const bookNumber = button.getAttribute('data-index');
        functionClass.deleteBook(bookNumber);
        pageLibrary.innerHTML = '';
        functionClass.addBookToLibrary();
    }
});

pageLibrary.addEventListener('click', (e) => {
    if (e.target.classList.contains('change-read')) {
        const button = e.target;
        const bookNumber = button.getAttribute('data-index');
        functionClass.changeReadStatus(bookNumber);
        pageLibrary.innerHTML = '';
        functionClass.addBookToLibrary();
    }
});

form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
        e.preventDefault()
        validityFunctionCall.bookValidation();
        validityFunctionCall.authorValidation();
        validityFunctionCall.pageValidation();
    }
})

inputBook.addEventListener('input', (e) =>{
    validityFunctionCall.bookValidation();
})

inputAuthor.addEventListener('input', (e) => {
    validityFunctionCall.authorValidation();
})

inputPages.addEventListener('input', (e) => {
    if (inputPages.validity.typeMismatch) {
        inputPages.setCustomValidity('You must enter a number');
        console.log('not a num')
    } else {
        inputPages.setCustomValidity('');
    }
})

class Book {
    constructor (name, author, pages, read) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

class BookFunction {
    constructor() {};
    addBookToArray() {
        let bookName = inputBook.value;
        console.log(bookName);
        let authorName = inputAuthor.value;
        let bookPage = inputPages.value;
        let bookRead = inputRead.value;
        let bookObject = new Book(bookName, authorName, bookPage, bookRead);
        bookLibrary.push(bookObject);
    } 
    addBookToLibrary() {
        for(let i=0; i<bookLibrary.length; i++) {
            let createBookDiv = document.createElement('div');
            pageLibrary.appendChild(createBookDiv);
            createBookDiv.classList.add('book');
    
            let createTitle = document.createElement('h2');
            createBookDiv.appendChild(createTitle);
            createTitle.classList.add('title');
            createTitle.textContent = `Book: ${bookLibrary[0+i].name}`
    
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
            if (bookLibrary[0+i].read === 'true') {
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
            createButtonRead.setAttribute('data-index', i);
    
            let createButtonDelete = document.createElement('button');
            createButtonDiv.appendChild(createButtonDelete);
            createButtonDelete.classList.add('delete');
            createButtonDelete.textContent = 'Delete';
            createButtonDelete.setAttribute('data-index', i);
    
        }
    }
    callBothFunctions() {
        this.addBookToArray();
        pageLibrary.innerHTML = '';
        this.addBookToLibrary();
        modal.close();
    }
    deleteBook(index) {
        bookLibrary.splice(index,1);
    }
    changeReadStatus(index) {
        if (bookLibrary[index].read === "true") {
            bookLibrary[index].read = "false";
        } else if (bookLibrary[index].read === "false") {
            bookLibrary[index].read = "true";
        };
    }
}

let functionClass = new BookFunction();


class ValidationFunction {
    constructor() {};
    bookValidation() {
        if (inputBook.validity.valueMissing) {
            inputBook.setCustomValidity('You must enter a book name');
            inputBook.reportValidity();
        } else {
            inputBook.setCustomValidity('');
        }
    }
    authorValidation() {
        if (inputAuthor.validity.valueMissing) {
            inputAuthor.setCustomValidity('You must enter an author name');
            inputAuthor.reportValidity();
            console.log('missing author');
        } else {
            inputAuthor.setCustomValidity('');
        }
    }
    pageValidation() {
        if (!inputPages.validity.typeMismatch) {
            inputPages.setCustomValidity('You must enter a number');
            inputPages.reportValidity();
        } else {
            inputPages.setCustomValidity('');
        }
    }
}

let validityFunctionCall = new ValidationFunction();
