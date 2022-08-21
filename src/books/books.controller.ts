import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { BookInterface } from './books-interface';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService){}

    @Get()
    findAllBooks(){
        return this.booksService.findAll();
    }

    @Get(":id")
    findByID(@Param("id") id: string){
        return this.booksService.findById(Number(id));
    }

    @Post()
    addBook(@Body() book: BookInterface){
        return this.booksService.addBook(book);
    }

    @Delete(":id")
    deleteBook(@Param("id") id: string){
        return this.booksService.deleteBook(Number(id));
    }
}
