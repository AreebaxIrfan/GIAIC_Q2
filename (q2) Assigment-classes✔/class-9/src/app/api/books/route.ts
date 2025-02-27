import { NextResponse } from "next/server";

interface Book {
    id: number;
    title: string;
    bookName: string;
    author: string;
    color: string;
}

let books: Book[] = [
    { id: 1, title: 'A Journey to Hogwarts', bookName: 'Harry Potter and the Chamber of Secrets', author: 'J.K. Rowling', color: 'blue' },
    { id: 3, title: 'The Battle of Helms Deep', bookName: 'The Lord of the Rings: The Two Towers', author: 'J.R.R. Tolkien', color: 'green' },
    { id: 4, title: 'The Lion, the Witch, and the Wardrobe', bookName: 'The Chronicles of Narnia', author: 'C.S. Lewis', color: 'red' },
    { id: 5, title: 'The Dragon Reborn', bookName: 'The Wheel of Time', author: 'Robert Jordan', color: 'purple' },
    { id: 6, title: 'A Game of Thrones', bookName: 'A Song of Ice and Fire', author: 'George R.R. Martin', color: 'gold' },
    { id: 7, title: 'An Unexpected Journey', bookName: 'The Hobbit', author: 'J.R.R. Tolkien', color: 'brown' },
    { id: 8, title: 'The Hunger Games Begin', bookName: 'The Hunger Games', author: 'Suzanne Collins', color: 'orange' },
];

// GET - Fetch all books
export async function GET() {
    try {
        return NextResponse.json(books, { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        return NextResponse.json({ message: "Error fetching books" }, { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}

// POST - Add a new book
export async function POST(request: Request) {
    try {
        const { title, author, color } = await request.json();
        if (!title || !author || !color) {
            return NextResponse.json(
                { message: "Missing required fields: title, author, and color are required." },
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const newBook: Book = {
            id: books.length + 1,
            title,
            bookName: title,
            author,
            color,
        };

        books.push(newBook);
        return NextResponse.json(newBook, { status: 201, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        return NextResponse.json({ message: "Error adding the book" }, { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}

// PUT - Update a book by ID
export async function PUT(request: Request) {
    try {
        const { id, title, author, color } = await request.json();
        const bookIndex = books.findIndex((book) => book.id === id);

        if (bookIndex === -1) {
            return NextResponse.json({ message: "Book not found" }, { status: 404, headers: { 'Content-Type': 'application/json' } });
        }

        books[bookIndex] = { id, title, bookName: title, author, color };
        return NextResponse.json(books[bookIndex], { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        return NextResponse.json({ message: "Error updating the book" }, { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}

// DELETE - Remove a book by ID
export async function DELETE(request: Request) {
    try {
        const { id } = await request.json();
        const bookIndex = books.findIndex((book) => book.id === id);

        if (bookIndex === -1) {
            return NextResponse.json({ message: "Book not found" }, { status: 404, headers: { 'Content-Type': 'application/json' } });
        }

        const deletedBook = books.splice(bookIndex, 1);
        return NextResponse.json(deletedBook[0], { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        return NextResponse.json({ message: "Error deleting the book" }, { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}
