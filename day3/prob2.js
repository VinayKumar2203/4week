const library = {
    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],
    addBook(book) {
        if (typeof !book.title==String || typeof !book.author==String || !book.year==Number) {
            console.log("Book information is incomplete.");
            return;
        }
        this.books.push(book);
    },
    findBookByTitle(title) {
        return this.books.find(book => book.title === title);
    },
    removeBook(title) {
        const index = this.books.findIndex(book => book.title === title);
        if (index !== -1) {
            this.books.splice(index, 1);
        } else {
            console.log("Book not found.");
        }
    }
};
library.addBook({ title:"neha", author: "George Orwell", year: 1949 });
let findBook= library.findBookByTitle("neha");
let allBooks= library.books
// let removeBook=library.removeBook("neha");
console.log("all books",allBooks);
console.log(findBook)
console.log(library.books.length);
// console.log("removebook",removeBook);
console.log("all books",allBooks);