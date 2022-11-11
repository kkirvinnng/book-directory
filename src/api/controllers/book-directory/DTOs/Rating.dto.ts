import { BookRatings } from '../../../../book-directory/domain/entities/BookRatings'

export interface RatingDTO {
    userId: number,
    isbn: string,
    bookRating: number
}

export const mapperRatingDTO = (rating: BookRatings) => {

    const dto: RatingDTO = {
        userId: rating.userId,
        isbn: rating.isbn.value,
        bookRating: rating.bookRating.value
    }

    return dto
}
