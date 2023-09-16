function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let bookInfo = `${title} by ${author}, ${pages}, ${read}`
        return bookInfo
    }
};

const theHobbit = new Book('The Hobbit', 'JRR Tolkien', '295 Pages', 'Not Read');
console.log(theHobbit.info());