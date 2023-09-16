const bookLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = true;
};

function addBookToLibrary() {
    let bookName = '';
    let authorName = '';
    let bookPage = parseInt('');
    let bookRead = true;
    let bookObject = new Book(bookName, authorName, bookPage, bookRead);
    bookLibrary.push(bookObject);
}

