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
    {
        title: "Harry Potter and the Deathly Hallows",
        author: "J. K. Rowling",
        pages: 607,
        description: "Harry Potter and the Deathly Hallows is a fantasy novel written by British author J. K. Rowling and the seventh and final novel of the main Harry Potter series. It was released on 21 July 2007 in the United Kingdom by Bloomsbury Publishing, in the United States by Scholastic, and in Canada by Raincoast Books. The novel chronicles the events directly following Harry Potter and the Half-Blood Prince (2005) and the final confrontation between the wizards Harry Potter and Lord Voldemort.",
        read: true
    },
    {
        title: "The Ride of a Lifetime",
        author: "Robert Iger",
        pages: 272,
        description: "Robert Iger became CEO of The Walt Disney Company in 2005, during a difficult time. Competition was more intense than ever and technology was changing faster than at any time in the company’s history. His vision came down to three clear ideas: Recommit to the concept that quality matters, embrace technology instead of fighting it, and think bigger—think global—and turn Disney into a stronger brand in international markets. Today, Disney is the largest, most admired media company in the world, counting Pixar, Marvel, Lucasfilm, and 21st Century Fox among its properties. Its value is nearly five times what it was when Iger took over, and he is recognized as one of the most innovative and successful CEOs of our era.",
        read: false
    },
    {
        title: "Unfu*k Yourself",
        author: "Gary John Bishop",
        pages: 224,
        description: "Are you tired of feeling fu*ked up? If you are, Gary John Bishop has the answer. In this straightforward handbook, he gives you the tools and advice you need to demolish the slag weighing you down and become the truly unfu*ked version of yourself. ''Wake up to the miracle you are,'' he directs. ''Here's what you've forgotten: You're a fu*king miracle of being.'' It isn't other people that are standing in your way, it isn't even your circumstances that are blocking your ability to thrive, it's yourself and the negative self-talk you keep telling yourself.",
        read: false
    },
    {
        title: "Me Talk Pretty One Day",
        author: "David Sedaris",
        pages: 288,
        description: "Me Talk Pretty One Day, published in 2000, is a bestselling collection of essays by American humorist David Sedaris. The book is separated into two parts. The first part consists of essays about Sedaris’s life before his move to Normandy, France, including his upbringing in suburban Raleigh, North Carolina, his time working odd jobs in New York City, and a visit to New York from a childhood friend and her bumpkinish girlfriend. The second section, 'Deux', tells of Sedaris’s move to Normandy with his partner Hugh, often drawing humor from his efforts to live in France without speaking the French language and his frustrated attempts to learn it.",
        read: false
    },
];

//Constructor Function for Book
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
        bookDescription.classList.add('book__description');
        bookDescription.innerText = book.description;
        bookElement.appendChild(bookDescription);

        //create div to hold isRead and delete buttons
        const bookButtonDiv = document.createElement('div');
        bookButtonDiv.classList.add('book__button-div');
        bookElement.appendChild(bookButtonDiv);

        //create isRead 
        const isRead = document.createElement('button');
        if (book.read === true) {
            isRead.classList.add('book__is-read');
        } else {
            isRead.classList.add('book__is-not-read');
        }
        isRead.innerText = (book.read === true) ? "Read" : "Not Read";
        bookButtonDiv.appendChild(isRead);

        //create remove book buton
        const removeBook = document.createElement('button');
        removeBook.classList.add('book__remove-button');
        removeBook.innerText = "Remove Book";
        bookButtonDiv.appendChild(removeBook);
    })
}
displayBook(myLibrary);

//html elements
var modal = document.getElementById('myModal');
const openModal = document.querySelector('.header__add-book-button');
const closeModal = document.querySelector('.main__modal-close');

//event listeners for modal
openModal.addEventListener('click', () => {
    modal.style.display = "flex";
})
closeModal.addEventListener('click', () => {
    modal.style.display = "none";
})
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    else {
        console.log('hi');
    }
}