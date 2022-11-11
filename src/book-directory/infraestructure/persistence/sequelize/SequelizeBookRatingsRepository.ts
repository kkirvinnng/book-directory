import { injectable } from 'inversify'
import { BookRatings } from '../../../domain/entities/BookRatings'
import { BookRatingsRepository } from '../../../domain/repositories/BookRatingsRepository'
import { BookRatingVO } from '../../../domain/value-objects/BookRating.vo'
import { IsbnVO } from '../../../domain/value-objects/Isbn.vo'
import { bookRatingsModel } from './models/bookRatings.model'
import { SequelizeBookRatings } from './models/SequelizeBookRatings'



@injectable()
export class SequelizeBookRatingsRepository implements BookRatingsRepository {

    private async toDomain(persistanceBookRating: SequelizeBookRatings) {
        const { User_ID, ISBN, Book_Rating } = persistanceBookRating

        const isbnVO = new IsbnVO(ISBN)
        const bookRatingVO = new BookRatingVO(Book_Rating)

        return BookRatings.create({
            userId: User_ID,
            isbn: isbnVO,
            bookRating: bookRatingVO,
        })

    }

    private toPersistance(domainBookRating: BookRatings) {
        const { userId, isbn, bookRating } = domainBookRating
        return {
            User_ID: userId,
            ISBN: isbn.value,
            Book_Rating: bookRating.value,
        }
    }

    async save(book: BookRatings): Promise<void> {
        const persistRating = this.toPersistance(book)

        await bookRatingsModel.create(persistRating)
    }

    async findAllByUserId(userId: number): Promise<BookRatings[] | null> {

        const ratingFound = await bookRatingsModel.findAll({ where: { User_ID: userId } })

        if (!ratingFound) return null

        const ratingDomain = await Promise.all(

            ratingFound.map(async rating => {
                return await this.toDomain(rating)
            })
        )

        return ratingDomain
    }

    async findAllByISBN(isbnVO: IsbnVO): Promise<BookRatings[] | null> {
        const isbn = isbnVO.value
        const ratingFound = await bookRatingsModel.findAll({ where: { ISBN: isbn } })

        if (!ratingFound) return null

        const ratingDomain = await Promise.all(

            ratingFound.map(async rating => {
                return await this.toDomain(rating)
            })
        )

        return ratingDomain
    }


}

