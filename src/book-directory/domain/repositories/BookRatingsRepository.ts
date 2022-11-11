import { BookRatings } from '../entities/BookRatings'
import { IsbnVO } from '../value-objects/Isbn.vo'

export interface BookRatingsRepository {
    save(book: BookRatings): Promise<void>
    findAllByUserId(userId: number): Promise<BookRatings[] | null>
    findAllByISBN(isbn: IsbnVO): Promise<BookRatings[] | null>
}