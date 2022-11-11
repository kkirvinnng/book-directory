import { IsbnVO } from '../value-objects/Isbn.vo'
import { UrlVO } from '../value-objects/Url.vo'
import { YearVO } from '../value-objects/Year.vo'

export class Book {

    private constructor(

        public isbn: IsbnVO,
        public bookTitle: string,
        public bookAuthor: string,
        public yearOfPublication: YearVO,
        public publisher: string,
        public imageURL_S: UrlVO,
        public imageURL_M: UrlVO,
        public imageURL_L: UrlVO

    ) { }

    static create({
        isbn,
        bookTitle,
        bookAuthor,
        yearOfPublication,
        publisher,
        imageURL_S,
        imageURL_M,
        imageURL_L
    }: {
        isbn: IsbnVO,
        bookTitle: string,
        bookAuthor: string,
        yearOfPublication: YearVO,
        publisher: string,
        imageURL_S: UrlVO,
        imageURL_M: UrlVO,
        imageURL_L: UrlVO
    }) {
        return new Book(
            isbn,
            bookTitle,
            bookAuthor,
            yearOfPublication,
            publisher,
            imageURL_S,
            imageURL_M,
            imageURL_L
        )
    }
}