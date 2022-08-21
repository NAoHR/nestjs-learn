import { Injectable } from '@nestjs/common';
import { ArrayBooks, BookInterface } from './books-interface';

@Injectable()
export class BooksService {
    private books: ArrayBooks = [
        {
            id: 0,
            title: "lorem ipsum dolor amet",
            author: "lorem",
            description: "lorem ipsum blaaaaaaaaaaaaaaaaaaaaaaaaa",
            rating: 5
        },
        {
            id: 1,
            title: "lorem ipsum dolor amet",
            author: "lorem",
            description: "lorem ipsum blaaaaaaaaaaaaaaaaaaaaaaaaa",
            rating: 5
        },
        {
            id: 2,
            title: "lorem ipsum dolor amet",
            author: "lorem",
            description: "lorem ipsum blaaaaaaaaaaaaaaaaaaaaaaaaa",
            rating: 5
        },
        {
            id: 3,
            title: "lorem ipsum dolor amet",
            author: "lorem",
            description: "lorem ipsum blaaaaaaaaaaaaaaaaaaaaaaaaa",
            rating: 5
        },
        {
            id: 4,
            title: "lorem ipsum dolor amet",
            author: "lorem",
            description: "lorem ipsum blaaaaaaaaaaaaaaaaaaaaaaaaa",
            rating: 5
        },
        {
            id: 5,
            title: "lorem ipsum dolor amet",
            author: "lorem",
            description: "lorem ipsum blaaaaaaaaaaaaaaaaaaaaaaaaa",
            rating: 5
        },
        {
            id: 6,
            title: "lorem ipsum dolor amet",
            author: "lorem",
            description: "lorem ipsum blaaaaaaaaaaaaaaaaaaaaaaaaa",
            rating: 5
        },
    ]

    findAll(): ArrayBooks{
        return this.books;
    }

    findById(id: number): BookInterface{
        const book = this.books.find((book) => book.id === id);
        return book
    }

    addBook(book: BookInterface){
        return {
            message: "data added succesfully",
            book
        }
    }
    
    deleteBook(id: number){
        const book = this.books.find((book) => book.id === id);
        if(book){
            return {
                message: "successfully deleted"
            }
        }
        return {
            message: "book not found"
        }
    }
}
