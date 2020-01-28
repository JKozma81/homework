class Book {
    constructor(title, author) {
        this.id = Math.floor(Math.random() * 10000 + 1);
        this.title = title;
        this.author = author;
    }
}

const books = [
    new Book('The Hobbit', 'J.R.R. Tolkien'),
    new Book('The Lord of The Rings: The Fellowship of the Ring', 'J.R.R. Tolkien'),
    new Book('Harry Potter and the Goblet of Fire', 'J. K. Rowling'),
    new Book('Clean Code', 'Robert C. Martin'),
    new Book("You Don't Know JS: Scope & Closures", 'Kyle Simpson'),
    new Book('Egri csillagok', 'Gárdonyi Géza'),
    new Book('The Dark Elf Trilogy', 'R.A. Salvatore')
]

module.exports = { Book, books };