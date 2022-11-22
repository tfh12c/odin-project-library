let myLibrary = [
    {
        title: "The Audacity of Hope",
        author: "Barack Obama",
        pages: 362,
        read: true
    },
    {
        title: "What Happened",
        author: "Hillary Clinton",
        pages: 512,
        read: false
    },
];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function addBookToLibrary() {
    //this function will run after hitting submit button to add book to myLibrary array
}

//div to hold book cards
const bookCards = document.querySelector('.main__book-cards');

function displayBook(myLibrary) {
    bookCards.innerHTML = ''; //clear books before appending to avoid dupes

    myLibrary.forEach((book) => {
        //create book article 
        const bookElement = document.createElement('article');
        bookElement.classList.add('book');
        bookCards.appendChild(bookElement);

        //create book title
        const bookTitle = document.createElement('h2');
        bookTitle.classList.add('book__title');
        bookTitle.innerText = book.title;
        bookElement.appendChild(bookTitle);

        //create book author
        const bookAuthor = document.createElement('h3');
        bookAuthor.classList.add('book__author');
        bookAuthor.innerText = book.author;
        bookElement.appendChild(bookAuthor);

        //create book pages
        const bookPages = document.createElement('p');
        bookPages.classList.add('book__pages');
        bookPages.innerText = book.pages;
        bookElement.appendChild(bookPages);

        //create isRead 
        const isRead = document.createElement('button');
        isRead.classList.add('book_is-read-button');
        isRead.innerText = (book.read === true) ? "Read" : "Not Read";
        bookElement.appendChild(isRead);
    })
}
displayBook(myLibrary);