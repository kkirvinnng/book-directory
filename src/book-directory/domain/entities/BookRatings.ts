import { BookRatingVO } from '../value-objects/BookRating.vo'
import { IsbnVO } from '../value-objects/Isbn.vo'



export class BookRatings {

    private constructor(

        public userId: number,
        public isbn: IsbnVO,
        public bookRating: BookRatingVO
    ) { }

    static create({
        userId,
        isbn,
        bookRating
    }: {
        userId: number,
        isbn: IsbnVO,
        bookRating: BookRatingVO
    }) {
        return new BookRatings(userId, isbn, bookRating)
    }
}