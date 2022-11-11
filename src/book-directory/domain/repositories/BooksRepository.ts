import { Book } from '../entities/Book'
import { IsbnVO } from '../value-objects/Isbn.vo'

export interface BooksRepository {
    save(book: Book): Promise<void>
    findByISBN(isbnVO: IsbnVO): Promise<Book | null>
    removeByISBN(isbnVO: IsbnVO): Promise<void>

    findByFilters(book: Partial<Pick<Book,
        'bookAuthor'
        | 'bookTitle'
        | 'yearOfPublication'
        | 'publisher'
    >>): Promise<Book[] | null>

    findAll(): Promise<Book[] | null>

}