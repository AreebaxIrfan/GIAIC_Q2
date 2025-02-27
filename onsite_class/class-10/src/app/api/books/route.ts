import { NextResponse } from "next/server";

let books = [
    { id: 1, title: 'A Journey to Hogwarts', bookName: 'Harry Potter and the Chamber of Secrets', author: 'J.K. Rowling' },
    { id: 3, title: 'The Battle of Helms Deep', bookName: 'The Lord of the Rings: The Two Towers', author: 'J.R.R. Tolkien' },
    { id: 4, title: 'The Lion, the Witch, and the Wardrobe', bookName: 'The Chronicles of Narnia', author: 'C.S. Lewis' },
    { id: 5, title: 'The Dragon Reborn', bookName: 'The Wheel of Time', author: 'Robert Jordan' },
    { id: 6, title: 'A Game of Thrones', bookName: 'A Song of Ice and Fire', author: 'George R.R. Martin' },
    { id: 7, title: 'An Unexpected Journey', bookName: 'The Hobbit', author: 'J.R.R. Tolkien' },
    { id: 8, title: 'The Hunger Games Begin', bookName: 'The Hunger Games', author: 'Suzanne Collins' },

]

export async function GET() {
    try {
        return NextResponse.json(books, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { message: "Error fetching books" },
            { status: 500 }
        )
    }
}