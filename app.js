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
    this.read = (read = true ? "read" : "not read")
}

function addBookToLibrary() {
    //this function will run after hitting submit button to add book to myLibrary array
}

