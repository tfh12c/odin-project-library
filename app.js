let myLibrary = [
    {
        title: "The Audacity of Hope",
        author: "Barack Obama",
        pages: 362,
        description: "The Audacity of Hope: Thoughts on Reclaiming the American Dream is the second book written by Barack Obama.[1] It became number one on both the New York Times and Amazon.com bestsellers lists in the fall of 2006, after Obama had been endorsed by Oprah Winfrey.[2] In the book, Obama expounds on many of the subjects that became part of his 2008 campaign for the presidency.",
        read: true
    },
    {
        title: "What Happened",
        author: "Hillary Clinton",
        pages: 512,
        description: "In this “candid and blackly funny” (The New York Times) memoir, Hillary Rodham Clinton reveals what she was thinking and feeling during one of the most controversial and unpredictable presidential elections in history. She takes us inside the intense personal experience of becoming the first woman nominated for president by a major party in an election marked by rage, sexism, exhilarating highs and infuriating lows, stranger-than-fiction twists, Russian interference, and an opponent who broke all the rules.",
        read: false
    },
];

function Book(title, author, pages, description, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.description = description,
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
        bookAuthor.innerText = `by ${book.author}`;
        bookElement.appendChild(bookAuthor);

        //create book pages
        const bookPages = document.createElement('p');
        bookPages.classList.add('book__pages');
        bookPages.innerText = `${book.pages} pages`;
        bookElement.appendChild(bookPages);

        //create book description
        const bookDescription = document.createElement('p');
        bookDescription.classList.add('book-description');
        bookDescription.innerText = book.description;
        bookElement.appendChild(bookDescription);

        //create isRead 
        const isRead = document.createElement('button');
        isRead.classList.add('book__is-read-button');
        isRead.innerText = (book.read === true) ? "Read" : "Not Read";
        bookElement.appendChild(isRead);
    })
}
displayBook(myLibrary);