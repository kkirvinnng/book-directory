import { injectable, inject } from 'inversify'
import { ContainerSymbols } from '../../../../dependency-injection/symbols'
import { BookRatingsRepository } from '../../../domain/repositories/BookRatingsRepository'
import { IsbnVO } from '../../../domain/value-objects/Isbn.vo'
import { BookNotFound } from '../../errors/BookNotFound'


@injectable()
export class FindAllRatingsByISBNUseCase {
    constructor(
        @inject(ContainerSymbols.SequelizeBookRatingsRepository)
        private readonly bookRatingsRepository: BookRatingsRepository
    ) { }

    async run(isbn: string) {

        const isbnVO = IsbnVO.build(isbn)

        const booksRatings = await this.bookRatingsRepository.findAllByISBN(isbnVO)

        if (!booksRatings) {
            throw new BookNotFound('No ratings were found for this book')
        }

        return booksRatings

    }
}